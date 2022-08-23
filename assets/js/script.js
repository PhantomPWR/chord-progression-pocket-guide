/*
 * Handle header display on mobile phones
 */

// Set constant variables
const mediaQueryList = [
    window.matchMedia('(max-width: 414px)'),
    window.matchMedia('(max-width: 915px)')
    ];

const mobileHeader = document.getElementById("mobileHeader");
const siteTitle = document.getElementById("siteTitle");
const mobileButtons = document.getElementById("mobileButtons");
const helpButtons = document.querySelectorAll(".help-btn");
const closeButtons = document.querySelectorAll(".close-btn");
const controlArea = document.getElementById("controls");
const mobileControlBtn = document.getElementById("controlAreaBtn");
const helpContent = document.getElementById("helpContent");
const drawer = document.getElementById("offCanvas");
const keySelect = document.getElementById("keySelect");


// Detect mobile phone & handle element display
window.addEventListener('load', function() {
    for (let mediaQuery of mediaQueryList) {
        if (mediaQuery.matches) {

            // add mobile-phone CSS body class
            document.body.classList.add('mobile-phone');

            // Move site title into mobile header, above buttons
            mobileButtons.before(siteTitle);

            // Display mobile header
            mobileHeader.style.display = 'flex';

        } else {
            keySelect.before(helpBtn);
        }
    }
});


// Button Event Listeners

// Mobile phone control area button
mobileControlBtn.addEventListener("click", function() {
    helpBtn.classList.remove("active");
    helpContent.style.display = "none";
    controlArea.style.display = "flex";
    drawer.classList.add("in");
    drawerCloseBtn.after(controlArea);

});

// Help button
helpButtons.forEach(helpBtn => {

    helpBtn.addEventListener("click", function() {
        console.log("Help button clicked");
        helpBtn.classList.add("active");
        helpContent.style.cssText = ("display: flex; z-index: 10;");
        drawer.classList.add("in");
        drawerCloseBtn.after(helpContent);
    });

});


// Drawer close button
closeButtons.forEach(closeBtn => {

    closeBtn.addEventListener("click", function() {
        console.log("Close button clicked");
        drawer.classList.remove("in");
        helpBtn.classList.remove("active");
    });

});