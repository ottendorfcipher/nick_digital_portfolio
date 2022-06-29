# Nick Weiner's Digital Portfolio

This is a digital portfolio website presented as partial fulfillment of Code Louisville's Front-End Term Requirement. The portfolio's intended purpose is to demonstrate present and past accomplishments and give readers a sense of my future goals. The portfolio also serves as a point-of-contact. The website features four categories of content: Latest Projects, Experience, and Professional Interests.

Below is a list of features that fulfill Code Louisville's Front-End Project Requirements:

### CSS Features

1. **A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by clicking the “hamburger” icon.**

    Notes: In order to create this I imported Boostrap 4 as a CDN and used the navbar navigation classes in order to create a navigation menu that would work in both desktop and mobile sizes. It features a hamburger icon for small mobile devices. 

    Example Location: index.html Line 53-55 
                      js/template.js Line 6-80

2. **Import Bootstrap from a CDN, then use Bootstrap’s column system to organize content areas based on mobile or desktop views (cannot be used on the same page as the Flexbox/CSS Grid requirement above). Note: Bootstrap is an optional Treehouse video**

    Notes: Boostrap 4 is used significantly to define classes through most of the website's design.

    Example Location: index.html Line 59-61

3. **Create your own original CSS animation. For example, create a loading spinner or menu animation. Note: CSS Animations are not included in the assigned Treehouse track, you will have to research this on your own**

    Notes: I used a CSS animation in order to create a slowly moving blue gradient background. 

    Example Location: css/styles.css Line 1-18

### Media Queries

1. **Media Query to change timeline view on index.html**

    Example Location: css/styles.css Line 273-278

2. **Media Query to change timeline event view on index.html**

    Example Location: css/styles.css Line 299-303

3. **Boostrap 4 Media Queries (.col-sm, .col-md, .col-lg breakpoints, etc.)** 

    Notes: (Boostrap 4 CSS is minified CDN in html pages).
    
    I explored using .col-md rather than .col or .col-sm because the breakpoints helped fit the content on my pages better for mobile devices. 
  
    Example Location: Compiled Code Source: https://getbootstrap.com/docs/4.0/getting-started/download/ 
                      boostrap-grid.css Line 331-339

4. **Media Query on Contact Form**

    Notes: I added this just in case I needed a media query written in my styles.css file rather than in Boostrap. It's the exact same media query as .col-lg-6 in Boostrap. 

    Example Location: contact.html Line 71
                      css/styles.css Line 513-518


### JS Features

1. **Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code.**

    Notes: I created buttons that flip to reveal content on the other side at the bottom of rorak.html (This also contains a loop because it applies to two buttons on the page).

    Example Location: js/card-flip.js Line 1-5

2. **Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page**

    Notes: I put an object within an array to simply display some goals I have for a future in web development.

    Example Location: js/goals.js Line 1-17
                      webdev.html Line 91-92


### Misc. Features

1. **JavaScript feature that uses .innerHTML to create a uniform navigation menu and footer on every page.**
    
    Example Location: js/template.js

2. **JavaScript feature that adds and removes a class of the navigation menu's style at a certain height on the screen so that it removes the border radius on the top left and top right and 'locks' as a sticky navigation on scroll.**

    Example Location: js/nav-scroll.js

3. **Boostrap 4 Image Carousel**

    Example Location: rorak.html Line 80-111

4. **Boostrap 4 Accordion**

    Example Location: edlead.html Line 147-416


### Features Not Intended For Review

1. **Validation for the Contact Us form is attributed to an open-source developer in the comments. It is not intended for review as a JavaScript feature.**

    Example Location: js/form-validation.js

### Disclaimers

Cover Photo Attribution on webdev.html : Photo by Nathana Rebouças on Unsplash
Cover Photo Attribution on cello_lessons.html : Photo by CHUTTERSNAP on Unsplash
  
