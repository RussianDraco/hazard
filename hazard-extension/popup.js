TITLE_LIMIT = 70;

chrome.cookies.get({
    url: "http://localhost:3000",  // Just the domain, no need for a full path
    name: "allergies"
  }, function(cookie) {
    if (cookie) {
      console.log("Cookie value:", cookie.value);
      ALLERGENS = cookie.value.replaceAll('[', '').replaceAll(']', '').split(',')
    } else {
      chrome.tabs.create({url: "localhost:3000"})
    }
});

function modifyProduct(href, canhave) {
    const elements = document.querySelectorAll(`[href="${href}"]`);

    for (let i = 0; i < elements.length; i++) {
        elements[i].firstElementChild.innerHTML = elements[i].firstElementChild.innerHTML + ' STATUS=' + canhave;
    }
}

function normalize_title(title) {
    return title.length > TITLE_LIMIT ? title.substring(0, TITLE_LIMIT) + '...' : title.padEnd(TITLE_LIMIT, ' ');
}
function normalize_allergens(allergen) {
    if (allergen == 0) {
        return 'Unknown :/';
    }
    if (allergen == 1) {
        return 'Not Safe >:(';
    }
    if (allergen == 2) {
        return 'Safe to Eat :)';
    }
    return 'ERROR_REACHING_WRONG'; //should never reach here
}
function combine_titl_alrg(titles, allergens) {
    let res = [];
    for (let i = 0; i < titles.length; i++) {
        res.push(normalize_title(titles[i]) + ' : ' + normalize_allergens(allergens[i]));
    }
    return res.join('\n');
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
                    //const imgs = luObj.imgs;
                    let canhaves = [];
                    let titles = [];

                    for (let i = 0; i < urls.length; i++) {
                        const html = await getHTMLBody(urls[i]);
                        const title = (new DOMParser()).parseFromString(html, 'text/html').getElementsByClassName('a-size-large product-title-word-break')[0].innerText;
                        titles.push(title);
                        const extract = extractTableInfo(html);
                        if (extract) {
                            extracts.push(extract);
                        } else {
                            extracts.push('EMPTY_INFO');
                        }
                        const ch = canHave(urls[i], extract.i, extract.a);
                        canhaves.push(ch);

                        document.getElementById('html-content').value = combine_titl_alrg(titles, canhaves);
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
    alert(document.innerHTML);

    alert('Adding logo overlay on images');

    // Select all images on the page
    const images = document.querySelectorAll('h2');

    alert(images.length);

    for (let i = 0; i < images.length; i++) {
        alert(images[i]);
    }
}

//canHave => 0: dk; 1: no; 2: yes
function canHave(href, ingredients, allergenInfo) {
    if (!ingredients && !allergenInfo) {
        return 0;
    }

    if (!ingredients) {
        ingredients = '';
    }
    if (!allergenInfo) {
        allergenInfo = '';
    }

    let canHave = 2;
    for (let i = 0; i < ALLERGENS.length; i++) {
        if (href.toLowerCase().includes(ALLERGENS[i])) {
            canHave = 1;
            break;
        }
        if (ingredients.toLowerCase().includes(ALLERGENS[i])) {
            canHave = 1;
            break;
        }
        if (allergenInfo.toLowerCase().includes(ALLERGENS[i])) {
            canHave = 1;
            break;
        }
    }
    return canHave;
}

