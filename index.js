
/*Author: Nombagu Raphael Emmanuel 
 Email: emmynombagu@gmail.com*/

 let bagusQuote = document.getElementById('message')
 fetch('https://api.kanye.rest')
 .then(res=>res.json())
 .then(quote=>{
     bagusQuote.innerHTML += `<p>" ${quote.quote} "</p><p>- Bagus-motivator</p>`
 })
 

 let bagusCat = document.getElementById("getcat")
 bagusCat.addEventListener("click", evt=>{
     let catPC = document.getElementById('catpc')
     fetch('https://api.thecatapi.com/v1/images/search?')
     .then(res=> res.json())
     .then(cats=> {
         cats.forEach(cat => {
             catPC.innerHTML = `<h4>Do have a nice and lovely day my dear!!</h4>
             <img class ="card-body" src="${cat.url}" alt="pretty" class="card-img-top" style="width:200px; height:150px;"/>`
             
         });

     })
 })
 