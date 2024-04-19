const { extract } = require('@extractus/article-extractor');


// Tu código aquí


const myFunction = async () => {
const article = await extract('https://www.cnbc.com/2022/09/21/what-another-major-rate-hike-by-the-federal-reserve-means-to-you.html', {
  descriptionLengthThreshold: 120,
  contentLengthThreshold: 500
})
}

myFunction();
//const message = document.querySelector('h1')

//const boton = document.querySelector('#change-message')


//boton.addEventListener('click', () =>{
    // message.textContent = "nuevo mensaje"
// })