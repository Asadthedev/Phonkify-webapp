const phonkplaylist = document.getElementById('phonk-playlist');
const phonkarea = document.getElementById('phonk-area');
const storedphonks = localStorage.getItem('songs');
const audioPlayer = document.getElementById('audio-bar'); // Get the audio element

if (storedphonks) {
    const phonks = JSON.parse(storedphonks);
    console.log(phonks[1].title);
    console.log('ok');
    const filteredphonks = phonks.filter(song => song.type.includes('phonk'))
    showphonks(filteredphonks); // Call the function and pass the phonks array
} else {
    console.log('no phonks available');
}

function showphonks(phonks) { // Accept the phonks array as a parameter
    phonks.forEach(phonk => { // Use phonk as the loop variable
         const phonkElement = document.createElement('p');
         phonkElement.classList.add('phonk');
         phonkElement.textContent = `${phonk.title} by ${phonk.artist}`;
         phonkElement.style.backgroundImage=`url(${phonk.cover})`;
         phonkarea.appendChild(phonkElement)
         phonkElement.addEventListener('click',()=>{
            playAudio(phonk.url)
        })
    });
}
function playAudio(url) {
    audioPlayer.src = url;
    audioPlayer.play();        
    audioPlayer.classList.remove('hidden')
}


