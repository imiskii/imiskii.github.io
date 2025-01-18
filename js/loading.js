

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

const LOADING_KEY = 'lastLoadingTime';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Check localStorage for the last loading timestamp
const lastLoadingTime = localStorage.getItem(LOADING_KEY);
const now = Date.now();

// Show loading screen
if (!lastLoadingTime || now - parseInt(lastLoadingTime, 10) > ONE_DAY_MS){
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

        // Save the current time in localStorage
        localStorage.setItem(LOADING_KEY, now.toString());
    }, 6000); // Matches the duration of the progress bar animation + one second
} else {
    // Skip loading screen
    loadingContainer.style.animation = 'fadeOut 0s forwards'; // Turn off animation
    loadingContainer.classList.add('loaded');
}