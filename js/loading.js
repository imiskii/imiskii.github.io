

const dotsElement = document.querySelector('.dots');
const rotatingText = document.querySelector('.rotating-text');
const loadingContainer = document.querySelector('.loading-container');

const quotes = [
    "Loading skills...",
    "Finding projects...",
    "Debugging the matrix...",
    "Retrieving coffee...",
    "Pushing to production...",
    "Connecting to the cloud...",
    "Setting breakpoints...",
    "Refactoring spaghetti code...",
    "Optimizing algorithms...",
    "Compiling hopes and dreams...",
    "Resolving merge conflicts...",
    "Building the future, one line at a time...",
    "Ping-ponging packets...",
    "Rendering infinite loops...",
    "Initializing AI takeover..."
];

// Dots animation
let dotCount = 0;
setInterval(() => {
    dotsElement.textContent = '.'.repeat(dotCount % 3 + 1);
    dotCount++;
}, 500);

// Randomly select quotes
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    rotatingText.textContent = quotes[randomIndex];
}, 1000);

// Show page content after loading
setTimeout(() => {
    loadingContainer.classList.add('loaded');
}, 6000); // Matches the duration of the progress bar animation + one second