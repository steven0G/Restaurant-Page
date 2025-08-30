import { main, sides, beverages } from "./menu_data.js"; 
function MenuPage() {
     const content = document.querySelector("#content");
   

     const menuHeading = document.createElement("h1");
     const menuSection = document.createElement("section");
     menuSection.setAttribute("class", "menu-section");
     /* 
          <div class="random">
               div class="upper-itemm">
                         <h3 class="item-heading"> </h3>
                         <p class="item-price"> </p>
               </div>
               <p class="item-description" </p>
          </div>     
     */
     const mainSection = document.createElement("div");
     mainSection.setAttribute("class", "main-section");
     const mainHeading = document.createElement("h2");
     mainHeading.textContent = "Main";

     mainSection.appendChild(mainHeading);

     const sidesSection = document.createElement("div");
     sidesSection.setAttribute("class", "sides-section");
     const sidesHeading = document.createElement("h2");
     sidesHeading.textContent = "Sides";

     sidesSection.appendChild(sidesHeading);
     
     const beveragesSection = document.createElement("div");
     beveragesSection.setAttribute("class", "beverages-section");
     const beveragesHeading = document.createElement("h2");
     beveragesHeading.textContent = "Sides";

     beveragesSection.appendChild(beveragesHeading);
     
     main.forEach((item) => {
          
          const innerContainer = document.createElement("div");
          innerContainer.setAttribute("class", "inner-container");

          const upperItem = document.createElement("div");
          upperItem.setAttribute("class", "upper-item");
          
          const h3 = document.createElement("h3");
          h3.setAttribute("class", "item-heading")
          h3.textContent = item.title;

          const itemPrice = document.createElement("p");
          itemPrice.setAttribute("class", "item-price")
          itemPrice.textContent = item.price;

          const description = document.createElement("p");
          description.setAttribute("class", "item-description")
          description.textContent = item.description;

          innerContainer.appendChild(upperItem);

          upperItem.appendChild(h3);
          upperItem.appendChild(itemPrice);
          upperItem.appendChild(description);
          

          mainSection.appendChild(innerContainer);

     });


     sides.forEach((item) => {
          
          const innerContainer = document.createElement("div");
          innerContainer.setAttribute("class", "inner-container");

          const upperItem = document.createElement("div");
          upperItem.setAttribute("class", "upper-item");
          
          const h3 = document.createElement("h3");
          h3.setAttribute("class", "item-heading")
          h3.textContent = item.title;

          const itemPrice = document.createElement("p");
          itemPrice.setAttribute("class", "item-price")
          itemPrice.textContent = item.price;

          const description = document.createElement("p");
          description.setAttribute("class", "item-description")
          description.textContent = item.description;

          innerContainer.appendChild(upperItem);

          upperItem.appendChild(h3);
          upperItem.appendChild(itemPrice);
          upperItem.appendChild(description);
          
          sidesSection.appendChild(innerContainer);

     });



     beverages.forEach((item) => {
          
          const innerContainer = document.createElement("div");
          innerContainer.setAttribute("class", "inner-container");

          const upperItem = document.createElement("div");
          upperItem.setAttribute("class", "upper-item");
          
          const h3 = document.createElement("h3");
          h3.setAttribute("class", "item-heading")
          h3.textContent = item.title;

          const itemPrice = document.createElement("p");
          itemPrice.setAttribute("class", "item-price")
          itemPrice.textContent = item.price;

          innerContainer.appendChild(upperItem);

          upperItem.appendChild(h3);
          upperItem.appendChild(itemPrice);
         
     
          beveragesSection.appendChild(innerContainer);

     });


     content.appendChild(mainSection);
     content.appendChild(sidesSection);
     content.appendChild(beveragesSection);




}

export { MenuPage };