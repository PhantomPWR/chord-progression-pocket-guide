// Detect Mobile Phone
const mediaQueryList = [
    window.matchMedia('(max-width: 414px)'),
    window.matchMedia('(max-width: 915px)')
];

for (let mediaQuery of mediaQueryList) {

    if (mediaQuery.matches) {
        console.log("Mobile Phone");
        document.body.classList.add('mobile-phone');
        document.getElementById("mobileHeader").style.display = 'flex';
        moveSiteTitle();
    } else {
        console.log("Desktop/Tablet");
        document.getElementById("mobileHeader").style.display = 'none';
    }
}

// Move site title from control area to mobile header
function moveSiteTitle() {
    const sourceElement = document.getElementById("siteTitle");
    const targetElement = document.getElementById("mobileButtons");

    targetElement.before(sourceElement);
}