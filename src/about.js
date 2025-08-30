
function AboutPage() {
  const content = document.querySelector("#content");
  const aboutContainer = document.createElement("div");
  const aboutTitle = document.createElement("h1");
  const firstPara = document.createElement("p");
  const secondPara = document.createElement("p");
  const thirdPara = document.createElement("p");
  const fourthPara = document.createElement("p");

  aboutTitle.textContent = "About Us";
  
  firstPara.textContent =  "Le Bœuf Grillé is more than just a restaurant — it is a celebration of fine taste, tradition, and the timeless art of French grilling. Nestled in the heart of the city, our establishment brings together the sophistication of Parisian cuisine and the bold, honest flavors of flame-grilled excellence.";
  secondPara.textContent =  "Inspired by the rich culinary heritage of France, we take pride in sourcing only the finest cuts of beef, prepared with passion, precision, and a deep respect for authentic techniques. Every dish we serve is a tribute to the craft of grilling — simple, yet elevated; rustic, yet refined.";
  thirdPara.textContent =  "At Le Bœuf Grillé, dining is not just a meal — it’s an experience. From the first pour of wine to the final bite of dessert, we invite you to savor the warmth of our hospitality, the elegance of our ambiance, and the unforgettable flavors that define who we are.";
  fourthPara.textContent =  "This is where fire meets finesse. This is Le Bœuf Grillé.";
  

  content.appendChild(aboutTitle);
  content.appendChild(aboutContainer);

  aboutContainer.appendChild(firstPara);
  aboutContainer.appendChild(secondPara);
  aboutContainer.appendChild(thirdPara);
  aboutContainer.appendChild(fourthPara);
  
}

export { AboutPage };
