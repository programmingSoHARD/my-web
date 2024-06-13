const video = document.getElementById('video');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const addButton = document.getElementById('add-video');
const newVideoUrlInput = document.getElementById('new-video-url');

const videos = [
    'https://www.youtube.com/embed/gQ0-ip-B36A',
    'https://www.youtube.com/embed/g1YpYgH_xDA',
    
];

let currentVideoIndex = 0;

function loadVideo(index) {
    video.src = videos[index];
}

prevButton.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        loadVideo(currentVideoIndex);
    } else {
        alert("This is the first video.");
    }
});

nextButton.addEventListener('click', () => {
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        loadVideo(currentVideoIndex);
    } else {
        alert("This is the last video.");
    }
});

addButton.addEventListener('click', () => {
    const newVideoUrl = newVideoUrlInput.value.trim();
    if (newVideoUrl) {
        const videoId = extractYouTubeVideoId(newVideoUrl);
        if (videoId) {
            videos.push(`https://www.youtube.com/embed/g1YpYgH_xDA`);
            newVideoUrlInput.value = '';
            alert('Video added successfully!');
        } else {
            alert('Invalid YouTube URL.');
        }
    }
});

function extractYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&=\n%\?]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&=\n%\?]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] || matches[2] : null;
}

loadVideo(currentVideoIndex);
