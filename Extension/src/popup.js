'use strict';

const extractor = require('article-extractor');
const json2md = require('json2md');

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

function convertHTMLToObjects(htmlString) 
{
  // Crea un elemento temporal para contener el HTML
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;
  
  // Obtiene todos los elementos hijos del elemento temporal
  const children = tempElement.children;
  
  // Array para almacenar los objetos resultantes
  let objetos = [];
  
  // Itera sobre los elementos hijos y crea objetos para cada uno
  for (let i = 0; i < children.length; i++) {
      const elemento = children[i];
      let objeto = {};
      
      // Obtén el nombre de la etiqueta y su contenido
      const tagName = elemento.tagName.toLowerCase();
      const contenido = elemento.textContent.trim();
      
      // Añade el objeto al array
      objeto[tagName] = contenido;
      objetos.push(objeto);
  }
  
  return objetos;
}

function extract(url)
{
  extractor.extractData(url, (err, data) =>
  {
    // console.log(data.content);

    const htmlString = JSON.stringify(data.content);
    const objetos = convertHTMLToObjects(htmlString);
    // console.log(objetos);
    console.log(json2md(objetos));
  });
}
