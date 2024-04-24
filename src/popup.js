'use strict';

const extractor = require('article-extractor')

document.addEventListener('DOMContentLoaded', function()
{
  let getUrlButton = document.getElementById('get-url-button');
  getUrlButton.addEventListener('click', function()
  {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs)
    {
      const currentUrl = tabs[0].url;
      // Mostrar la url
      // console.log('URL: ', currentUrl);

      extract(currentUrl);
    });
  });
});

function extract(url)
{
  extractor.extractData(url, (err, data) =>
  {
    console.log(data);
  });
}

