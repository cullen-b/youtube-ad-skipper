
function speedUpVideo(video) {
    // Check if the video element exists
    if (video) {
        // Add an event listener for the 'canplay' event
        video.addEventListener("canplay", () => {
            // Set the initial playback rate to 1
            video.playbackRate = 16;
        });
    }
}

// Function to handle keydown event
function handleKeydown(event) {
    // Check if the pressed key is the Shift key (key code 16)
    if (event.keyCode === 16) {
        // Select all video elements on the page
        const videos = document.querySelectorAll("video");

        // Toggle between fast and normal playback rates
        videos.forEach(video => {
            if (video) {
                // Toggle the playback rate between normal (1) and fast (2)
                video.playbackRate = video.playbackRate === 1 ? 16 : 1;
            }
        });
    }
}

// Select all video elements on the page
const videos = document.querySelectorAll("video");

// Add a keydown event listener to the document
document.addEventListener("keydown", handleKeydown);
