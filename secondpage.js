const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const currentSongViewer = document.getElementById('current-song');
const songList = document.getElementById('song-list');
const audioPlayer = document.getElementById('audio-player'); // Get the audio element
const phonkplaylist = document.getElementById('phonk-playlist')
const slowedplaylist = document.getElementById('slowed')
const hardstyle = document.getElementById('hardstyle')
const playlistboxes = document.querySelectorAll('.boxes');
const playlistContainer = document.getElementById('playlist-container')
const songOptions = document.getElementById('song-options')
const playlistBoxes = document.getElementById('boxes');


let songs = [
    { title: 'Eternal', artist: 'Artist 1', url: 'rude eternal youth.mp3', type: 'phonk', cover: 'demons/ cover.jfif' },
    { title: 'Demons', artist: 'Imagin dragons', url: 'demons imagin dragon.mp3', type: 'slowed ', cover: 'demons/ cover.jfif' },
    { title: 'Metamorphosis 3', artist: 'Interworld', url: 'metamorphosis 3 inter world.mp3', type: 'phonk', cover: 'demons/ cover.jfif' },
    { title: 'Midnight city', artist: 'mk3', url: 'midnight city mk3.mp3 ', type: 'slowed', cover: 'demons/ cover.jfif' },
    { title: 'Midnight phonk', artist: 'Artist 1', url: 'Midnight phonk.mp3', type: 'audio edit', cover: 'demons/ cover.jfif' },
    { title: 'Meon blade ravens rock', artist: 'Moondeity', url: 'neon blade ravens rock version moondeity.mp3', type: 'audio edit', cover: 'demons/ cover.jfif' },
    { title: 'Poor slowed', artist: 'Artist 1', url: 'poor slowed.mp3', type: 'phonk', cover: 'demons/ cover.jfif' },
    { title: 'Rapture', artist: 'Inter world', url: 'rapture interworld slowed.mp3 ', type: 'phonk', cover: 'demons/ cover.jfif' },
    {title:'Heartbeat',artist:'Childish gambino',url:'heartbeat.mp3',type:'audio edit',cover:'demons/ cover.jfif'},
    {
        title: 'Midnight x Chase',
        artist: 'Unknown',
        url: 'midnight x chase.lnk',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Montagem Amedrontadora',
        artist: 'Unknown',
        url: 'montagem amedrontadora.mp3',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Montagem Game 196',
        artist: 'Unknown',
        url: 'montagem game 196.mp3',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Montagem Intercelestial 10',
        artist: 'Unknown',
        url: 'montagem intercelestial 10.mp3',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Montagem Orquestra Sinfonica',
        artist: 'Unknown',
        url: 'montagem orquestra sinfonica.mp3',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Murder in My Mind',
        artist: 'Unknown',
        url: 'murder in my mind.mp3',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Infinity',
        artist: 'Jaymes Young',
        url: 'infinity.mp3',
        type: 'slowed reverb',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Infinity',
        artist: 'Jaymes Young',
        url: 'infinity.mp3',
        type: 'slowed reverb',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Levitating',
        artist: 'Unknown',
        url: 'levitating.mp3',
        type: 'slowed reverb',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Beat Mágico',
        artist: 'Unknown',
        url: 'beat magico.mp3',
        type: 'phonk',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Bloody Mary Remix',
        artist: 'Lady gaga',
        url: 'bloody mary remix.mp3',
        type: 'slowed reverb',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'Death x Murdercaust',
        artist: 'Unknown',
        url: 'death x musercaust.mp3',
        type: 'audio edit',
        cover: 'demons/ cover.jfif'
    },
    {
        title: 'High x Slow Down',
        artist: 'Xenozedits',
        url: 'high x slow down.mp3',
        type: 'audio edit',
        cover: 'demons/ cover.jfif'
    }
    
    
    
    
    
    
    
    
    
    
    
    
    


];


















let selectedValue;

let usersPlaylists = {}

function clearplaylist() {
    usersPlaylists = {}
    usersPlayliststoLS()
}

const userPL = localStorage.getItem('usersPlaylists');



