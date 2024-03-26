import React, { useEffect, useState } from "react";

const genreToDrinkMap = {
  pop: "Pineapple Sublime",
  soul: "Moscow Fuel",
  other: "Moscow Fuel",
  "hip hop": "Golden Spritz",
  electro: "Pineapple Sublime",
  "r&b": "Golden Spritz",
  "k-pop": "Pineapple Sublime",
  indie: "Golden Spritz",
  rap: "Moscow Fuel",
  synthpop: "Pineapple Sublime",
  indietronica: "Golden Spritz",
  electropop: "Pineapple Sublime",
  pixie: "Pineapple Sublime",
  "brazilian funk": "Pineapple Sublime",
  anime: "Pineapple Sublime",
  trance: "Moscow Fuel",
  latin: "Golden Spritz",
  rock: "Golden Spritz",
  "indie pop": "Golden Spritz",
  "urban contemporary": "Moscow Fuel",
  francoton: "Moscow Fuel",
  sertanejo: "Moscow Fuel",
  "brega funk": "Pineapple Sublime",
  reggae: "Pineapple Sublime",
  "adult standards": "Golden Spritz",
  "j-idol": "Moscow Fuel",
  "indie rock": "Golden Spritz",
  reggaeton: "Pineapple Sublime",
  "indie soul": "Golden Spritz",
  pagode: "Moscow Fuel",
  "j-rock": "Golden Spritz",
  country: "Golden Spritz",
  gospel: "Golden Spritz",
  cartoon: "Pineapple Sublime",
  "j-pop": "Pineapple Sublime",
  grime: "Moscow Fuel",
  folk: "Golden Spritz",
  "j-rap": "Moscow Fuel",
  "roots rock": "Golden Spritz",
  "pop rap": "Pineapple Sublime",
  "indie jazz": "Pineapple Sublime",
  "j-dance": "Moscow Fuel",
  "j-pixie": "Moscow Fuel",
  trap: "Pineapple Sublime",
  europop: "Pineapple Sublime",
  "escape room": "Moscow Fuel",
  "pop punk": "Pineapple Sublime",
  "j-division": "Moscow Fuel",
  chanson: "Moscow Fuel",
  dance: "Pineapple Sublime",
  house: "Pineapple Sublime",
  "j-poprock": "Golden Spritz",
  afropop: "Pineapple Sublime",
  "tropical house": "Pineapple Sublime",
  "video game music": "Moscow Fuel",
  rai: "Moscow Fuel",
  "pop rock": "Golden Spritz",
  metal: "Moscow Fuel",
  children: "Moscow Fuel",
  "jazz funk": "Golden Spritz",
  "pop house": "Pineapple Sublime",
  "disco house": "Pineapple Sublime",
  "electro house": "Pineapple Sublime",
  "zouk riddim": "Moscow Fuel",
  "new wave": "Golden Spritz",
  "c-pop": "Moscow Fuel",
  "dream pop": "Pineapple Sublime",
  disco: "Moscow Fuel",
  mpb: "Moscow Fuel",
  punk: "Golden Spritz",
  indigenous: "Golden Spritz",
  "deep pop r&b": "Pineapple Sublime",
  "variete francaise": "Moscow Fuel",
  funk: "Pineapple Sublime",
  "native american": "Moscow Fuel",
  "indie pop rap": "Pineapple Sublime",
  forro: "Moscow Fuel",
  "rap rock": "Moscow Fuel",
  "k-hop": "Moscow Fuel",
  dancehall: "Moscow Fuel",
  jazz: "Moscow Fuel",
  tropical: "Pineapple Sublime",
  "folk rock": "Moscow Fuel",
  "indie r&b": "Moscow Fuel",
  cubaton: "Moscow Fuel",
  "j-metal": "Pineapple Sublime",
  "jazz rap": "Golden Spritz",
  drill: "Golden Spritz",
  "blues rock": "Moscow Fuel",
  cumbia: "Golden Spritz",
  "dance pop": "Pineapple Sublime",
  techno: "Golden Spritz",
  "j-punk": "Pineapple Sublime",
  blues: "Golden Spritz",
  tecnobrega: "Golden Spritz",
  psychedelic: "Golden Spritz",
  raggae: "Pineapple Sublime",
  "mellow gold": "Pineapple Sublime",
  karneval: "Golden Spritz",
  soca: "Golden Spritz",
  afrofuturism: "Pineapple Sublime",
  "pagode baiano": "Pineapple Sublime",
  classical: "Golden Spritz",
  industrial: "Pineapple Sublime",
  lounge: "Pineapple Sublime",
  "folk-pop": "Moscow Fuel",
  "trap pop": "Moscow Fuel",
  ninja: "Pineapple Sublime",
  "new age": "Moscow Fuel",
  "punk rock": "Golden Spritz",
  "country rap": "Moscow Fuel",
  "samba reggae": "Pineapple Sublime",
  vogue: "Moscow Fuel",
  schlager: "Moscow Fuel",
  "pop emo": "Moscow Fuel",
  emo: "Moscow Fuel",
  brega: "Pineapple Sublime",
  "county rock": "Golden Spritz",
  "classic rock": "Golden Spritz",
  dubstep: "Moscow Fuel",
  "country pop": "Pineapple Sublime",
  ska: "Moscow Fuel",
  chillwave: "Moscow Fuel",
  laiko: "Moscow Fuel",
  samba: "Moscow Fuel",
  swing: "Moscow Fuel",
  "visual kei": "Moscow Fuel",
  "psychedelic rock": "Golden Spritz",
  "easy listening": "Pineapple Sublime",
  "ryukyu ongaku": "Moscow Fuel",
  azonto: "Moscow Fuel",
  experimental: "Pineapple Sublime",
  "anti-folk": "Golden Spritz",
  "trip hop": "Pineapple Sublime",
  enka: "Golden Spritz",
  instrumental: "Moscow Fuel",
  "new rave": "Moscow Fuel",
  guaracha: "Moscow Fuel",
  americana: "Pineapple Sublime",
  axe: "Golden Spritz",
  zouglou: "Pineapple Sublime",
  "indie folk": "Moscow Fuel",
  world: "Moscow Fuel",
  "rap metal": "Moscow Fuel",
  salsa: "Pineapple Sublime",
  celtic: "Pineapple Sublime",
  bachata: "Pineapple Sublime",
  "alt-idol": "Moscow Fuel",
  rave: "Pineapple Sublime",
  rumba: "Moscow Fuel",
  grunge: "Moscow Fuel",
  "bossa nova": "Moscow Fuel",
  "hard rock": "Golden Spritz",
  afrobeat: "Pineapple Sublime",
  "country rock": "Moscow Fuel",
  breakbeat: "Moscow Fuel",
  moombahton: "Golden Spritz",
  soukous: "Golden Spritz",
  champeta: "Golden Spritz",
  dembow: "Golden Spritz",
  vallenato: "Golden Spritz",
  wassoulou: "Golden Spritz",
};

