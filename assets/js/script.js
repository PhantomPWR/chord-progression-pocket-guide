// Set constant variables
const keySelectButtons = document.querySelectorAll("[data-key-select]");
const chordProgressionSelectButtons = document.querySelectorAll("[data-chord-progression-select]");
const displaySelectedKeyValue = document.getElementById("selectedKeyDisplay");


// Scale for each major key in the Circle of Fifths
const majorScales = {
    aFlatMaj: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
    aMaj: ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
    bFlatMaj: ["B♭", "C", "D", "E♭", "F", "G", "A"],
    bMaj: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
    cMaj: ["C", "D", "E", "F", "G", "A", "B"],
    cSharpMaj: ["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯"],
    dFlatMaj: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
    dMaj: ["D", "E", "F♯", "G", "A", "B", "C♯"],
    eFlatMaj: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
    eMaj: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
    fMaj: ["F", "G", "A", "B♭", "C", "D", "E"],
    fSharpMaj: ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"],
    gFlatMaj: ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"],
    gMaj: ["G", "A", "B", "C", "D", "E", "F♯"]
};

// Scale for each minor key in the Circle of Fifths
const minorScales = {
    aMin: ["A", "B", "C", "D", "E", "F", "G"],
    bFlatMin: ["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭"],
    bMin: ["B", "C♯", "D", "E", "F♯", "G", "A"],
    cMin: ["C", "D", "E♭", "F", "G", "A♭", "B♭"],
    cSharpMin: ["C♯", "D♯", "E", "F♯", "G♯", "A", "B"],
    dMin: ["D", "E", "F", "G", "A", "B♭", "C"],
    eFlatMin: ["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭"],
    eMin: ["E", "F♯", "G", "A", "B", "C", "D"],
    fMin: ["F", "G", "A♭", "B♭", "C", "D♭", "E♭"],
    fSharpMin: ["F♯", "G♯", "A", "B", "C♯", "D", "E"],
    gMin: ["G", "A", "B♭", "C", "D", "E♭", "F"],
    gSharpMin: ["G♯", "A♯", "B", "C♯", "D♯", "E", "F♯"]
};

// Tonality for Maj/Min Chords
const chordTonalities = {
    majorTonalities: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    minorTonalities: ["min", "dim", "maj", "min", "min", "maj", "maj"]
};


// Scale degree labels along with corresponding indices for
// the relevant scale degrees chords are built on
const chordProgressions = {

    minorOneFlatSevenFlatSixFlatSeven: {
        chords: [0, 6, 5, 6],
        degrees: ["i", "♭VII", "♭VI", "♭VII"]
    },

    minorSixFourOneFive: {
        chords: [5, 3, 0, 4],
        degrees: ["vi", "IV", "I", "V"]
    },

    oneFiveFourOne: {
        chords: [0, 4, 3, 0],
        degrees: ["I", "V", "IV", "I"]
    },

    oneFiveMinorSixFive: {
        chords: [0, 4, 5, 0],
        degrees: ["I", "V", "vi", "I"]
    },

    oneFlatSevenFlatSixFive: {
        chords: [0, 6, 5, 4],
        degrees: ["I", "♭VII", "♭VI", "V"]
    },

    oneFlatSevenFourOne: {
        chords: [0, 6, 3, 0],
        degrees: ["I", "♭VII", "IV", "I"]
    },

    oneMinorSixFourFive: {
        chords: [0, 5, 3, 4],
        degrees: ["I", "vi", "IV", "V"]
    },

    oneMinorSixMinorTwoFive: {
        chords: [0, 5, 1, 4],
        degrees: ["I", "vi", "ii", "V"]
    },

    oneMinorThreeMinorSixFive: {
        chords: [0, 2, 5, 4],
        degrees: ["I", "iii", "vi", "V"]
    }
};

/**
 * Listen for Key Select button click
 * Highlight selected key button
 * Update key selection display text
 * If chord progression already selected - display chord diagrams
 */
let keyTonality;

function handleKeySelection() {

    keySelectButtons.forEach((keySelectButton) => {

        // Listen for Key Select button click
        keySelectButton.addEventListener("click", function () {

            // Remove active CSS class from all Key Select buttons
            let activeKeys = document.getElementsByClassName("key-select active");
            Array.from(activeKeys).forEach((activeKey) => {
                activeKey.classList.remove("active");
            });

            // Add active CSS class to selected button
            this.classList.add("active");

            // Update Key Select display and change colour
            displaySelectedKeyValue.innerText = (this.innerText);
            displaySelectedKeyValue.classList.remove("ghosted");

            // Get the selected Key
            userSelectedKey = this.getAttribute("data-key-select");

            // Set Key display
            displaySelectedKeyValue.setAttribute("data-selected-key-display", userSelectedKey);

            // Get the selected Key tonality (Major or Minor)
            keyTonality = this.getAttribute("data-key-tonality");

            // Enable chord progression buttons (remove "disabled" attribute)
            disableChordProgressionButtons(false);

            // Check if a chord progression has been selected
            if (displaySelectedChordProgressionValue !== "") {
                populateChords();
            }

        });
    });

}

