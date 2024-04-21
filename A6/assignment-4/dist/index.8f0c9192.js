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
 */ // All of our data is available on the global `window` object.
const { artists, songs } = window;
// Dynamically create artist buttons and display default artist's songs on page load
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    artists.forEach((artist)=>{
        const button1 = document.createElement("button");
        button1.textContent = artist.name;
        button1.dataset.artistImage = artist.imageUrl;
        button1.addEventListener("click", ()=>{
            displaySongsForArtist(artist.artistId);
            document.getElementById("selected-artist").textContent = `Songs by ${artist.name}`;
        });
        menu.appendChild(button1);
    });
    button.onmouseover = function() {
        this.style.backgroundImage = `url('${this.dataset.artistImage}')`;
        this.style.backgroundSize = "cover";
        this.style.backgroundPosition = "center";
        this.style.backgroundRepeat = "no-repeat";
        this.style.opacity = "0.5";
    };
    button.onmouseout = function() {
        this.style.backgroundImage = "";
        this.style.opacity = "1";
    };
    // Display the first artist's songs by default, if there are any artists
    if (artists.length > 0) displaySongsForArtist(artists[0].artistId);
});
function displaySongsForArtist(artistId) {
    const artist = artists.find((artist)=>artist.artistId === artistId);
    const filteredSongs = songs.filter((song)=>song.artistId === artistId);
    const cardContainerRef = document.getElementById("card-container");
    const selectedArtistElement = document.getElementById("selected-artist");
    // Update the selected artist's name and social media links
    selectedArtistElement.innerHTML = generateArtistHeader(artist);
    // Clear previous song cards and display new ones
    cardContainerRef.innerHTML = "";
    filteredSongs.forEach((song)=>{
        const songCard = createSongCard(song, artist);
        cardContainerRef.appendChild(songCard);
    });
}
function createSongCard(song, artist) {
    const card = document.createElement("div");
    card.className = "song-card";
    const songImage = document.createElement("img");
    songImage.className = "song-image";
    songImage.src = song.imageUrl;
    songImage.alt = `Cover image for ${song.title}`;
    songImage.style.cursor = "pointer";
    songImage.addEventListener("click", (event)=>{
        event.stopPropagation();
        window.open(song.url, "_blank");
    });
    const songTitle = document.createElement("h3");
    songTitle.textContent = song.title;
    if (song.explicit) {
        const explicitIcon = document.createElement("img");
        explicitIcon.src = "./explicit.webp";
        explicitIcon.alt = "Explicit";
        explicitIcon.style.height = "1em";
        explicitIcon.style.verticalAlign = "text-bottom";
        songTitle.appendChild(explicitIcon);
    }
    const songYear = document.createElement("p");
    songYear.textContent = `Year Released: ${song.year}`;
    const songDuration = document.createElement("p");
    songDuration.textContent = `Duration: ${formatDuration(song.duration)}`;
    // Append all the elements to the card
    card.appendChild(songImage);
    card.appendChild(songTitle);
    card.appendChild(songYear);
    card.appendChild(songDuration);
    card.addEventListener("click", ()=>{
        console.log(`You clicked on "${song.title}" by ${artist.name}`);
    });
    return card;
}
function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
function generateArtistHeader(artist) {
    let linksHTML = artist.urls.map((link)=>`<a href="${link.url}" target="_blank">${link.name}</a>`).join(", ");
    return `<strong>Songs by ${artist.name}</strong> ${linksHTML}`;
}

//# sourceMappingURL=index.8f0c9192.js.map
