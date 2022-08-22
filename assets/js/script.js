// Set global variables
const mediaQueryList = [
    window.matchMedia('(max-width: 414px)'),
    window.matchMedia('(max-width: 915px)')
    ];
const mobileHeader = document.getElementById("mobileHeader");
const siteTitle = document.getElementById("siteTitle");
const mobileButtons = document.getElementById("mobileButtons");

// Detect mobile phone & display mobile header
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

        // Hide mobile header on desktop & tablet
        mobileHeader.style.display = 'none';
    }
}

});