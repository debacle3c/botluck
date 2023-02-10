const themes = [
  "Comfort Food",
  "International Cuisine",
  "BBQ",
  "Moroccan Night",
  "Taste of Thailand",
  "Indian Spice Bazaar",
  "Peruvian Feast",
  "Japanese Sushi Party",
  "Middle Eastern Mezze",
  "Cuban Revolution",
  "Taste of the Mediterranean",
  "Mexican Fiesta",
  "Brazilian Churrasco",
  "Taste of Vietnam",
  "African Safari",
  "Taste of Ethiopia",
  "Korean BBQ",
  "Russian Winter Wonderland",
  "Taste of Greece",
  "Taste of the Caribbean",
  "Turkish Delight",
  "Taste of the Orient",
  "Australian Outback BBQ",
  "Italian Feast",
  "Iron Chef: Battle Seafood",
  "Vegetarian",
  "Finger Foods",
  "Breakfast for Dinner",
  "Mediterranean",
  "Street Foods",
  "Asian Fusion",
  "Burgers and Dogs",
  "Slider Sandwiches",
  "Southwestern",
  "Holiday Foods",
  "Hearty Stews and Casseroles",
  "American Classics",
  "Middle Eastern",
  "Ethnic Foods",
  "Famous Recipes",
  "Healthy Foods",
  "Gluten-Free",
  "Taco Bar",
  "Pizza Party",
  "Soups and Salads",
  "Meatless Meals",
  "Sandwich Bar",
  "One-Pot Wonders",
  "Rustic Breads",
  "Regional Cuisine",
  "Bring the Heat Spicy Dishes",
  "Slow Cooker",
  "Mexitalian",
  "Thai-Mexican Fusion",
  "Korean-BBQ Fusion",
  "Japanese-Mexican Fusion",
  "Indian-Mexican Fusion",
  "Chinese-Mexican Fusion",
  "Mediterrasian",
  "Afro-Caribbean Tropical Tastes",
  "Asian-Southern Fusion",
  "Middle Eastern-Mediterranean Fusion",
  "Greek-Mexican Fusion",
  "Italian-Asian Fusion",
  "Indian-Italian Fusion",
  "Chinese-Southern Fusion",
  "Mexican-Creole Fusion",
  "Thai-Southern Fusion",
  "Moroccan-Mexican Fusion",
  "Korean-Italian Fusion",
  "Japanese-Southern Fusion",
  "Vietnamese-Mexican Fusion",
  "A Middle-Earth Feast",
  "Harry Potter Wizarding Feast",
  "Star Wars  Galactic Gathering",
  "Hunger Games Capitol Cuisine",
  "Pirates of the Caribbean Swashbuckler Spread",
  "Jurassic Park Prehistoric Picnic",
  "The Matrix Futuristic Feast",
  "Big Lebowski: A Dude's Diner",
  "Pride and Prejudice English Tea Party",
  "Southern Soiree",
  "Great Gatsby Roaring Twenties Bash",
  "Beach Grillout",
  "1950s Diner Spread",
  "Soul Food Celebration",
  "Night at the Jazz Blub",
  "Country Hoedown",
  "Reggae Picnic",
  "Punk Rock Potluck",
  "Bring the Bacon",
  "Stir-Fry-a-Palooza",
  "Chili Con Carne-ival"
];

export const getThemes = () => {
  for (let i = themes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [themes[i], themes[j]] = [themes[j], themes[i]];
  }
  return themes;
}
