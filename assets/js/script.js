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


const keySelectButtons = document.querySelectorAll("[data-key-select]");
const chordProgressionSelectButtons = document.querySelectorAll("[data-chord-progression-select]");
const displaySelectedKeyValue = document.getElementById("selectedKeyDisplay");
const displayArea = document.getElementById("chordBoxContainer");
const displayAreaDefault = displayArea.innerHTML;

// Wait for the DOM to finish loading
// Get button elements and add event listeners

function handleKeySelection() {
 
    console.log(keySelectButtons);
    for (let keySelectButton of keySelectButtons) {
        keySelectButton.addEventListener("click", function() {

            let activeKeys = document.getElementsByClassName("key-select active");
            Array.from(activeKeys).forEach(activeKey => {
                activeKey.classList.remove("active");
            });

            displaySelectedKeyValue.innerText = (this.innerText);
            displaySelectedKeyValue.classList.remove("ghosted");
            userSelectedKey = this.getAttribute("data-key-select");
            displaySelectedKeyValue.setAttribute("data-selected-key-display", userSelectedKey);
            keyTonality = this.getAttribute("data-key-tonality");
            this.classList.add("active");

            // Enable chord progression buttons
            disableChordProgressionButtons(false);

            if (displaySelectedChordProgressionValue !== "") {
                populateChords();
            }

            // console checks
            console.log("User-selected Key: " + userSelectedKey);
            console.log(this.innerText);

            console.log("keySelectButton: " + this.getAttribute("data-key-select"));
            console.log("userSelectedKey: " + userSelectedKey);

        });
    }

}

function handleChordProgressionSelection() {

    for (let chordProgressionSelectButton of chordProgressionSelectButtons) {
        chordProgressionSelectButton.addEventListener("click", function() {

            let activeChordProgressions = document.getElementsByClassName("chord-progression active");
            Array.from(activeChordProgressions).forEach(activeChordProgression => {
                activeChordProgression.classList.remove("active");
            });

            displaySelectedChordProgressionValue.classList.remove("ghosted");
            displaySelectedChordProgressionValue.innerText = (this.innerText);
            userSelectedChordProgression = this.getAttribute("data-chord-progression-select");
            displaySelectedChordProgressionValue.setAttribute("data-selected-chord-display", userSelectedChordProgression);
            this.classList.add("active");

            displayArea.innerHTML=(displayAreaDefault);
            populateChords();

        });
    }

}


/**
 * Disable/enable chord progression selection buttons, using the status parameter
 * 
 * true == disabled
 * false == enabled
 * 
 * @param {*} status 
 */

function disableChordProgressionButtons(status) {

    chordProgressionSelectButtons.forEach((chordProgressionSelectButton, i) => {
        chordProgressionSelectButton.disabled = status;

        // console check
        console.log("status: " + status);
        return status;
    });
    
}

document.addEventListener("DOMContentLoaded", function() {

    displayArea.innerHTML = helpContent.innerHTML;

    // console check
    console.log("displaySelectedKeyValue: ");
    console.log(displaySelectedKeyValue.innerHTML);
    
    // Disable chord progression buttons
    disableChordProgressionButtons(true);

    handleKeySelection();
    handleChordProgressionSelection();

});

let userSelectedKey;
let displaySelectedChordProgressionValue = document.getElementById("selectedChordProgressionDisplay");
let userSelectedChordProgression = displaySelectedChordProgressionValue.getAttribute("data-selected-chord-display");

/**
 * Populate chord info labels
 */

