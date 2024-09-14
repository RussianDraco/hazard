(document.getElementById('get-html'))?.addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                function: getBodyContent
            },
            async (results) => {
                if (results && results[0] && results[0].result) {
                    const url = extractRedirectLinks(results[0].result)[0];
                    const html = await getHTMLBody(url);
                    const extract = extractAllergenInfo(html);
                    document.getElementById('html-content').value = extract;
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

function extractAllergenInfo(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const allergenInfo = doc.querySelector('#productDescription').textContent;
    return allergenInfo;
}