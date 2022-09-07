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

/**
 * Scale formulas in semitones (13 in total)
 * R = Root note
 * W = Whole step
 * H = Half step/Semitone
 * Major: R-W-W-H-W-W-W-H = R-2-2-1-2-2-2-1
 * Minor: R-W-H-W-W-H-W-W = R-2-1-2-2-1-2-2
 * Distance between frets = 1 semitone
 * Sharps: F♯ C♯ G♯ D♯ A♯ E♯ B♯
 * Flats:  B♭ E♭ A♭ D♭ G♭ C♭ F♭
 * 
 * Scale notes in semitones
 * 
 * semiTonesSharp = [A, A♯, B, B♯, C, C♯, D, D♯, E, E♯, F, F♯, G, G♯]
 * semiTonesFlat = [G, G♭, F, F♭, E, E♭, D, D♭, C, C♭, B, B♭, A, A♭]
 * 
 * 
 * 12 Major Keys
 * 12 Minor Keys
 * 
 * 9 Chord Progressions
 * 
 * Each key has 4 chord diagrams - according to the scale degrees of
 * the relevant chord progression
 * 
 */

// Scale for each major key in the Circle of Fifths
const majorScales = {
    cMaj: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    gMaj: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
    dMaj: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
    aMaj: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
    eMaj: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
    bMaj: ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯'],
    fSharpMaj: ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'E♯'],
    cSharpMaj: ['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B♯'],
    fMaj: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
    bFlatMaj: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
    eFlatMaj: ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
    aFlatMaj: ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
    dFlatMaj: ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
    gFlatMaj: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F']
};

// Scale for each minor key in the Circle of Fifths
const minorScales = {
    aMin: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    eMin: ['E', 'F♯', 'G', 'A', 'B', 'C', 'D'],
    bMin: ['B', 'C♯', 'D', 'E', 'F♯', 'G', 'A'],
    fSharpMin: ['F♯', 'G♯', 'A', 'B', 'C♯', 'D', 'E'],
    cSharpMin: ['C♯', 'D♯', 'E', 'F♯', 'G♯', 'A', 'B'],
    gSharpMin: ['G♯', 'A♯', 'B', 'C♯', 'D♯', 'E', 'F♯'],
    dMin: ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'],
    gMin: ['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F'],
    cMin: ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'],
    fMin: ['F', 'G', 'A♭', 'B♭', 'C', 'D♭', 'E♭'],
    bFlatMin: ['B♭', 'C', 'D♭', 'E♭', 'F', 'G♭', 'A♭'],
    eFlatMin: ['E♭', 'F', 'G♭', 'A♭', 'B♭', 'C♭', 'D♭']
};


// Scale degree labels along with corresponding indices for
// the relevant scale degrees chords are built on
const chordProgressions = {
    oneFiveFourOne: {
        degrees: ['I', 'V', 'IV', 'I'],
        chords: [0, 4, 3, 0]
    },
    
    oneFiveMinorSixFive: {
        degrees: ['I', 'V', 'vi', 'I'],
        chords: [0, 4, 5, 0]
    },

    oneMinorSixFourFive: {
        degrees: ['I', 'vi', 'IV', 'V'],
        chords: [0, 5, 3, 4]
    },

    oneMinorSixMinorTwoFive: {
        degrees: ['I', 'vi', 'ii', 'V'],
        chords: [0, 5, 1, 4]
    },

    oneMinorThreeMinorSixFive: {
        degrees: ['I', 'iii', 'vi', 'V'],
        chords: [0, 2, 5, 4]
    },

    minorSixFourOneFive: {
        degrees: ['vi', 'IV', 'I', 'V'],
        chords: [5, 3, 0, 4]
    },

    oneFlatSevenFourOne: {
        degrees: ['I', '♭VII', 'IV', 'I'],
        chords: [0, 6, 3, 0]
    },

    oneFlatSevenFlatSixFive: {
        degrees: ['I', '♭VII', '♭VI', 'V'],
        chords: [0, 6, 5, 4]
    },

    minorOneFlatSevenFlatSixFlatSeven: {
        degrees: ['i', '♭VII', '♭VI', '♭VII'],
        chords: [0, 6, 5, 6]
    },
};


