import { MenuPage } from "./menu";


function HomePage() {
    let content = document.querySelector("#content");
    let restaurantName = document.createElement("h1");
    let summary = document.createElement("p");
    let orderButton = document.createElement("button");

    orderButton.addEventListener("click",()=> {
      MenuPage();
    });
    
    restaurantName.textContent = "Welcome to Le Bœuf Grillé";
    summary.textContent = "Bold Cuts. Rich Flavor. Timeless Fire.";
    orderButton.textContent = "Order Now!";

    content.appendChild(restaurantName);
    content.appendChild(summary);
    content.appendChild(orderButton);


}

export { HomePage };
export { MenuPage} from "./menu";