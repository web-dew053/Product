const divCard = document.querySelector(".main-wrapper");
const url = "https://fakestoreapi.com/products";

function Product() {
  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((el) => {
        const divElement = document.createElement("div");
        divElement.className = "card_div";
        divElement.innerHTML = `
                <img class="card_img" src=${el.image} alt="">
                <div class="general_card">
                  <p class="card_text">Price: ${el.price}</p>
                  <p class="card_text">Discount: ${el.rating.rate}</p>
                  <p class="card_text">Desc: ${el.rating.rate}</p>
                  <p class="card_text">Name: ${el.title}</p>
                  <i data-post-id="${el.id}" id="icon" class="bx bx-trash"></i>

                </div>
               `;
               divCard.appendChild(divElement)
      }))

      .catch((err) => console.error(err))
}
   Product();
   
   divCard.addEventListener('click', (event) =>{
      if(event.target.classList.contains("bx-trash")){
         const cardId = event.target.getAttribute('data-post-id');
         console.log('Product card is deleted!');
         if(cardId){
            fetch(`https://fakestoreapi.com/products/${cardId}`,{
               method:'DELETE'
            })
            .then(response => {
               console.log(response);
            })
         }
      }

   })

