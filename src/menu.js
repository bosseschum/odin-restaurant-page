function createMenu() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.id = "menu";
  content.appendChild(menu);

  const title = document.createElement("h2");
  title.textContent = "Our Summer Menu";
  menu.appendChild(title);

  // Starters
  const starters = document.createElement("div");
  starters.id = "starters";
  menu.appendChild(starters);

  const titleStarters = document.createElement("h3");
  titleStarters.textContent = "Starters";
  starters.appendChild(titleStarters);

  const starter1 = document.createElement("div");
  starter1.className = "entry";
  starters.appendChild(starter1);

  const titleStarter1 = document.createElement("h4");
  titleStarter1.textContent = "Insalata Caprese";
  starter1.appendChild(titleStarter1);

  const descriptionStarter1 = document.createElement("p");
  descriptionStarter1.textContent =
    "Fresh tomatoes, homemade mozzarella, and basil drizzled with balsamic glaze, served with a slice of fresh ciabatta";
  starter1.appendChild(descriptionStarter1);

  const priceStarter1 = document.createElement("p");
  priceStarter1.textContent = "$ 6.50";
  starter1.appendChild(priceStarter1);

  const starter2 = document.createElement("div");
  starter2.className = "entry";
  starters.appendChild(starter2);

  const titleStarter2 = document.createElement("h4");
  titleStarter2.textContent = "Minestrone";
  starter2.appendChild(titleStarter2);

  const descriptionStarter2 = document.createElement("p");
  descriptionStarter2.textContent =
    "Bright summer soup with a selection of vegetables, herbs and citrus flavours in a bright tomato broth, served with a slice of fresh ciabatta";
  starter2.appendChild(descriptionStarter2);

  const priceStarter2 = document.createElement("p");
  priceStarter2.textContent = "$ 8";
  starter2.appendChild(priceStarter2);

  const starter3 = document.createElement("div");
  starter3.className = "entry";
  starters.appendChild(starter3);

  const titleStarter3 = document.createElement("h4");
  titleStarter3.textContent = "Antipasti";
  starter3.appendChild(titleStarter3);

  const descriptionStarter3 = document.createElement("p");
  descriptionStarter3.textContent =
    "Sun-dried tomatoes, Aubergine, Olives, a selection of cheeses, cured meats and sausages, served with herby focaccia and olive oil";
  starter3.appendChild(descriptionStarter3);

  const priceStarter3 = document.createElement("p");
  priceStarter3.textContent = "$ 10";
  starter3.appendChild(priceStarter3);

  // Main Courses
  const mainCourses = document.createElement("div");
  mainCourses.id = "main-courses";
  menu.appendChild(mainCourses);

  const titleMainCourses = document.createElement("h3");
  titleMainCourses.textContent = "Main Courses";
  mainCourses.appendChild(titleMainCourses);

  const main1 = document.createElement("div");
  main1.className = "entry";
  mainCourses.appendChild(main1);

  const titleMain1 = document.createElement("h4");
  titleMain1.textContent = "Tagliolini Cacio e Pepe";
  main1.appendChild(titleMain1);

  const descriptionMain1 = document.createElement("p");
  descriptionMain1.textContent =
    "Tagliolini Cacio e Pepe is a classic Italian dish made with tagliolini pasta, cacio e pepe sauce, and a sprinkle of Parmesan cheese.";
  main1.appendChild(descriptionMain1);

  const priceMain1 = document.createElement("p");
  priceMain1.textContent = "$ 15";
  main1.appendChild(priceMain1);

  const main2 = document.createElement("div");
  main2.className = "entry";
  mainCourses.appendChild(main2);

  const titleMain2 = document.createElement("h4");
  titleMain2.textContent = "Guancea di Manzo";
  main2.appendChild(titleMain2);

  const descriptionMain2 = document.createElement("p");
  descriptionMain2.textContent =
    "Calfs cheek, braised in a rich red wine sauce with potato puree, roasted vegetables and a slice of fresh ciabatta";
  main2.appendChild(descriptionMain2);

  const priceMain2 = document.createElement("p");
  priceMain2.textContent = "$ 18.50";
  main2.appendChild(priceMain2);

  const main3 = document.createElement("div");
  main3.className = "entry";
  mainCourses.appendChild(main3);

  const titleMain3 = document.createElement("h4");
  titleMain3.textContent = "Duetto alla griglia";
  main3.appendChild(titleMain3);

  const descriptionMain3 = document.createElement("p");
  descriptionMain3.textContent =
    "Sea bream and sea bass filets, grilled to perfection and served with a side of herby focaccia and a fennel salad";
  main3.appendChild(descriptionMain3);

  const priceMain3 = document.createElement("p");
  priceMain3.textContent = "$ 22.50";
  main3.appendChild(priceMain3);

  // pizza
  const pizza = document.createElement("div");
  pizza.id = "pizza";
  menu.appendChild(pizza);

  const titlePizza = document.createElement("h3");
  titlePizza.textContent = "Pizze";
  pizza.appendChild(titlePizza);

  const pizza1 = document.createElement("div");
  pizza1.className = "entry";
  pizza.appendChild(pizza1);

  const titlePizza1 = document.createElement("h4");
  titlePizza1.textContent = "Margherita";
  pizza1.appendChild(titlePizza1);

  const descriptionPizza1 = document.createElement("p");
  descriptionPizza1.textContent =
    "Classic Margherita pizza with fresh tomatos, homemade mozzarella, basil and parmegiano";
  pizza1.appendChild(descriptionPizza1);

  const pricePizza1 = document.createElement("p");
  pricePizza1.textContent = "$ 14";
  pizza1.appendChild(pricePizza1);

  const pizza2 = document.createElement("div");
  pizza2.className = "entry";
  pizza.appendChild(pizza2);

  const titlePizza2 = document.createElement("h4");
  titlePizza2.textContent = "Diavola";
  pizza2.appendChild(titlePizza2);

  const descriptionPizza2 = document.createElement("p");
  descriptionPizza2.textContent =
    "Classic Diavola pizza with tomato, mozzarella, pepperoncini and salsiccia piccante";
  pizza2.appendChild(descriptionPizza2);

  const pricePizza2 = document.createElement("p");
  pricePizza2.textContent = "$ 16";
  pizza2.appendChild(pricePizza2);

  const pizza3 = document.createElement("div");
  pizza3.className = "entry";
  pizza.appendChild(pizza3);

  const titlePizza3 = document.createElement("h4");
  titlePizza3.textContent = "Sardegna";
  pizza3.appendChild(titlePizza3);

  const descriptionPizza3 = document.createElement("p");
  descriptionPizza3.textContent =
    "Classic Sardegna pizza with tomato, mozzarella,olives, capers and sardines";
  pizza3.appendChild(descriptionPizza3);

  const pricePizza3 = document.createElement("p");
  pricePizza3.textContent = "$ 17.50";
  pizza3.appendChild(pricePizza3);

  // Dessert
  const dessert = document.createElement("div");
  dessert.id = "dessert";
  menu.appendChild(dessert);

  const titleDessert = document.createElement("h4");
  titleDessert.textContent = "Dessert";
  dessert.appendChild(titleDessert);

  const dessert1 = document.createElement("div");
  dessert1.className = "entry";
  dessert.appendChild(dessert1);

  const titleDessert1 = document.createElement("h4");
  titleDessert1.textContent = "Panna Cotta";
  dessert1.appendChild(titleDessert1);

  const descriptionDessert1 = document.createElement("p");
  descriptionDessert1.textContent =
    "Classic Panna Cotta with fresh cream, vanilla and a hint of lemon";
  dessert1.appendChild(descriptionDessert1);

  const priceDessert1 = document.createElement("p");
  priceDessert1.textContent = "$ 4.50";
  dessert1.appendChild(priceDessert1);

  const dessert2 = document.createElement("div");
  dessert2.className = "entry";
  dessert.appendChild(dessert2);

  const titleDessert2 = document.createElement("h4");
  titleDessert2.textContent = "Gelato";
  dessert2.appendChild(titleDessert2);

  const descriptionDessert2 = document.createElement("p");
  descriptionDessert2.textContent =
    "Three scoops of our classic Gelato with fresh cream, vanilla, cioccolato and pistachio";
  dessert2.appendChild(descriptionDessert2);

  const priceDessert2 = document.createElement("p");
  priceDessert2.textContent = "$ 6";
  dessert2.appendChild(priceDessert2);

  const dessert3 = document.createElement("div");
  dessert3.className = "entry";
  dessert.appendChild(dessert3);

  const titleDessert3 = document.createElement("h4");
  titleDessert3.textContent = "Tiramisu";
  dessert3.appendChild(titleDessert3);

  const descriptionDessert3 = document.createElement("p");
  descriptionDessert3.textContent =
    "Classic Tiramisu with layers of sponge cake drenched in amaretto and coffee, mascarpone cheese and a cacao and pistachio dusting";
  dessert3.appendChild(descriptionDessert3);

  const priceDessert3 = document.createElement("p");
  priceDessert3.textContent = "$ 10";
  dessert3.appendChild(priceDessert3);

  // Drinks
  const drinks = document.createElement("div");
  drinks.id = "drinks";
  menu.appendChild(drinks);

  const titleDrinks = document.createElement("h3");
  titleDrinks.textContent = "Drinks";
  drinks.appendChild(titleDrinks);

  const descriptionDrinks = document.createElement("p");
  descriptionDrinks.textContent = "The Lago offers free water with every meal";
  drinks.appendChild(descriptionDrinks);

  const drink1 = document.createElement("div");
  drink1.className = "entry";
  drinks.appendChild(drink1);

  const titleDrink1 = document.createElement("h4");
  titleDrink1.textContent = "Birra";
  drink1.appendChild(titleDrink1);

  const descriptionDrink1 = document.createElement("p");
  descriptionDrink1.textContent =
    "Our signature beer, made with the finest ingredients";
  drink1.appendChild(descriptionDrink1);

  const priceDrink1 = document.createElement("p");
  priceDrink1.textContent = "$ 4.50";
  drink1.appendChild(priceDrink1);

  const drink2 = document.createElement("div");
  drink2.className = "entry";
  drinks.appendChild(drink2);

  const titleDrink2 = document.createElement("h4");
  titleDrink2.textContent = "Sprizz";
  drink2.appendChild(titleDrink2);

  const descriptionDrink2 = document.createElement("p");
  descriptionDrink2.textContent =
    " A fresh spritz to your liking - Bitter or Limoncello";
  drink2.appendChild(descriptionDrink2);

  const priceDrink2 = document.createElement("p");
  priceDrink2.textContent = "$ 8.50";
  drink2.appendChild(priceDrink2);

  const drink3 = document.createElement("div");
  drink3.className = "entry";
  drinks.appendChild(drink3);

  const titleDrink3 = document.createElement("h4");
  titleDrink3.textContent = "Vino";
  drink3.appendChild(titleDrink3);

  const descriptionDrink3 = document.createElement("p");
  descriptionDrink3.textContent =
    "We have a fine selection of red and white wines from the vineyards of the region. Feel free to ask about our special offers. Served with a bottle of water.";
  drink3.appendChild(descriptionDrink3);

  const priceDrink3 = document.createElement("p");
  priceDrink3.textContent = "$ 4 (feel free to ask for the bottle)";
  drink3.appendChild(priceDrink3);

  const allergies = document.createElement("p");
  allergies.textContent =
    " Please inform us on any allergies or dietary restrictionsyou may have. We are happy to accommodate your needs.";
  menu.appendChild(allergies);
}

export default createMenu;
