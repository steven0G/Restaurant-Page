import "./styles/home.css";
import { MenuPage } from "./menu";


function HomePage() {
    let content = document.querySelector("#content");
    let homeSection = document.createElement("div");
    homeSection.setAttribute("class", "home-section");

    let restaurantName = document.createElement("h1");
    restaurantName.setAttribute("class", "restaurant-heading");
    let summary = document.createElement("p");
    summary.setAttribute("class", "home-summary");

    let orderButton = document.createElement("button");
    orderButton.setAttribute("class", "order-btn");

    orderButton.addEventListener("click",()=> {
      content.textContent = "";
      MenuPage();
    });
    
    restaurantName.textContent = "Welcome to Le Bœuf Grillé";
    summary.textContent = "Bold Cuts. Rich Flavor. Timeless Fire.";
    orderButton.textContent = "Order Now!";

    content.appendChild(homeSection);

    homeSection.appendChild(restaurantName);
    homeSection.appendChild(summary);
    homeSection.appendChild(orderButton);

   
}

export { HomePage };
export { MenuPage} from "./menu";