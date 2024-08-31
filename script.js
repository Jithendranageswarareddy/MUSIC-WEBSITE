const musicList = document.getElementById('music-list');
const player = document.getElementById('player');

// Example function to fetch music files from GitHub
async function fetchMusic() {
    const response = await fetch('https://api.github.com/repos/yourusername/music-repo-1/contents/music');
    const files = await response.json();
    
    files.forEach(file => {
        const listItem = document.createElement('div');
        listItem.textContent = file.name;
        listItem.addEventListener('click', () => {
            player.src = file.download_url;
            player.play();
        });
        musicList.appendChild(listItem);
    });
}

fetchMusic();
