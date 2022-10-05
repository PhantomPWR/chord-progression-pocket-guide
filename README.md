# Chord Progressions - Pocket Guide For Guitar

## Diploma in Full Stack Software Development - Portfolio Project 2

![Mockup](/assets/readme/device-mockup.webp)

[The live project can be viewed here.](https://phantompwr.github.io/pp2-chord-progression-pocket-guide/) 


This is a simple website allowing the user to calculate the component values for either a Passive Low Pass Filter or a Passive High Pass Filter.

The user enters 2 out of the 3 required values, and the calculator will calculate the value of the third component.

As an example:
From the Low Pass Filter Calculator:
1 - Set the Resistance Value to 300 and the Resistance Scale to mΩ (mega-ohm).
2 - Set the Cutt-off Frequency to 50 and the Frequency Scale to Hz (hertz).
3 - Click `Calculate` and the result is displayed as 10.61pF (picoFarad). This determines the value in picoFarad of the required Capacitor for the desired Cut-Off Frequency, based on the output impedance of the Amplifier.

The goals of this website are:
* Generate traffic in order to generate AdSense revenue.

The user visit this website to:
* Calculate the component values for Passive Low Pass or Passive High Pass filters.
* An example of this would be to limit the lowest frequencies being sent to a pair of hi-fi speakers.

# UX
The design of the site is purposefully simple and single-use focussed. There are only two calculators at this stage, and the site makes it easy for the user to know which filter type they are calculating component values for.

### Ideal client 
The ideal client for this business is: 
* Electronic hobbyist
* Hi-Fi enthusiast
* Hi-Fi circuit designer
* Audiophile hobbyist

The project help clients to: 
* Determine the component values or cut-off frequency for a set of known components.

### User stories: 
1.	As a visitor, I am designing a Passive High Pass Filter to limit the minimum freqency signal being passed to the amplifier inputs of a hi-fi system. I know what the amplifier's output impedance is (300 mOhm), and know the desired cut-off frequency (50Hz). I can use the Passive High Pass Filter calculator to determine the Capacitance required (10.61pF) for the capacitor in the circuit, to achieve the desired cut-off frequency.
2.	As a visitor, I am designing a Passive Low Pass Filter to limit the maximum freqency signal being passed to the sub-woofer inputs of a hi-fi system. I know what the sub-woofer amplifier's output impedance is (300 mOhm), and know the desired cut-off frequency (50Hz). I can use the Passive Low Pass Filter calculator to determine the Capacitance required (10.61pF) for the capacitor in the circuit, to achieve the desired cut-off frequency.
3.	As a visitor, I am designing a Sub-woofer amplifier input circuit. I've completed the design and in testing want to calculate the actual cut-off frequency of the input-circuit. Based on the Capacitance and Output Impedance in the design, I can use the Passive Low Pass Filter calculator to determine the actual cut-off frequency of the design.
4.	As a visitor, I am designing a Sub-woofer amplifier input circuit, with a Variable Resistor. I've completed the design and in testing want to calculate the actual reange of cut-off frequencies of the input-circuit. Baed on the Capacitance and InOutputput Impedance, together with the range of the Variable Resistor in the design, I can use the Passive Low Pass Filter calculator to determine the actual cut-off frequency of the design.

### Scope
To help the visitor achieve their circuit design goals, I included the following features in the website: 
* Passive Low Pass Filter calculator.
* Passive High Pass FIlter calculator.
* Calculation Formula and Legend, showing the formula used in the calculations.
* Simple High Pass and Low Pass Filter diagrams.
* Basic High Pass and Low Pass Circuit Layout DIagrams, showing the difference in required circuit layout for each filter type.
* Diagrams showing the different -3dB cut-off frequency graphs for the Low Pass and High Pass filters respectively.

## Skeleton 
The website consists of only 3 pages. An initial landing page, with the options between the two calculator pages. A page for Passive High Pass FIlter and a third for the Passive Low Pass FIlter.

### Wireframe Mock-ups: 
* [Desktop Mock-up](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/desktop-mock-up.webp)
* [Responsive Mock-up](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/responsive-mock-up.webp)
* [Site Sketch](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/site-sketch.webp)
* [FIlter Sketches](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/filter-sketches.webp)
* [FC Equation](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/fc-equation.webp)

### Build and Design Process:
# Stage 1:

Initially, everything was left unstyled, with focus on getting the JavaScript calculation functionality working correctly. 

![Landing Page Unstyled](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/landing-page-unstyled.webp)

![LPF Page Unstyled](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/lpf-unstyled.webp)

![HPF Page Unstyled](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/hpf-unstyled.webp)

# Stage 2:

Basic styling was used, simply to get the elements and placeholder images into the right locations on the screen. 

![stage-2-1](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-1.webp)

![stage-2-2](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-2.webp)

![stage-2-3](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-3.webp)

![stage-2-4](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-4.webp)

![stage-2-5](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-5.webp)

![stage-2-6](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-6.webp)

![stage-2-7](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-7.webp)

![stage-2-8](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/stage-2-8.webp)

# Stage 3:

Hand-drawn diagrams and images were added, together with the calculated result shown on-screen. 

![Placeholder Diagrams](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/placeholder-diagrams.webp)

![Console Results Checking](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/console-result-checking.webp)

# Stage 4:

Colour scheme and final layout completed, now using CSS Flex to make responsiveness easier. 

![Home Screen with Temp Diagrams](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/home-screen.webp)

![High Pass Filter Screen with Temp Diagrams](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/hpf-temp-diagrams.webp)

![Low Pass Filter Screen with Temp Diagrams](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/full-temp-diagrams.webp)

# Stage 5:

Final version, with all placeholder images replaced and styling completed. 

![Final Home Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/home-page.webp)

![Final High Pass Filter Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/hpf-page.webp)

![Final Low Pass Filter Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/lpf-page.webp)

# Features 

# Existing Features 
### Passive Low Pass Filter Calculator
This allows the user to enter 2 of the 3 values required, including their unti scales. This then calculates the result and displays it on the screen. As an example, if the user enters a Resistance value of 300 with a unit scale of mega-ohm, and a Cut-off Frequency of 50 with a unit scale of Hertz, the rult is provided as 10,61pF (pico-Farad) as the required Capacitance.

### Passive High Pass Filter Calculator
As with the Low Pass Filter, this allows the user to enter 2 of the 3 values required, including their unti scales. This then calculates the result and displays it on the screen. As an example, if the user enters a Resistance value of 8 with a unit scale of ohm, and a Cut-off Frequency of 8 with a unit scale of kHz, the rult is provided as 2.49μF (micro-Farad) as the required Capacitance.

# Features to Implement in future
The following features can be added in the future, to help generate additional traffic and increase the opportunities for AdSense revenue
* Make the filter calculators available on the domains: lowpassfiltercalculator.com and highpassfiltercalculator.com
* Add AdSense configuration to the existing sites
* Build additional electrical / circuit based calculators

# Technologies Used
This project uses HTML, CSS and JavaScript programming languages.
-	[Balsamiq](https://balsamiq.cloud) I used Balsamiq to generate the Desktop and Responsive Mock-ups.
-	[Gitpod](https://gitpod.io/workspaces)- I used Gitpod to write the code to build the site.
-	[GitHub](https://github.com/) - I used GitHub to host my code that was created and pushed from GitPod.
-   [xDiagram](https://apps.apple.com/gb/app/xdiagram/id517581636?mt=12) - I used xDiagram to generate the equation, filter, circuit and cut-off frequency images for the site. 
-	[Google Fonts](https://fonts.google.com/) The project uses Google fonts to style the website fonts.
-   [Tiny-PNG](https://tinypng.com/) I used tinypng to compress images in order to improve the website's loading time. 
-   [cloudconvert](https://cloudconvert.com/) I used cloudconvert to convert png files into WEBP files.
-	[Webaim.org](https://webaim.org/) The Webaim was used to test colour contrast on the project.
-	[W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) The W3C Markup Validation Service checked the markup validity of Web documents in HTML.
-	[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) W3C CSS Validation Service was used to check the validity of my CSS in the project.
-	[WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)I used WAVE to make my site more accessible to individuals with disabilities by detecting any potential issues.

-	[PlaceIMG](https://placeimg.com/)I used PlaceIMG to serve some temp images in the development process.

# Testing 
## Testing against client stories from UX section of README.md
- If the user lands on the home page, there is clear and direct links to the respective High Pass or Low Pass calculators, with a brief description of what to expect.
![Home Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/home-page.webp)

- The **High Pass Filter Page** allows the user to calculate any of the required 3 values for creating a Passive High Pass Filter. 
![High Pass Filter Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/hpf-page.webp)

- The **Low Pass Filter Page** allows the user to calculate any of the required 3 values for creating a Passive Low Pass Filter. 
![Low Pass Filter Page](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/lpf-page.webp)

    
## Code validation 
I used [W3C CSS validation](https://jigsaw.w3.org/css-validator/#validate_by_uri) and [W3C Markup Validation](https://validator.w3.org/#validate_by_uri) and [JSLint](https://www.jslint.com/) to check the validity of the website code.

Several issues were identified on **W3C Markup Validation**. 

![HTML Validation with Errors](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/html-validation-errors.webp)

After I rectified the issue, no further errors were picked up. 

![HTML Validation with No Errors](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/html-validation-no-errors.webp)

No errors were identified in the CSS code by **W3C CSS validation**. 

![CSS Validation with No Errors](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/css-validation-no-errors.webp)

Several warnings were generated in the JavaScript code by **JSLint validation**. 

![JSLint with Warnings](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/jslint-validation.webp)

These warnings were reduced from 138 to 24 with in further code updates and refoactoring.

![JSLint with No Warnings](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/jslint-validation-warnings-only.webp)

## Color Contrast 
The initial `color: #43bea9;` had Contrast Ratio of 2.28:1 with the white text. This was changed for the darker `color: #226357;` The [Color Contrast Accessibility Validator](https://webaim.org/) was used to test for colour contrast on the project.

![Colour Contrast Fail](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/colour-contrast-fail.webp) 

![Colour Contrast Pass](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/colour-contrast-pass.webp) 

## Lighthouse Testing
- Lighthouse testing in Chrome Browser shows full 100% scores.

![Landing Page Lighthouse Score](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/landing-page-lighthouse.webp)

![HPF Page Lighthouse Score](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/hpf-lighthouse.webp)

![LPF Page Lighthouse Score](https://raw.githubusercontent.com/pieterkdevilliers/audio-filters/main/docs/images/readme-images/lpf-lighthouse.webp)

## COMPATIBILITY
I tested this in desktop and mobile configurations on the following browsers:

* Chrome
* Firefox
* Safari

# Deployment

The project has been deployed on GitHub Pages. As my development environment I used Gitpod, from where I commited all changes to the Git version control system.

**To save changes, used the following commands:**
1. [cmd]+s to save changes
2. `git add .` - to add all changes to the queue
3. `git commit -m "commit message"` - to commit changes
4. `git push` - to push changes to the remote main repository

<br>

**To deploy the project onto GitHub Pages, I did the following:**

1. Log into GitHub and click on the relevant repository ([pp2-chord-progression-pocket-guide](https://github.com/PhantomPWR/pp2-chord-progression-pocket-guide/))
2. Click on `Settings`
3. On the left, find and click on Pages
4. Leave `Source` as is
5. Under `Branch`, select `main`
6. click `save`
7. After an automatic page refresh the message will read: 
>  Your site is live at https://github.com/PhantomPWR/pp2-chord-progression-pocket-guide/
<br>

**To run a local instance:**

1. Log into GitHub and click on the repository to be downloaded ([pp2-chord-progression-pocket-guide](https://github.com/PhantomPWR/pp2-chord-progression-pocket-guide/))
2. Select `Code` and click on `Download ZIP`
3. After downloading, you can extract the file and use it in your local environment

Alternatively you can [Clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
this repository ([pp2-chord-progression-pocket-guide](https://github.com/PhantomPWR/pp2-chord-progression-pocket-guide/)) into your github account.

<br>

# Credits

## Content References
For the music theory, chords and chord progressions, I used the following references:

*[Chord Progression Wiki](https://en.wikipedia.org/wiki/Chord_progression)
*[Music Industry How To](https://www.musicindustryhowto.com/piano-chord-progressions/)
*[Miguitarra Electrica](https://miguitarraelectrica.com/)
*[Theory and Sound](https://theoryandsound.com/)

## Images & Diagrams 
* 404 Page Background - [Pexels - Daniel Jensen](https://unsplash.com/@dallehj)
* Circle of Fifths image - Myself
* Chord Diagram Images - Myself

## Code 
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [w3schools.com](https://www.w3schools.com)
* [bobbyhadz Blog](https://bobbyhadz.com/)
* This ReadMe document is based on a template from [saranamdarian](https://github.com/TNamdarian/saranamdarian)


<br>

# Acknowledgement 
* Thanks to [Pieter K de Villiers](https://github.com/pieterkdevilliers) for his patience, suggestions and helping me ward off scope creep.
* My mentor, [Adegbenga Adeye](https://github.com/deye9) who guided me throughout this project.