// Wait for the DOM to finish loading
// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let displaySelectedKeyValue = document.getElementById("selectedKeyDisplay");

    console.log("userSelectedChordProgression BEFORE loop: " + userSelectedChordProgression);

    for (let button of buttons) {
        button.classList.remove("active");

        button.addEventListener("click", function() {

            if (this.hasAttribute("data-key-select")) {
                console.log(this.innerText);
                displaySelectedKeyValue.innerText = (this.innerText);
                displaySelectedKeyValue.classList.remove("ghosted");
                let userSelectedKey = this.getAttribute("data-key-select");
                console.log("User-selected Key: " + userSelectedKey);
                displaySelectedKeyValue.setAttribute("data-selected-key-display", userSelectedKey);

                selectedKeyTonality();

            } else if (this.hasAttribute("data-chord-progression-select")) {

                displaySelectedChordProgressionValue.classList.remove("ghosted");
                displaySelectedChordProgressionValue.innerText = (this.innerText);
                userSelectedChordProgression = this.getAttribute("data-chord-progression-select");
                displaySelectedChordProgressionValue.setAttribute("data-selected-chord-display", userSelectedChordProgression);

            }
            
            populateChordInfoLabels();

        });

    }

});


// Set global variables
// var userSelectedKey = "cMaj";
// var userSelectedChordProgression = "oneFiveFourOne";
var userSelectedKey;


// var degrees = ['I', 'V', 'IV', 'I'];



// User-selected key and chord progression
console.log("User-selected Key: " + userSelectedKey);


let scale = majorScales[userSelectedKey];
// let chords = chordProgressions[chords];
// for (let chord in chords) {
//     console.log("Chord: ");
//     console.log(chord);
// }
let displaySelectedChordProgressionValue = document.getElementById("selectedChordProgressionDisplay");
let userSelectedChordProgression = displaySelectedChordProgressionValue.getAttribute("data-selected-chord-display");

// Look up selected chord progression values
let chordProgressionLookup = chordProgressions[userSelectedChordProgression];

/**
 * Determnine selected key tonality
 */

function selectedKeyTonality() {

    let keyTonalityList = document.querySelectorAll("[data-tonality]");

    console.log("Selected key tonality:");
    console.log(keyTonalityList);

}


/**
 * Populate chord info labels
 */

function populateChordInfoLabels() {

    if (userSelectedChordProgression) {

        // Degree Labels
        let labelDegreeList = document.querySelectorAll("[data-label-degree]");
        let numberOfDegreeLabels = labelDegreeList.length;
        let chordProgressionDegrees = chordProgressions[userSelectedChordProgression].degrees;

        for (let i = 0; i < numberOfDegreeLabels; i++) {
            labelDegreeList[i].textContent = chordProgressionDegrees[i];
        }        
        
        // Chord Labels
        let labelChordList = document.querySelectorAll("[data-label-chord]");
        let numberOfChordLabels = labelChordList.length;
        let chordProgressionChordIndices = chordProgressions[userSelectedChordProgression].chords;

        for (let i = 0; i < numberOfChordLabels; i++) {
            labelChordList[i].textContent = chordProgressionChordIndices[i];
        }

    }

}


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
 * Key: E
 * Tonality: Major
 * Scale Root: E
 * Chord Progression - I V IV V
 */

// Chord Diagram 1 - 
let chordDiagram1 = {
    scaleDegree: 'I',
    chordName: 'E',
    chordTonality: 'Major',
    chordNotes: ['E', 'B', 'E', 'G♯', 'B', 'E'],
    fret1: ['', '', '', '1', '', ''],
    fret2: ['', '2', '3', '', '', ''],
    fret3: ['', '', '', '', '', ''],
    fret4: ['', '', '', '', '', '']
};

// Chord Diagram 2 - 
let chordDiagram2 = {
    scaleDegree: 'V',
    chordName: 'B',
    chordTonality: 'Major',
    chordNotes: ['x', 'B', 'F♯', 'B', 'D♯', 'F♯'],
    fret1: ['', '', '', '', '', ''],
    fret2: ['', '1', '1', '1', '1', '1'],
    fret3: ['', '', '', '', '', ''],
    fret4: ['', '', '2', '3', '4', '']
};

// Chord Diagram 3 - 
let chordDiagram3 = {
    scaleDegree: 'IV',
    chordName: 'A',
    chordTonality: 'Major',
    chordNotes: ['x', 'A', 'E', 'A', 'C♯', 'E'],
    fret1: ['', '', '', '', '', ''],
    fret2: ['', '', '1', '2', '3', ''],
    fret3: ['', '', '', '', '', ''],
    fret4: ['', '', '', '', '', '']
};

// Chord Diagram 4 - 
let chordDiagram4 = {
    scaleDegree: 'V',
    chordName: 'B',
    chordTonality: 'Major',
    chordNotes: ['x', 'B', 'F♯', 'B', 'D♯', 'F♯'],
    fret1: ['', '', '', '', '', ''],
    fret2: ['', '1', '1', '1', '1', '1'],
    fret3: ['', '', '', '', '', ''],
    fret4: ['', '', '2', '3', '4', '']
};