function Loading({ data, artists }) {
  const [mostFrequentGenre, setMostFrequentGenre] = useState("");
  const [genreCounts, setGenreCounts] = useState({});
  const [recommendedDrink, setRecommendedDrink] = useState("");
  const [description, setDescription] = useState({});

  useEffect(() => {
    const normalizedArtists = artists.map((artist) => artist.toLowerCase());
    const filteredData = data.filter((artist) =>
      normalizedArtists.includes(artist.name.toLowerCase())
    );
    console.log("Filtered Data:", filteredData); // Log filteredData for inspection

    // Count the occurrences of each genre
    const counts = {};
    filteredData.forEach((artist) => {
      const genresArray = JSON.parse(artist.genres.replace(/'/g, '"')); // Parse the genres string into an array
      genresArray.forEach((genre) => {
        counts[genre] = (counts[genre] || 0) + 1;
      });
    });

    // Find the most frequent genre
    let maxCount = 0;
    let frequentGenre = "";
    Object.entries(counts).forEach(([genre, count]) => {
      if (count > maxCount) {
        maxCount = count;
        frequentGenre = genre;
      }
    });

    setMostFrequentGenre(frequentGenre);
    setGenreCounts(counts);

    setRecommendedDrink(genreToDrinkMap[frequentGenre]);
    if (genreToDrinkMap[recommendedDrink] === "Moscow Fuel") {
      setDescription({
        ingredients: "Sublime Ginger Yate, Lime, Vodka",
        description:
          "Moscow Fuel is a classic cocktail featuring Sublime Ginger Yate and lime, providing a crisp and tangy base. The addition of vodka lends a smooth and mellow character to the drink, resulting in a refreshing yet sophisticated beverage.",
        persona: "Urban Explorer",
        personaDescription:
          "Moscow Fuel is for the person who appreciates the hustle and bustle of city life and enjoys exploring urban environments.",
      });
    } else if (genreToDrinkMap[recommendedDrink] === "Pineapple Sublime") {
      setDescription({
        ingredients: "Sublime Ginger Yate, Pineapple, Tequila, Splash of Lime",
        description:
          "This drink is a vibrant and refreshing blend of Sublime Ginger Yate, which offers a zesty kick, combined with the sweetness of pineapple and a splash of lime. The addition of tequila adds a spirited twist, making it perfect for those who enjoy lively and energetic flavors.",
        persona: "Summer Enthusiast",
        personaDescription:
          "This drink is perfect for someone who enjoys vibrant and energetic flavors, perhaps someone who loves spending time at the beach or poolside during hot summer days.",
      });
    } else {
      setDescription({
        ingredients:
          "Original Golden Yate, Vodka, Splash of Cranberry, Lime Juice",
        description:
          "Golden Spritz is a luxurious and flavorful cocktail featuring Original Golden Yate as its base. The addition of vodka adds depth and complexity, while the splash of cranberry and lime juice provides a burst of fruity freshness. This drink is perfect for those who enjoy a balanced combination of sweet, tart, and tangy flavors in their cocktails.",
        persona: "Sophisticated Socialite",
        personaDescription:
          "This cocktail exudes elegance and sophistication, making it ideal for someone who enjoys attending stylish social gatherings and upscale events.",
      });
    }
  }, [data, artists, recommendedDrink]);

  return (
    <div>
      <p>Recommended Genre: {mostFrequentGenre}</p>
      <p>Recommended Drink: {recommendedDrink}</p>
      <p>Description: {recommendedDrink}</p>
      <ul>
        <li>Ingredients: {description.ingredients}</li>
        <li>Description: {description.description}</li>
        <li>Persona: {description.persona}</li>
      </ul>
      <ul>
        {Object.entries(genreCounts).map(([genre, count]) => (
          <li key={genre}>
            {genre}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Loading;
