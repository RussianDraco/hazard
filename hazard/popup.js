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
                    const urls = extractRedirectLinks(results[0].result);
                    for (let i = 0; i < urls.length; i++) {
                        const html = await getHTMLBody(urls[i]);
                        const extract = extractTableInfo(html);
                        if (extract) {
                            extracts.push(extract);
                        } else {
                            extracts.push('EMPTY_INFO');
                        }
                        document.getElementById('html-content').value = extracts.join('\n\n');
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
    const links = [];
    const used_ids = [];
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

    return links;
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
    return lst.join('\n');
}