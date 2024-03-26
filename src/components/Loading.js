//Loading.js
import React from "react";

function Loading({ data, artists }) {
  console.log("Data:", data);
  console.log("Artists:", artists);

  if (!artists) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter((artist) =>
    artists.includes(artist.name)
  );
  console.log("Filtered Data:", filteredData);

  const genreCounts = {};
  filteredData.forEach((artist) => {
    artist.genres.forEach((genre) => {
      if (genreCounts[genre]) {
        genreCounts[genre]++;
      } else {
        genreCounts[genre] = 1;
      }
    });
  });
  console.log("Genre Counts:", genreCounts); 

  return (
    <div>
      <h2>Genre Counts</h2>
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
