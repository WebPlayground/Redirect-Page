// Declare Variables
var para = document.querySelector(".p2");
var secs = 3;

// Make sure the whole page is loaded
window.addEventListener("load", function(event) {
    // Run setInterval
    var stopInt = setInterval(function() {
        // Stopping the timer
        if(secs == 0) {
            clearInterval(stopInt);
            // Redirecting the page
            window.location = document.referrer || '/index';
        // Running the timer
        } else {
            secs--;
            para.innerHTML = "You will be redirected in " + secs;
        }
    }, 1000); 
})