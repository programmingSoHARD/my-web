// JavaScript for auto-typing effect

// Auto typing effect function
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
    const additionalText = `after 2122..the world was advancing at a pace never seen before. 
        Soon..the world became polluted, one by one getting corrupted. 
        Spirits that was once so trusted turned against their owners. 
        Humanity was almost hopeless.."rainsha" fought with endless abyss until.. a mysterious warrior came across a spirit trying to survive the abyss.
        Will they succeed?`;

    // Initiate the typing effect
    typeText(additionalTextElement, additionalText);
});
 