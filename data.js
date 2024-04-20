import { extract } from '@extractus/article-extractor';


// Tu código aquí


const article = await extract('https://www.semana.com/')


console.log(article)
//const message = document.querySelector('h1')

//const boton = document.querySelector('#change-message')


//boton.addEventListener('click', () =>{
    // message.textContent = "nuevo mensaje"
// })