if (userPL !== null) { // Check for null instead of undefined
    try {
        usersPlaylists = JSON.parse(userPL);
        console.log("do");
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

if (usersPlaylists) {
    Object.keys(usersPlaylists).forEach(playlistKey => {
        console.log('doned');
        const newPlaylistBox = document.createElement('div');
        newPlaylistBox.classList.add('playlist-new'); // Apply the 'playlist-box' class to style the box
        newPlaylistBox.style.height = '100px'; // Adjust height as needed
        newPlaylistBox.style.margin = '0 5px'; // Adjust margins for spacing between boxes
        newPlaylistBox.style.zIndex = '1';
        const PLname = document.createElement("p")
        PLname.textContent = playlistKey;
        PLname.classList.add('extra-playlist-text')
        newPlaylistBox.appendChild(PLname)
        playlistBoxes.appendChild(newPlaylistBox)
        const PLdelete= document.createElement('button')
        PLdelete.classList.add('PL-delete')
        PLdelete.textContent= 'Delete'
        newPlaylistBox.appendChild(PLdelete)
        PLdelete.addEventListener('click', (event) => {
            event.stopPropagation();
            const toDeletePL = Object.keys(usersPlaylists).find(playlist => playlist === playlistKey);
        
            // Remove the playlist from your data
            delete usersPlaylists[toDeletePL];
        
            // Update the UI by removing the corresponding playlist box
            const playlistBoxToRemove = event.target.closest('.playlist-new');
            if (playlistBoxToRemove) {
                playlistBoxToRemove.remove();
            }
            
            // Update localStorage
            usersPlayliststoLS();
        });
        
        
        console.log('also done')
        newPlaylistBox.addEventListener('click', () => {
            const source = playlistKey
            window.location.href = `user newPL.html?source=${source}`;
        })
       
        // ... Do something with newPlaylistBox
    });
}





function usersPlayliststoLS() {
    localStorage.setItem('usersPlaylists', JSON.stringify(usersPlaylists))
    console.log('working')
}

const usersongs = localStorage.getItem('usersSongs')
if (usersongs) {
    usersSongs = JSON.parse(usersongs)
}



let num = 1


const newPlaylistButton = document.getElementById('more-playlist');



newPlaylistButton.addEventListener('click', () => {
    addNewPlaylistBox();
    location.reload()
});






let namer = 0;
function namertoLS() {
    localStorage.setItem('namer', JSON.stringify(namer))
}




function addNewPlaylistBox() {
    const nam = localStorage.getItem('namer');
    if (nam) {
        namer = JSON.parse(nam);
    }
    namer += 1;
    namertoLS();
    const playlistname = prompt('Enter playlist name')
    usersPlaylists[playlistname] = []
    const newPlaylistBox = document.createElement('div');
    newPlaylistBox.classList.add('playlist-new'); // Apply the 'playlist-box' class to style the box
    newPlaylistBox.style.height = '100px'; // Adjust height as needed
    newPlaylistBox.style.margin = '0 5px'; // Adjust margins for spacing between boxes
    newPlaylistBox.style.zIndex = '1';
    newPlaylistBox.addEventListener('click', () => {
        newplaylisthandle(playlistname)
    })

    // Add content and styling to the new playlist box as needed

    // Use setTimeout to animate the box's appearance after a short delay
    usersPlayliststoLS();
    setTimeout(() => {
        newPlaylistBox.style.transform = 'translateX(0)'; // Animate the box's entrance
    }, 100);


    playlistBoxes.appendChild(newPlaylistBox);
}

function newplaylisthandle(name) {
    // Handle the navigation to "user newPL.html" here
    const source = name
    window.location.href = `user newPL.html?source=${source}`;
}


// Swipe handling
let initialX;
let deltaX = 0;

document.addEventListener('touchstart', (event) => {
    initialX = event.touches[0].clientX;
});

document.addEventListener('touchmove', (event) => {
    if (initialX === undefined) return; // Use undefined instead of null

    const currentX = event.touches[0].clientX;
    deltaX = currentX - initialX;
    event.preventDefault(); // Prevent default touchmove behavior
});

document.addEventListener('touchend', () => {
    initialX = undefined; // Use undefined instead of null

    if (deltaX >= 10) {
        movePlaylistBoxes(200); // Move boxes a little to the left
    } else if (deltaX <= -10) {
        movePlaylistBoxes(-200); // Move boxes a little to the right
    }

    deltaX = 0;
});

function movePlaylistBoxes(translation) {
    playlistBoxes.childNodes.forEach(box => {
        if (box.nodeType === 1) { // Check if the child node is an element
            box.style.transition = 'transform 0.6s ease-in-out';
            box.style.transform = `translateX(${translation}px)`;
        }
    });
}
const phonkBoxes = document.querySelectorAll('.phonk-box, .slowed-reverb, .hardcore-box, .your-playlist');

// Function to hide the boxes
function hideBoxes() {
    phonkBoxes.forEach(box => {
        box.style.display = 'none';
    });
}

// Function to show the boxes
function showBoxes() {
    phonkBoxes.forEach(box => {
        box.style.display = 'block';
    });
}

// Add event listener to the search input
searchInput.addEventListener('focus', hideBoxes); // Hide boxes when input is focused
searchInput.addEventListener('blur', showBoxes);  // Show boxes when input loses focus




addusersongstoLS();
function localAdder() {
    localStorage.setItem('songs', JSON.stringify(songs));
}
localAdder()
searchButton.addEventListener('click', async () => {
    let inputvalue = searchInput.value;
    console.log(usersSongs.length)
    try {
        const storedSongs = localStorage.getItem('songs');
        if (storedSongs) {
            songs = JSON.parse(storedSongs);
            displaySongs(songs);
        } else {
            console.log('No songs found in localStorage.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
function playSong(url) {
    audioPlayer.src = url;
    audioPlayer.play();
    audioPlayer.classList.remove('hidden');
}

function displaySongs(songsToDisplay) {
    songList.innerHTML = '';

    const searchValue = searchInput.value.trim().toLowerCase();

    const filteredSongs = songsToDisplay.filter(song =>
        song.title.toLowerCase().includes(searchValue) || song.artist.toLowerCase().includes(searchValue)
    );

    if (filteredSongs.length > 0) {
        filteredSongs.forEach(filteredSong => {
            const songContainer = document.createElement('div');
            songContainer.classList.add('song-container');
            songContainer.style.backgroundImage = `url(${filteredSong.cover})`;

            const songInfo = document.createElement('p');
            songInfo.textContent = `${filteredSong.title} by ${filteredSong.artist}`;
            songContainer.appendChild(songInfo);

            // Create the three dots button
            const dotsButton = document.createElement('button');
            dotsButton.classList.add('dots-button');
            dotsButton.innerHTML = `
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            `;
            const addtoplaylist = document.createElement('button')
            addtoplaylist.textContent = 'Add to playlist'
            addtoplaylist.classList.add('playlist-add')

            addtoplaylist.addEventListener('click', () => {
                // Clear the songOptions container
                songOptions.innerHTML = '';

                // Create the dropdown element
                const dropdown = document.createElement('select');
                dropdown.classList.add('dropdown');

                // Loop through each playlist name in Object.keys(usersPlaylists) and add an option for each
                const songer = localStorage.getItem('usersPlaylists')
                if (songer) {
                    usersPlaylists = JSON.parse(songer)
                }
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Playlist';
                defaultOption.disabled = true; // Make it unselectable
                defaultOption.selected = true; // Set it as the default selected option
                dropdown.appendChild(defaultOption);
                
                // Iterate through the playlist names and create <option> elements
                Object.keys(usersPlaylists).forEach(playlistName => {
                    const option = document.createElement('option');
                    option.value = playlistName;
                    option.textContent = playlistName;
                
                    dropdown.appendChild(option);
                });

                dropdown.addEventListener('change', () => {
                    const selectedIndex = dropdown.selectedIndex;
                    const selectedOption = dropdown.options[selectedIndex];

                    selectedValue = selectedOption.value;
                    console.log('Selected value:', selectedValue);
                    songOptions.classList.remove('additional-options')
                    songOptions.removeChild(dropdown)

                    handleplaylistadder(filteredSong.title, filteredSong.artist, filteredSong.url, filteredSong.cover)
                });
                // Append the dropdown to songOptions
                songOptions.appendChild(dropdown);
            });

            songContainer.appendChild(dotsButton);

            songList.appendChild(songContainer);

            // Add event listener for clicking the dots button
            dotsButton.addEventListener('click', (event) => {
                event.stopPropagation()
                songOptions.classList.add('additional-options')
                songOptions.appendChild(addtoplaylist)

                // Show the song options menu or container here
                // You can use event.currentTarget to access the clicked button's container
                // and display the menu/container accordingly.
            });

            songContainer.addEventListener('click', () => {
                playSong(filteredSong.url);
            });
        });
    }
}




phonkplaylist.addEventListener('click', async () => {
    window.location.href = 'phonks.html';
});
slowedplaylist.addEventListener('click', async () => {
    window.location.href = 'slowed.html';
});
hardstyle.addEventListener('click', async () => {
    window.location.href = 'hard style.html';
});



const creatdata = localStorage.getItem('playlistData')
if (creatdata) {
    playlistData = JSON.parse(creatdata)
}


if (playlistData.created === false) {
    axtraPlaylist.classList.remove('more-playlist')
    axtraPlaylist.classList.add('more-hider')

} else {
    console.log(playlistData.created)

}

function handleplaylistadder(title, artist, url, cover) {
    const songToSend = { title: title, artist: artist, cover: cover, url: url };
    if (selectedValue) {
        const songtoaddPL = Object.keys(usersPlaylists).find(playlistName => playlistName === selectedValue);
        if (songtoaddPL) {
            usersPlaylists[songtoaddPL].push(songToSend);
            console.log('addeddd')
        } else {
            console.log('Playlist not found');
        }

    }

    const songsget = localStorage.getItem('usersSongs');
    if (songsget) {
        usersSongs = JSON.parse(songsget);
        usersSongs.push(songToSend);
    } else {
        console.log('array empty');
    }

    addusersongstoLS();
    usersPlayliststoLS()
    console.log(80); // Log the artist of the last added song
    console.log(selectedValue)
}

console.log(usersSongs.length)