const songplaylist = document.getElementById('phonk-playlist');
const songarea = document.getElementById('phonk-area');
const storedsongs = localStorage.getItem('songs');
const audioPlay = document.getElementById('audio-bar'); // Get the audio element
const playlistname = document.getElementById('playlist-name')
const coverText = document.getElementById('cover-text')



const playlistsonk = localStorage.getItem('usersPlaylists');
if (playlistsonk) {
    usersPlaylists = JSON.parse(playlistsonk);
    console.log(usersSongs.length); // Check if the data is being loaded correctly
} else {
    console.log('no phonks available');
}
function usersPlayliststoLS() {
    localStorage.setItem('usersPlaylists', JSON.stringify(usersPlaylists))
    console.log('working')
}





const playlistsongs = localStorage.getItem('usersPlaylists');
if (playlistsongs !== null) {
    usersPlaylists = JSON.parse(playlistsongs);
    showphonks(usersPlaylists); // Call the function and pass the phonks array
    const keys = Object.keys(usersPlaylists)
    const keylen = keys.length
    console.log(keylen)
    console.log('/')
    console.log(keys[0])
} else {
    console.log('no pho\nks available');
}
const selectedPlaylistName = 'mit'; // Replace with the actual playlist name

if (usersPlaylists.hasOwnProperty(selectedPlaylistName)) {
    const playlistSongs = usersPlaylists[selectedPlaylistName]; // Access the songs array
    console.log('Songs in Playlist:', selectedPlaylistName);

    if (playlistSongs !== null) {
        playlistSongs.forEach(song => {
            console.log('Title:', song.title);
            console.log('Artist:', song.artist);
            console.log('URL:', song.url);
            console.log('Cover:', song.cover);
        });
    } else {
        console.log('songs are null');
    }

} else {
    console.log('Playlist not found');
}

function showphonks(phonks) {
    songarea.innerHTML = ''; // Clear the existing content before adding updated content
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    
    if (source !== null && source !== '') {
        playlistname.textContent = source;
        console.log(source)
    } else {
        coverText.textContent = 'Default Text'; // Set a default text if source is empty or null
    }    
    const playlisttoshow = Object.keys(phonks).filter(playlist => playlist === source); // Filter the playlist by comparing with source
    if (playlisttoshow) {
        const playlistSongs = phonks[playlisttoshow];
        playlistSongs.forEach(phonk => {
            const phonkElement = document.createElement('p');
            phonkElement.classList.add('phonk');
            phonkElement.textContent = `${phonk.title} by ${phonk.artist}`;
            phonkElement.style.backgroundImage = `url(${'demons cover.jfif'})`;
            songarea.appendChild(phonkElement);

            const deletebutton = document.createElement('button');
            deletebutton.classList.add('delete-butt');
            deletebutton.textContent = 'delete';
            phonkElement.appendChild(deletebutton);

            phonkElement.addEventListener('click', () => {
                playAudio(phonk.url); // Play the selected song
            });
        });
    } else {
        console.log('Playlist not found');
    }



    // Add delete button event listeners outside the forEach loop
    const deleteButtons = document.querySelectorAll('.delete-butt');
    deleteButtons.forEach(deletebutton => {
        deletebutton.addEventListener('click', () => {
            const phonkElement = deletebutton.closest('.phonk');
            const title = phonkElement.textContent.split(' by ')[0]; // Get the song title

            // Call a function to remove the song from the playlist and update localStorage
            removeSongFromPlaylist(title);
            location.reload()

            // Remove the song element from the display
            phonkElement.remove();
        });
    });
    let selectedValue = source;
    console.log('Selected value:', selectedValue);
    function removeSongFromPlaylist(title) {
        // Remove the song from the usersPlaylists object
        if (usersPlaylists[selectedValue]) {
            usersPlaylists[selectedValue] = usersPlaylists[selectedValue].filter(song => song.title !== title);

            // Update localStorage with the modified usersPlaylists
            localStorage.setItem('usersPlaylists', JSON.stringify(usersPlaylists));
        }
    }



    // ... Your existing code ...


    function playAudio(url) {
        audioPlay.src = url;
        audioPlay.play();
        audioPlay.classList.remove('hidden');
    }
    function deleter(title) {
        usersSongs = usersSongs.filter(song => song.title !== title);

        console.log(usersSongs.length);
        console.log('working');
        usersPlayliststoLS()
    }
}
