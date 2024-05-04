console.log("Cargando...");

document.addEventListener('DOMContentLoaded', function()
{
  console.log("DOM cargado");
  // Encontrar los elementos <p> en la página
  const paragraphs = document.querySelectorAll('p');

  // Iterar sobre todos los elementos <p>
  paragraphs.forEach(function(paragraph)
  {
    // Mostrar el texto de cada elemento <p> en consola
    console.log(paragraph.innerText);
  });
});

