

function moveIconRandomly(icon) {

    /* Get initial size of the section */
    const section = document.querySelector('.section');
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight

    const randomX = Math.floor(Math.random() * (sectionWidth - 60)); // Icon remains in the view
    const randomY = Math.floor(Math.random() * (sectionHeight - 60));
    
    // Apply random position and rotation
    icon.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Move again after a random interval
    const randomInterval = Math.random() * 4000 + 3000; // Random delay between 3s and 7s
    setTimeout(() => moveIconRandomly(icon), randomInterval);
}


window.onload = function() {

    /* Get initial size of the section */
    const section = document.querySelector('.section');
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight

    /* Home page icons setup and movement */
    const icons = document.querySelectorAll('.floating-icon')
    icons.forEach(icon => {
        const randomX = Math.floor(Math.random() * sectionWidth);
        const randomY = Math.floor(Math.random() * sectionHeight);
        
        icon.style.zIndex = Math.random() > 0.5 ? -1 : -3;
        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;

        const randomInterval = Math.random() * 4000 + 3000; // Random delay between 3s and 7s
        setTimeout(() => moveIconRandomly(icon), randomInterval)
    })

}