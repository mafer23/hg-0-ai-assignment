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

async function fetchData(scrappedData)
{
  const postData = {
    data: scrappedData
  }

  try 
  {
    const responseFetch = await fetch(`http://ec2-54-185-33-120.us-west-2.compute.amazonaws.com/predict?data=${postData.data}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });

    const data = await responseFetch.json();

    return data;
  }
  catch (error) 
  {
    console.error('Error:', error);
  }
}

function handleAlert(prediction)
{
  if (prediction) alert('Esta página es adecuada')
  else alert('Esta página es inadecuada')
}

// Response = {prediction: }
async function extract(url)
{
  extractor.extractData(url, async (err, data) =>
  {
    // console.log(data.content);

    const htmlString = JSON.stringify(data.content);
    const objects = convertHTMLToObjects(htmlString);
    // console.log(objetos);
    // console.log(json2md(objetos));

    try 
    {
      const result = await fetchData(json2md(objects));
      console.log('Response:', result.prediction);
      handleAlert(result.prediction);
    } 
    catch (error) 
    {
      console.error('Error:', error);
    }
  });
}
