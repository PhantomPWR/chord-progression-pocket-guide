// Detect Mobile Phone
if ((window.matchMedia('(max-width: 414px)')) || (window.matchMedia('(max-width: 915px)')).matches) {
    console.log("Mobile Phone");
    moveSiteTitle();
} else {
    console.log("Desktop/Tablet");
}

// Move site title from control area to mobile header
function moveSiteTitle() {
    const sourceElement = document.getElementById("siteTitle");
    const targetElement = document.getElementById("mobileHeader");

    targetElement.appendChild(sourceElement);
}
