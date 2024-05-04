'use strict'

const json2md = require('json2md');

function convertirHTMLaObjetos(htmlString) {
  // Crea un elemento temporal para contener el HTML
  var tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;
  
  // Obtiene todos los elementos hijos del elemento temporal
  var children = tempElement.children;
  
  // Array para almacenar los objetos resultantes
  var objetos = [];
  
  // Itera sobre los elementos hijos y crea objetos para cada uno
  for (var i = 0; i < children.length; i++) {
      var elemento = children[i];
      var objeto = {};
      
      // Obtén el nombre de la etiqueta y su contenido
      var tagName = elemento.tagName.toLowerCase();
      var contenido = elemento.textContent.trim();
      
      // Añade el objeto al array
      objeto[tagName] = contenido;
      objetos.push(objeto);
  }
  
  return objetos;
}

document.addEventListener('DOMContentLoaded', function()
{
  let getUrlButton = document.getElementById('get-url-button');
  getUrlButton.addEventListener('click', () => {
    var htmlString = "<p>Hola esto es</p><h1>un texto equisdé</h1>";
    var objetos = convertirHTMLaObjetos(htmlString);
    console.log(objetos); // Mostrará [{p: "Hola esto es"}, {h1: "un texto equisdé"}]
  });
});




// const data = { domain: 'Hello, World!' }
// const dataConverted = JSON.stringify(data);

// console.log(json2md(dataConverted));
