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
        button.classList.remove("active");
        button.addEventListener("click", function() {
            if (this.hasAttribute("data-key-select")) {
                console.log(this.innerText);
                displaySelectedKeyValue.innerText = (this.innerText);
                displaySelectedKeyValue.classList.remove("ghosted");

            } else if (this.hasAttribute("data-chord-progression-select")) {

                console.log(this.innerText);
                displaySelectedChordProgressionValue.classList.remove("ghosted");
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



/**
 * Is the selected key Major or Minor?
 */

//  function majorMinor() {
//     if (selectedKey.attributeValue = "major") {
//         key = "major";
//     } else {
//         key = "minor";
//     }
// }

/**
 * Find the correct notes to
 * display above chord diagram
 */

// function stringNotes() {
//     if (string not in scale) {
//         note = "x";
//     } else {
//         note = scaleNote;
//     }
// }

/**
 * Scale formulas in semitones (13 in total)
 * Major: R-W-W-H-W-W-W-H = .-2-2-1-2-2-2-1
 * Minor: R-W-H-W-W-H-W-W = .-2-1-2-2-1-2-2
 * Distance between frets = 1 semitone
 * Sharps: F C G D A E B
 * Flats:  B E A D G C F
 */


// Chord Diagram
let chordDiagram = {
    scaleDegree: '1',
    chordName: 'E Major',
    chordNotes: ['E', 'B', 'E', 'G♯', 'B', 'E'],
    fret1: ['', '', '', '1', '', ''],
    fret2: ['', '2', '3', '', '', ''],
    fret3: ['', '', '', '', '', ''],
    fret4: ['', '', '', '', '', '']
};