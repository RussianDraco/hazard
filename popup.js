(document.getElementById('get-html'))?.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                function: getBodyContent
            },
            (results) => {
                if (results && results[0] && results[0].result) {
                    const url = extractRedirectLinks(results[0].result)[0];
                    document.getElementById('html-content').value = url + '\n' + getHTMLBody(url);
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
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const htmlContent = await response.text();
      return htmlContent;
    } catch (error) {
      console.error('Error fetching the HTML:', error);
    }
  }