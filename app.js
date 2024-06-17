// JavaScript for auto-typing effect

function typeText(element, text, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 60); // Adjust typing speed here (in milliseconds)
        } else if (callback) {
            callback();
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const additionalTextElement = document.getElementById('additional-text');
    const additionalText = `after 2122...
        the world was advancing at a pace never seen before. 
        Soon..the world became polluted, one by one getting corrupted. 
        Spirits that was once so trusted turned against their owners. 
        Humanity was almost hopeless.."rainsha" fought with endless abyss until..
        a mysterious warrior came across a spirit trying to survive the abyss.
        Will they succeed?`;

    // Initiate the typing effect
    typeText(additionalTextElement, additionalText);

    const video = document.getElementById('video');
            const prevButton = document.getElementById('prev');
            const nextButton = document.getElementById('next');

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
                    currentVideoIndex--;
                    loadVideo(currentVideoIndex);
                } else {
                    alert("This is the first video.");
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentVideoIndex < videos.length - 1) {
                    currentVideoIndex++;
                    loadVideo(currentVideoIndex);
                } else {
                    alert("This is the last video.");
                }
            });

            loadVideo(currentVideoIndex);
        });
        document.getElementById('websiteUrl').textContent = window.location.href;