export { renderMenuSection, menuItems };

const pageContent = document.getElementById("content");

const menuItems = [
  {
    name: "Classic Cheeseburger",
    description:
      "A timeless favorite, featuring a juicy beef patty topped with melted cheese, lettuce, tomato, onion, pickles, and our special sauce, served on a toasted sesame seed bun.",
    ingredients:
      "Beef patty, cheese, lettuce, tomato, onion, pickles, sesame seed bun, special sauce.",
    price: "€9.99",
  },
  {
    name: "Bacon BBQ Burger",
    description:
      "Indulge in smoky flavors with this burger, featuring crispy bacon strips, tangy barbecue sauce, melted cheddar cheese, lettuce, and onion rings, served on a toasted brioche bun.",
    ingredients:
      "Beef patty, bacon, barbecue sauce, cheddar cheese, lettuce, onion rings, brioche bun.",
    price: "€10.99",
  },
  {
    name: "Mushroom Swiss Burger",
    description:
      "A savory delight, featuring sautéed mushrooms, melted Swiss cheese, caramelized onions, lettuce, and our house-made aioli, served on a toasted ciabatta bun.",
    ingredients:
      "Beef patty, mushrooms, Swiss cheese, caramelized onions, lettuce, aioli, ciabatta bun.",
    price: "€10.49",
  },
  {
    name: "Veggie Burger Deluxe",
    description:
      "A hearty vegetarian option, featuring a flavorful veggie patty made from black beans, corn, and quinoa, topped with avocado, roasted red peppers, lettuce, and chipotle mayo, served on a whole wheat bun.",
    ingredients:
      "Veggie patty (black beans, corn, quinoa), avocado, roasted red peppers, lettuce, chipotle mayo, whole wheat bun.",
    price: "€8.99",
  },
  {
    name: "Spicy Jalapeño Burger",
    description:
      "Heat things up with this burger, featuring spicy jalapeño slices, pepper jack cheese, crispy onion straws, lettuce, tomato, and our fiery sriracha aioli, served on a jalapeño cheddar bun.",
    ingredients:
      "Beef patty, jalapeño slices, pepper jack cheese, onion straws, lettuce, tomato, sriracha aioli, jalapeño cheddar bun.",
    price: "€10.79",
  },
  {
    name: "Guacamole Bacon Burger",
    description:
      "A fresh twist on the classic burger, featuring creamy guacamole, crispy bacon, melted Monterey Jack cheese, lettuce, tomato, and zesty ranch dressing, served on a toasted pretzel bun.",
    ingredients:
      "Beef patty, guacamole, bacon, Monterey Jack cheese, lettuce, tomato, ranch dressing, pretzel bun.",
    price: "€11.49",
  },
  {
    name: "Teriyaki Pineapple Burger",
    description:
      "Transport your taste buds to the tropics with this burger, featuring teriyaki-glazed grilled pineapple slices, grilled chicken breast, Swiss cheese, lettuce, and teriyaki mayo, served on a Hawaiian sweet bun.",
    ingredients:
      "Grilled chicken breast, teriyaki glaze, pineapple slices, Swiss cheese, lettuce, teriyaki mayo, Hawaiian sweet bun.",
    price: "€11.99",
  },
  {
    name: "Buffalo Chicken Burger",
    description:
      "A fiery favorite, featuring a breaded chicken patty tossed in spicy buffalo sauce, topped with blue cheese crumbles, lettuce, tomato, and ranch dressing, served on a sesame seed bun.",
    ingredients:
      "Breaded chicken patty, buffalo sauce, blue cheese crumbles, lettuce, tomato, ranch dressing, sesame seed bun.",
    price: "€10.59",
  },
  {
    name: "BBQ Pulled Pork Sandwich",
    description:
      "Sink your teeth into tender pulled pork smothered in tangy barbecue sauce, topped with coleslaw, pickles, and crispy onion straws, served on a brioche bun.",
    ingredients:
      "Pulled pork, barbecue sauce, coleslaw, pickles, onion straws, brioche bun.",
    price: "€9.89",
  },
  {
    name: "Double Bacon Cheeseburger",
    description:
      "Double the indulgence with two juicy beef patties, crispy bacon strips, melted American cheese, lettuce, tomato, and our signature burger sauce, served on a toasted potato bun.",
    ingredients:
      "Beef patties, bacon, American cheese, lettuce, tomato, burger sauce, potato bun.",
    price: "€12.49",
  },
  {
    name: "Southwest Chipotle Burger",
    description:
      "A flavor explosion, featuring a spicy chipotle-seasoned beef patty, pepper jack cheese, roasted red peppers, avocado, lettuce, and chipotle mayo, served on a jalapeño cheddar bun.",
    ingredients:
      "Chipotle-seasoned beef patty, pepper jack cheese, roasted red peppers, avocado, lettuce, chipotle mayo, jalapeño cheddar bun.",
    price: "€11.79",
  },
  {
    name: "Avocado Turkey Burger",
    description:
      "A healthier option, featuring a seasoned turkey patty topped with creamy avocado slices, crisp lettuce, tomato, red onion, and our zesty garlic aioli, served on a whole wheat bun.",
    ingredients:
      "Turkey patty, avocado, lettuce, tomato, red onion, garlic aioli, whole wheat bun.",
    price: "€9.49",
  },
  {
    name: "Breakfast Burger",
    description:
      "Start your day right with this breakfast-inspired burger, featuring a beef patty, crispy bacon, a fried egg, melted cheddar cheese, hash browns, and tangy ketchup, served on a toasted English muffin.",
    ingredients:
      "Beef patty, bacon, fried egg, cheddar cheese, hash browns, ketchup, English muffin.",
    price: "€8.99",
  },
];

function renderMenuSection(arr) {
  pageContent.textContent = "";
  const menuSection = document.createElement("section");
  menuSection.classList.add("main_menu-section");
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("main_menu-wrapper");

  const menuItems = arr.map((element) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("main_menu-item");

    const burgerName = document.createElement("h2");
    burgerName.classList.add("main_menu-header");
    burgerName.textContent = element.name;
    menuItem.appendChild(burgerName);

    const burgerDescription = document.createElement("p");
    burgerDescription.classList.add("main_menu-description");
    burgerDescription.textContent = element.description;
    menuItem.appendChild(burgerDescription);

    const ingredientsHeader = document.createElement("h4");
    ingredientsHeader.classList.add("main_menu_ingredients-header");
    ingredientsHeader.textContent = "Ingredients:";
    menuItem.appendChild(ingredientsHeader);

    const ingredients = document.createElement("p");
    ingredients.classList.add("main_menu-ingredients");
    ingredients.textContent = element.ingredients;
    menuItem.appendChild(ingredients);

    const burgerPrice = document.createElement("p");
    burgerPrice.classList.add("main_menu-price");
    burgerPrice.textContent = `Price: ${element.price}`;
    menuItem.appendChild(burgerPrice);

    return menuItem;
  });

  menuItems.forEach((menuItem) => {
    menuWrapper.appendChild(menuItem);
  });

  menuSection.appendChild(menuWrapper);
  pageContent.appendChild(menuSection);
}
