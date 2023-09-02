const nextButton = document.getElementById('next-butt');

function storePlaylistData() {
    const inputBar = document.getElementById('name');
    const checkBox1 = document.getElementById('check-box1');
    const checkBox2 = document.getElementById('check-box2');
    
    const playlistData = {
        name: inputBar.value.trim(),
        availableToOtherUsers: checkBox1.checked,
        notAvailableToOtherUsers: checkBox2.checked,
        created: true
    };
    
    localStorage.setItem('playlistData', JSON.stringify(playlistData));
}

nextButton.addEventListener('click', ()=> {
    console.log('ok')
    window.location.href = "secondpage.html";
    storePlaylistData();
});