/**
 * Listen for Chord Progression Select button click
 * Highlight selected Chord Progression button
 * Update Chord Progression selection display text
 * Display chord diagrams
 */
function handleChordProgressionSelection() {

    chordProgressionSelectButtons.forEach((chordProgressionSelectButton) => {

        // Listen for Chord Progression button click
        chordProgressionSelectButton.addEventListener("click", function () {

            // Remove active CSS class from all Chord Progression Select buttons
            let activeChordProgressions = document.getElementsByClassName("chord-progression active");
            Array.from(activeChordProgressions).forEach((activeChordProgression) => {
                activeChordProgression.classList.remove("active");
            });

            // Add active CSS class to selected button
            this.classList.add("active");

            // Update Chord Progression display and change colour
            displaySelectedChordProgressionValue.classList.remove("ghosted");
            displaySelectedChordProgressionValue.innerText = (this.innerText);

            // Get selected Chord Progression
            userSelectedChordProgression = this.getAttribute("data-chord-progression-select");
            displaySelectedChordProgressionValue.setAttribute("data-selected-chord-display", userSelectedChordProgression);

            populateChords();

        });
    });

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
        return status;

    });

}


/*
* Wait for the DOM to finish loading
* Get button elements and add event listeners
*/

document.addEventListener("DOMContentLoaded", function () {

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

    const chordBoxContainer = document.getElementById("chordBoxContainer");
    chordBoxContainer.classList.add("expanded");

    if (userSelectedChordProgression) {

        let chordProgressionDegrees;
        let chordProgressionChordIndices;
        let scale;
        let chordTonalitiesLookup;
        let chordTonalityIndex;
        let chordTonality;
        let chordProgressionLookup = chordProgressions[userSelectedChordProgression];
        let i;

        // Degree Labels
        let labelDegreeList = document.querySelectorAll("[data-label-degree]");
        let numberOfDegreeLabels = labelDegreeList.length;
        chordProgressionDegrees = chordProgressionLookup.degrees;

        for (i = 0; i < numberOfDegreeLabels; i++) {
            labelDegreeList[i].textContent = chordProgressionDegrees[i];
        }

        // Chord Labels
        let labelChordList = document.querySelectorAll("[data-label-chord]");
        let numberOfChordLabels = labelChordList.length;
        chordProgressionChordIndices = chordProgressionLookup.chords;


        for (i = 0; i < numberOfChordLabels; i++) {

            // Is chord progression degree minor in a major key?
            if (keyTonality == "maj") {

                // Get relevant scale
                scale = majorScales[userSelectedKey];

                // Get relevant chord tonalities
                chordTonalitiesLookup = chordTonalities.majorTonalities;
                chordTonalityIndex = chordProgressionChordIndices[i];
                chordTonality = chordTonalitiesLookup[chordTonalityIndex];

                // Is chord progression degree minor in a minor key?
            } else if (keyTonality == "min") {

                // Get relevant scale
                scale = minorScales[userSelectedKey];

                // Get relevant chord tonalities (major or minor)
                chordTonalitiesLookup = chordTonalities.minorTonalities;
                chordTonalityIndex = chordProgressionChordIndices[i];
                chordTonality = chordTonalitiesLookup[chordTonalityIndex];

            }

            labelChordList[i].textContent = scale[chordProgressionChordIndices[i]].replace("/", "\/") + " " + chordTonality;

        }


        // Chord Diagrams
        const chordDiagramList = document.querySelectorAll("[data-chord-diagram]");
        let urlBase = "./assets/images/chord-diagrams/";
        let chordDiagramUrl;

        // Build chord diagram image file names & URLs
        chordDiagramList.forEach((chordDiagram, i) => {

            // Get chord labels & apply the necessary string replacements
            let chordLabel = labelChordList[i].textContent.toLowerCase().replace(" ", "").replace("♯", "sharp").replace("♭", "flat").replace("/", "");

            // Add file extension to file name
            let chordDiagramFileName = chordLabel + ".webp";

            // Build final image URL
            chordDiagramUrl = urlBase + chordDiagramFileName;

            // Populate chord diagram image src attribute
            chordDiagram.setAttribute("src", chordDiagramUrl);

            // Populate chord diagram image alt attribute
            chordDiagram.setAttribute("alt", labelChordList[i].textContent.replace(" ", "") + " Guitar Chord Diagram");

        });

    }

}