const songplaylist = document.getElementById('phonk-playlist');
const songarea = document.getElementById('phonk-area');
const storedsongs = localStorage.getItem('songs');
const audioPlay = document.getElementById('audio-bar'); // Get the audio element
const playlistname = document.getElementById('playlist-name')



const playlistsonk= localStorage.getItem('usersSongs');
if (playlistsonk) {
    usersSongs = JSON.parse(playlistsonk);
    console.log(usersSongs.length); // Check if the data is being loaded correctly
} else {
    console.log('no phonks available');
}






const playlistsongs = localStorage.getItem('usersSongs')
if (playlistsongs) {
    const songsinplaylist= JSON.parse(playlistsongs)
    showphonks(songsinplaylist); // Call the function and pass the phonks array
    console.log(songsinplaylist.length)
} else {
    console.log('no phonks available');
}
function showphonks(phonks) {
    songarea.innerHTML = ''; // Clear the existing content before adding updated content

    phonks.forEach(phonk => {
        const phonkElement = document.createElement('p');
        phonkElement.classList.add('phonk');
        phonkElement.textContent = `${phonk.title} by ${phonk.artist}`;
        phonkElement.style.backgroundImage = `url(${phonk.cover})`;
        songarea.appendChild(phonkElement);

        const deletebutton = document.createElement('button');
        deletebutton.classList.add('delete-butt');
        deletebutton.textContent = 'delete';
        phonkElement.appendChild(deletebutton);

        phonkElement.addEventListener('click', () => {
            playAudio(phonk.url); // Play the selected song
        });
    });

    // Add delete button event listeners outside the forEach loop
    const deleteButtons = document.querySelectorAll('.delete-butt');
    deleteButtons.forEach(deletebutton => {
        deletebutton.addEventListener('click', () => {
            const phonkElement = deletebutton.closest('.phonk');
            const title = phonkElement.textContent.split(' by ')[0]; // Get the song title
            deleter(title);
            phonkElement.remove(); // Remove the element from the display
        });
    });
}


// ... Your existing code ...


function playAudio(url) {
    audioPlay.src = url;
    audioPlay.play();
    audioPlay.classList.remove('hidden');
}
function deleter(title) {
    usersSongs = usersSongs.filter(song => song.title !== title);

    addusersongstoLS(); // Update localStorage
    console.log(usersSongs.length);
    console.log('working');
}
