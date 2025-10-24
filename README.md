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
- Then when I submitted the project I got this error:"Attribute "width" not allowed on element "source" at this point" , I got the same error for the source height attribute.  I remember seeing these attributes add to `<source>` in so many tutorials (link 5), that I went to the HTML standard site (see link 3), and saw the same thing mentioned, width/height in `<source>` element. See also (link 4).  I removed the width/height attribute for the first `.carousel-item` . And applied `srcset="./images/desktop-image-hero-1.jpg  840w"`  with the width specified, and `sizes="40vw"` with a viewport width specified , the amount of space the image should occupy in desktop view.  I had to adjust the height for the left/right arrow button , this was partly done in the `carousel.scss` file (went from `height='80'` to `height='30'`) and partly in the js file (line 40, went from -85 to -35 ).  This worked, up to a point. I felt frustrated, with trying to make this work and decided to validate my code at https://validator.w3.org/.  My code validated on 3/21/2025. All green. So it seems strange. For a final test, I checked out 'can I use' (see link 6). It was all green for all recent brouwsers (I entered source width). So I decided in the end to go with removing the height attribute , and added some code in the scss file (from line 236), and keeping the width attribute, and changed the button code in my js/scss files back to what it was.
    
 
### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

 [Position of an element relative to another that's not it's parent](https://stackoverflow.com/questions/55719056/position-an-element-relative-to-another-that-is-not-its-parent)

 [the use off offsetHeight](https://stackoverflow.com/questions/50281786/how-to-use-element-offsetbottom)

 [the source element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)

 [width heigh attributes](https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width)

[width height in source](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement/width)
[can I use source width](https://caniuse.com/mdn-html_elements_source_width)


## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

