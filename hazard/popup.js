const ALLERGENS = ['peanut'];

function modifyProduct(href, canhave) {
    const elements = document.querySelectorAll(`[href="${href}"]`);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].firstElementChild.class === 'a-size-base-plus a-color-base a-text-normal') {
            elements[i].firstElementChild.innerHTML = elements[i].firstElementChild.innerHTML + ' STATUS=' + canhave;
        }
    }

    console.log('Modifying product');
    console.log(canhave);
}

(document.getElementById('get-html'))?.addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                function: getBodyContent
            },
            async (results) => {
                if (results && results[0] && results[0].result) {
                    let extracts = [];
                    const luObj = extractRedirectLinks(results[0].result);
                    const urls = luObj.links;
                    const imgs = luObj.imgs;
                    let canhaves = [];
                    for (let i = 0; i < urls.length; i++) {
                        const html = await getHTMLBody(urls[i]);
                        const extract = extractTableInfo(html);
                        if (extract) {
                            extracts.push(extract);
                        } else {
                            extracts.push('EMPTY_INFO');
                        }
                        const ch = canHave(extract.i, extract.a);
                        canhaves.push(ch);
                        modifyProduct(urls[i], ch);

                        document.getElementById('html-content').value = canhaves.join('\n\n');
                    }
                }
            }
        );
    });
});

function getBodyContent() {
    return document.body.innerHTML;
}

function extractRedirectLinks(htmlContent) {
    let links = [];
    let used_ids = [];
    let imgs = []; 
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const anchorTags = doc.querySelectorAll('a');
  
    anchorTags.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (href && href.includes('/dp/') && href.includes('dib=') 
        && !href.includes('#customerReviews') && !href.includes('http')) {
        if (!links.includes(href) && !used_ids.includes(href.split('/')[3])) {
            links.push(href);
            used_ids.push(href.split('/')[3]);
        }
      }
    });
  
    for (let i = 0; i < links.length; i++) {
        links[i] = 'https://www.amazon.ca' + links[i]; //Using the AMAZON.CA domain
    }

    return {
        links: links,
        imgs: imgs
    };
}

async function getHTMLBody(url) {
    return await fetch(url)
        .then(response => response.text())
        .then(text => text);
}

function extractTableInfo(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const tableKeys = doc.getElementsByClassName("a-color-secondary a-size-base prodDetSectionEntry");
    const tableVals = doc.getElementsByClassName("a-size-base prodDetAttrValue");
    
    let outs = [];
    let seekKeys = ["ingredients", "allergen information"];
    
    let lst = [];
    for (let i = 0; i < tableKeys.length; i++) {
        if (seekKeys.includes(tableKeys[i].innerText.toLowerCase().trim())) {
            lst.push(tableVals[i].innerText);
        }
    }
    if (lst.length == 0) {
        return {
            i: null, 
            a: null
        };
    } else if (lst.length == 1) {
        return {
            i: lst[0],
            a: null
        };
    } else {
        return {
            i: lst[0],
            a: lst[1]
        };
    }
}

const logoUrl = 'https://static.vecteezy.com/system/resources/previews/010/152/436/original/tick-check-mark-icon-sign-symbol-design-free-png.png'; // Replace with your logo URL

// Function to add a logo overlay on images
function addLogoOverlay() {
    console.log('Adding logo overlay');

    // Select all images on the page
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        image.src = logoUrl;
    });
}

//canHave => 0: dk; 1: no; 2: yes
function canHave(ingredients, allergenInfo) {
    if (!ingredients && !allergenInfo) {
        return 0;
    }

    if (!ingredients) {
        ingredients = [];
    }
    if (!allergenInfo) {
        allergenInfo = [];
    }

    if (typeof ingredients === 'string') {
        ingredients = ingredients.split(' ');
    }
    if (typeof allergenInfo === 'string') {
        allergenInfo = allergenInfo.split(' ');
    }

    let canHave = 2;
    for (let i = 0; i < ingredients.length; i++) {
        if (ALLERGENS.includes(ingredients[i].toLowerCase().trim().replace(',', '').replace('.', '').replace(':', ''))) {
            canHave = 1;
            break;
        }
    }
    for (let i = 0; i < allergenInfo.length; i++) {
        if (ALLERGENS.includes(allergenInfo[i].toLowerCase().trim().replace(',', '').replace('.', '').replace(':', ''))) {
            canHave = 1;
            break;
        }
    }
    return canHave;
}