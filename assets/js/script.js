/*
 * Handle header display on mobile phones
 */

// Set global variables
const mediaQueryList = [
    window.matchMedia('(max-width: 414px)'),
    window.matchMedia('(max-width: 915px)')
    ];
const mobileHeader = document.getElementById("mobileHeader");
const siteTitle = document.getElementById("siteTitle");
const mobileButtons = document.getElementById("mobileButtons");
const controlArea = document.getElementById("controls");
const controlDrawer = document.getElementById("controlDrawer");
const helpDrawer = document.getElementById("helpDrawer");
const drawer = document.getElementsByClassName("drawer");
const mobileControlBtn = document.getElementById("controlAreaBtn");
const closeDrawerBtns = document.getElementsByTagName("button");

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

            // Move control area into control drawer
            controlDrawer.appendChild(controlArea);

        }
    }

    });



// closeDrawerBtns.forEach(closeDrawerBtn => {

//     addEventListener("click", function handleClick(event) {
//         console.log("Close button clicked", event);
//         controlDrawer.classList.remove("in");
//     });

// });

console.log(drawer);

document.addEventListener("DOMContentLoaded", function() {

    for (let closeDrawerBtn of closeDrawerBtns) {
        closeDrawerBtn.addEventListener("click", function() {
            if (this.getAttribute("type") === "close") {
                console.log("Close button clicked");
                // drawer.classList.remove("in");
            }
        });
    }

});






// Mobile phone control area button
mobileControlBtn.addEventListener("click", function() {
    controlDrawer.classList.add("in");
});