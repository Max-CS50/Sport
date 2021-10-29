const addNote = document.querySelector(".parent-div");
const cartNode = document.querySelector(".placeitems");
const createCard = [];

class Card {
   constructor(product) {
      const template = document.getElementById("card-template");
      const content = document.importNode(template.content, true);

      const image = content.querySelector(".item-card-img");
      image.src = product.src;
      this.name = content.querySelector(".card-title");
      this.name.innerHTML = product.name;
      this.price = content.querySelector(".card-price");
      this.price.innerHTML = product.price;
      this.addToCardButton = content.querySelector(".buy");

      this.addToCardButton.onclick = () => this.addToCard(product);

      addNote.appendChild(content);
   }
   addToCard(product) {
      createCard.push(product);
   }
}

class Product {
   constructor(src, name, price) {
      this.src = src;
      this.name = name;
      this.price = price;
   }
}

const Protein = new Product(
   "https://goo.su/8AaB",
   "Protein",
   "15.49$"
);
new Card(Protein);

const Aminoacids = new Product(
   "https://goo.su/8FzX",
   "Amino acids",
   "12.99$"
);
new Card(Aminoacids);

const Weightgain = new Product(
   "https://goo.su/8AAm",
   "Weight gain",
   "17.19$"
);
new Card(Weightgain);

const BCAA = new Product(
   "https://goo.su/8aAn",
   "BCAA",
   "9.99$"
);
new Card(BCAA);

const Fatburners = new Product(
   "https://goo.su/8AaN",
   "Fat burners",
   "11.39$"
);
new Card(Fatburners);

const Forhealth = new Product(
   "https://goo.su/8aAw",
   "For health",
   "18.89$"
);
new Card(Forhealth);

const Creatine = new Product(
   "https://goo.su/8Aba",
   "Creatine",
   "5.29$"
);
new Card(Creatine);

const Nutpastes = new Product(
   "https://goo.su/8Abc",
   "Nut pastes",
   "7.99$"
);
new Card(Nutpastes);

const Drinks = new Product(
   "https://goo.su/8abd",
   "Drinks",
   "4.99$"
);
new Card(Drinks);

const cardProducts = [];

function open_popup() {
   const basket = document.getElementById("popupModal");
   let popup = document.createElement("section");
   popup.className = "popup";
   basket.appendChild(popup);
   popup.innerHTML = `
         <section class="Cartpopup" id="Cartpopup">
         <div class="Cartpopup-inner">
            <div class="Cartpopup-basket">Your order</div>
            <div class="Cartpopup-items">
               <div class="Cartpopup-item">Name</div>
               <div class="Cartpopup-item">Price</div>
            </div>
            <div class="Cartpopup-box">
               <div class="Cartpopup-box-item" id="Cartpopup-item">
                     <div class="placeitems">
                     </div>
               </div>
            </div>
            <div class="list-item-button">
               <button type="button" class="button-b">BUY</button>
            </div>
            <div class="Cartpopup-btn" id="closeModal">
               <div class="Cartpopup-btn-close" onclick="removeModal();">
                  <span class="popup-close">X</span>
               </div>
            </div>
         </div>
         </section>
         `;

   createCard.forEach((product) => {
      const busketName = document.createElement("div");
      const busketPrice = document.createElement("div");

      busketName.className = "Cartpopup-box-name";
      busketPrice.className = "Cartpopup-box-price";

      busketName.innerHTML = product.name;
      busketPrice.innerHTML = product.price;

      document.querySelector(".placeitems").appendChild(busketName);
      document.querySelector(".placeitems").appendChild(busketPrice);
   });
}

const removeModal = function () {
   document.querySelector(".popup").remove();
};
