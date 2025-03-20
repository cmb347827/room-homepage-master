# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![screenshot](./images/screenshot.PNG "screenshot")

### Links

- Solution URL: [Github]()
- Live Site URL: [Live Github]()

## My process

### Built with

- Semantic HTML5 markup
- Sass/SCSS
- Bootstrap
- jQuery/Javascript
- Mobile-first workflow


### What I learned

- I had some trouble keeping the buttons for the carousel in place , as they appear above the image/text in the carousel html, and 
  they had to appear steady in different positions for mobile and desktop. I first tried to solve this with `transform:translate(50%,50%);` , different values for the x and y movements, but this didn't work as hoped. When I resized the screen, it worked to stay in place , for a bit, but not the whole range of resizing. 
  I found a stackoverflow post that explained how to get the position of an element , relative to another, that's not it's parent (link 1). Then I found another stackoverflow post that explained the use off offsetHeight (link 2) and I figured it out for the rest from there (see my offsetCalculate() function).
- Next, I had a hard time to make sure when resizing the screen, that the top carousel section and bottom aside section kept the same width, and that the text in the aside section didn't spill out beneath the images height. I tried a combination of using '.  img-fluid' , '.flex-noshrink-md-1', and '.flex-basis-40-md' . In the end  just using `.img-fluid` for the aside images, and `.flex-noshrink-md-1` for both the carousel text and aside text , in combination with setting width for the carousel text, worked.
- Next, was the images that were the same but different sizes. I know that the `<picture>` element works for this, to force a change at different screensizes. Or `<img>` with `scrcet` can be used, but then it's up to the browswer to determine when to change the image. 
- I had to figure out how to resize the left/right arrow svg. First I tried this by simply adding padding to the svg, but this did not work , as the svg dissapeared. I tried by adding `transform: scale(3);` to the svg, and by adding a larger width/height value than the svg width/height to the parent button element, and this worked.
- I used the W3 carousel pattern , the html pattern, for the carousel.
- I added two bonus features: The left/right arrow button , is to be minimum 140px wide, then it fits between the right edge of the carousel image and the left edge of the light image. If a user resizes the screen the button will resize to it remains that relative width. It will grow/shrink to fit it.  I used JS to add this feature.Also, when the user clicks the left/right carousel button, the image will load in an animation. I used SCSS/CSS for this.


    
 
### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

 [Position of an element relative to another that's not it's parent](https://stackoverflow.com/questions/55719056/position-an-element-relative-to-another-that-is-not-its-parent)

 [the use off offsetHeight](https://stackoverflow.com/questions/50281786/how-to-use-element-offsetbottom)


## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

