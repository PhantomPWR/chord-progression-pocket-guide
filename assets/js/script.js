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
const mobileControlBtn = document.getElementById("controlAreaBtn");
const helpBtn = document.getElementById("helpBtn");
const helpContent = document.getElementById("helpContent");
const drawer = document.getElementById("offCanvas");
const drawerCloseBtn = document.getElementById("drawerCloseBtn");
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


// Mobile phone control area button
mobileControlBtn.addEventListener("click", function() {
    helpContent.style.display = "none"
    controlArea.style.display = "flex";
    drawer.classList.add("in");
    drawerCloseBtn.after(controlArea);
    
    
    drawerCloseBtn.addEventListener("click", function() {
        drawer.classList.remove("in");
        drawerCloseBtn.after('');
    });

});

// Help button
helpBtn.addEventListener("click", function() {
    helpContent.style.display = "flex";
    drawer.classList.add("in");
    drawerCloseBtn.after(helpContent);
    
    
    drawerCloseBtn.addEventListener("click", function() {
        drawer.classList.remove("in");
        drawerCloseBtn.after('');
    });

});


