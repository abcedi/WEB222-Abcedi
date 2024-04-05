/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Abcedi Ilacas
 *      Student ID: 138180211
 *      Date:       19-03-2024
 */

// All of our data is available on the global `window` object.
const { artists, songs } = window;

// Dynamically create artist buttons and display default artist's songs on page load
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  artists.forEach((artist) => {
    const button = document.createElement("button");
    button.textContent = artist.name;
    button.addEventListener("click", () => displaySongsForArtist(artist.artistId));
    menu.appendChild(button);
  });

  // Display the first artist's songs by default, if there are any artists
  if (artists.length > 0) {
    displaySongsForArtist(artists[0].artistId);
  }
});

function displaySongsForArtist(artistId) {
  const artist = artists.find((artist) => artist.artistId === artistId);
  const filteredSongs = songs.filter((song) => song.artistId === artistId);
  const tbodyRef = document.getElementById("songs");
  const selectedArtistElement = document.getElementById("selected-artist");

  // Update the selected artist's name and social media links
  selectedArtistElement.innerHTML = generateArtistHeader(artist);

  // Clear previous songs and display new ones
  tbodyRef.innerHTML = "";
  filteredSongs.forEach((song) => tbodyRef.appendChild(createSongRow(song, artist)));
}

function createSongRow(song, artist) {
  const row = document.createElement("tr");
  const explicitIcon = song.explicit
    ? '<img src="./explicit.webp" alt="Explicit" style="height: 1em; vertical-align: text-bottom;">'
    : "";
  row.innerHTML = `
        <td>
            <a href="${song.url}" target="_blank">${song.title}</a> ${explicitIcon}
        </td>
        <td>${song.year}</td>
        <td>${formatDuration(song.duration)}</td>
    `;

  // Add a click event listener to log song details
  row.addEventListener("click", () => {
    console.log(`You clicked on "${song.title}" by ${artist.name}`);
  });

  return row;
}

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function generateArtistHeader(artist) {
  let linksHTML = artist.urls
    .map((link) => `<a href="${link.url}" target="_blank">${link.name}</a>`)
    .join(", ");
  return `<strong>Songs by ${artist.name}</strong>: ${linksHTML}`;
}