function populateChords() {

    console.log("User-selected Key: " + userSelectedKey);

    if (userSelectedChordProgression) {

        let chordProgressionDegrees;
        let chordProgressionChordIndices;
        let scale;
        let chordTonalitiesLookup;
        let chordTonalityIndex;
        let chordTonality;

        let chordProgressionLookup = chordProgressions [userSelectedChordProgression];
        console.log(chordProgressionLookup);

        // Degree Labels
        let labelDegreeList = document.querySelectorAll("[data-label-degree]");
        let numberOfDegreeLabels = labelDegreeList.length;
        chordProgressionDegrees = chordProgressionLookup.degrees;

        for (let i = 0; i < numberOfDegreeLabels; i++) {
            labelDegreeList[i].textContent = chordProgressionDegrees[i];
        } 
        
        // Chord Labels
        let labelChordList = document.querySelectorAll("[data-label-chord]");
        let numberOfChordLabels = labelChordList.length;
        chordProgressionChordIndices = chordProgressionLookup.chords;


        for (let i = 0; i < numberOfChordLabels; i++) {

            // Is chord progression degree minor in a major key?
            if (keyTonality == "maj") {

                // Get relevant scale
                scale = majorScales[userSelectedKey];
                console.log("Scale: ");
                console.log(scale);

                // Get relevant chord tonalities
                chordTonalitiesLookup = chordTonalities.majorTonalities;
                chordTonalityIndex = chordProgressionChordIndices[i];
                chordTonality = chordTonalitiesLookup[chordTonalityIndex];
                console.log("Chord progression degree is " + chordProgressionDegrees[i]);
                console.log("Key tonality is " + keyTonality);
                console.log("Chord tonality is " + chordTonality);

              // Is chord progression degree minor in a minor key?
            } else if (keyTonality == "min") {

                // Get relevant scale
                scale = minorScales[userSelectedKey];

                // Get relevant chord tonalities (major or minor)
                chordTonalitiesLookup = chordTonalities.minorTonalities;
                chordTonalityIndex = chordProgressionChordIndices[i];
                chordTonality = chordTonalitiesLookup[chordTonalityIndex];
                console.log("Chord progression degree is " + chordProgressionDegrees[i]);
                console.log("Key tonality is " + keyTonality);
                console.log("Chord tonality is " + chordTonality);
            }

            console.log("Chord tonalities: ");
            console.log(chordTonalitiesLookup);

            console.log("Key Tonality: ");
            console.log(keyTonality);
            console.log("Scale: ");
            console.log(scale);            

            labelChordList[i].textContent = scale[chordProgressionChordIndices[i]].replace("/", "\/") + " " + chordTonality;
            console.log("Chord root: " + scale[chordProgressionChordIndices[i]]);

        }

        // Chord Diagrams
        const chordDiagramList = document.querySelectorAll("[data-chord-diagram]");
        let urlBase = "./assets/images/chord-diagrams/";
        let chordDiagramUrl;

        console.log("chordDiagramList: ");
        console.log(chordDiagramList);

        chordDiagramList.forEach((chordDiagram, i) => {

            let chordLabel = labelChordList[i].textContent.toLowerCase().replace(" ", "").replace("♯", "sharp").replace("♭", "flat").replace("/", "");
            let chordDiagramFileName = chordLabel + ".png";
            chordDiagramUrl = urlBase + chordDiagramFileName;

            // console checks
            console.log("chordDiagramFileName: " + chordDiagramFileName);
            console.log("Chord diagram URL is " + chordDiagramUrl);
            console.log("Chord tonality is " + chordTonality);

            chordDiagram.setAttribute("src", chordDiagramUrl);
            chordDiagram.setAttribute("alt", labelChordList[i].textContent.replace(" ", "") + " Guitar Chord Diagram");
        });

    }

}


// Button Event Listeners

// Modal buttons
const startButton = document.getElementById("startButton");
const startContent = document.getElementById("startContent");
const modal = document.querySelectorAll(".modal-container");
const modalButtons = document.querySelectorAll(".modal-button");

modalButtons.forEach(modalButton => {
    modalButton.addEventListener("click", function() {
        startContent.classList.add("modal-show");
     });
});


 // Modal close buttons
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach(closeBtn => {

    closeBtn.addEventListener("click", function() {
        console.log("Close button clicked");
        console.log(modal);
        modal.classList.remove("modal-show");
        mobileHeaderHelpBtn.classList.remove("active");
    });

});

// Mobile phone control area button
mobileHeaderControlsBtn.addEventListener("click", function() {
    mobileHeaderHelpBtn.classList.remove("active");
    controlArea.style.display = "flex";
    controlArea.classList.add("show");

});

// Help button
helpButtons.forEach(helpButton => {

    helpButton.addEventListener("click", function() {

        // displayArea.innerHTML = helpContent.innerHTML;
        // console check
        console.log("Help button clicked");
        mobileHeaderHelpBtn.classList.add("active");
        // controlArea.style.display = "none";
        helpContent.style.cssText = ("display: flex; z-index: 10;");
        // drawer.classList.add("in");
        // drawerCloseBtn.after(helpContent);
    });

});



// ============= CHORD & SCALE NOTES ===============
// 
// ============= SCALES
// Scale formulas in semitones (13 in total)
// R = Root note
// W = Whole step
// H = Half step/Semitone
// Major: R-W-W-H-W-W-W-H = R-2-2-1-2-2-2-1
// Minor: R-W-H-W-W-H-W-W = R-2-1-2-2-1-2-2
// Distance between frets = 1 semitone
// Sharps: F♯ C♯ G♯ D♯ A♯ E♯ B♯
// Flats:  B♭ E♭ A♭ D♭ G♭ C♭ F♭

// Scale notes in semitones

// semiTonesSharp = [A, A♯, B, B♯, C, C♯, D, D♯, E, E♯, F, F♯, G, G♯]
// semiTonesFlat = [G, G♭, F, F♭, E, E♭, D, D♭, C, C♭, B, B♭, A, A♭]


// 12 Major Keys
// 12 Minor Keys

// 9 Chord Progressions

// Each key has 4 chord diagrams - according to the scale degrees of
// the relevant chord progression
// 
// ============= CHORD DIAGRAMS
// Chord shapes:
// Basic patterns for finger positions when playing chords

// Barres:
// Represent placing the index finger on the same fret across multiple strings
// Open chords consist of chords containing one or more strings that aren't fingered

// Fingers (Right Hand):
// 1 - Index finger
// 2 - Middle finger
// 3 - Ring finger
// 4 - Little finger

// Strings (left to right):
// 1 - Low E
// 2 - A
// 3 - D
// 4 - G
// 5 - B
// 6 - High E

// Frets (top to bottom)
// The topmost fret is the first fret after the nut unless
// a number next to the first fret indicates the "starting" fret


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
    gFlatMaj: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
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

// Tonality for Maj/Min Chords
const chordTonalities = {
    majorTonalities: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'],
    minorTonalities: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj']
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