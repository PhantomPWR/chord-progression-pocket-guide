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
const helpButtons = document.querySelectorAll(".help-btn");
const controlArea = document.getElementById("controls");
const mobileHeaderControlsBtn = document.getElementById("mobileHeaderControlsBtn");
const helpContent = document.getElementById("helpContent");


// Detect mobile phone & handle element display
window.addEventListener('load', function() {
    for (let mediaQuery of mediaQueryList) {
        if (mediaQuery.matches) {

            let mobileButtons = document.getElementById("mobileButtons");

            // add mobile-phone CSS body class
            document.body.classList.add('mobile-phone');

            // Move site title into mobile header, above buttons
            mobileButtons.before(siteTitle);

            // Display mobile header
            mobileHeader.style.display = 'flex';

        }
    }
});


// Wait for the DOM to finish loading
// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let displaySelectedKeyValue = document.getElementById("selectedKeyDisplay");
    let displaySelectedChordProgressionValue = document.getElementById("selectedChordProgressionDisplay");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.hasAttribute("data-key-select")) {
                console.log(this.innerText);
                displaySelectedKeyValue.innerText = (this.innerText);
            } else if (this.hasAttribute("data-chord-progression-select")) {
                console.log(this.innerText);
                displaySelectedChordProgressionValue.innerText = (this.innerText);
            }
        });
    }
});


// Button Event Listeners

// Mobile phone control area button
mobileHeaderControlsBtn.addEventListener("click", function() {
    mobileHeaderHelpBtn.classList.remove("active");
    controlArea.style.display = "flex";
    controlArea.classList.add("show");

});

// Help button
// helpButtons.forEach(helpButton => {

//     helpButton.addEventListener("click", function() {
//         console.log("Help button clicked");
//         mobileHeaderHelpBtn.classList.add("active");
//         controlArea.style.display = "none";
//         helpContent.style.cssText = ("display: flex; z-index: 10;");
//         drawer.classList.add("in");
//         drawerCloseBtn.after(helpContent);
//     });

// });

// Drawer close button
// let closeButtons = document.querySelectorAll(".close-btn");
// closeButtons.forEach(closeBtn => {

//     closeBtn.addEventListener("click", function() {
//         console.log("Close button clicked");
//         drawer.classList.remove("in");
//         mobileHeaderHelpBtn.classList.remove("active");
//     });

// });

    function drawerOpenClose() {
        let drawer = document.getElementById("offCanvas");
        if (drawer.classList.contains("in")) {
            drawer.classList.remove("in");
        } else {
            drawer.classList.add("in");
        }

    }




