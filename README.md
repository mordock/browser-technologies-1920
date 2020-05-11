## Link to assignment 2:
https://maxweijersbt.herokuapp.com/

## Assignment 1.2

I checked the following features:  
- Turning off images in the browser,  
- Turning off fonts in the browser,  
- Checking if the site works with different kinds of color blindness,  
- Not using the mouse to navigate the site,  
- Not using broadband internet, I used the 2G setting in my browser,   
- Turning off javascript,  
- Turning off cookies/local storage

I also tested my app on several browsers and different devices. For these tests I used my WAFS project which can be found here:  
https://mordock.github.io/web-app-from-scratch-1920/

Browser tests:  
Firefox version 74: everything works perfectly  
Chrome version 80: everytinng works perfectly  
Brave: version 1.4: everything works perfectly

Device tests:  
Nexus 5, android 6.0.1, Chrome version 75: everyting works perfectly  
Ipod touch, Safari version 6: layout works, but he doesn't get the data. Fetch only works from Safari version 10.  
Ipad, safari version 9: layout works, but he doesn't get the data. Fetch only works from Safari version 10. 

Feature tests:  
No images: everything works perfectly,  
No fonts: title changes to browser default, perfectly otherwise,  
Color blindness: I used 'I want to see like the color blind people': every version works fine,  
No mouse: You can navigate the site fine, but the experience is far from great,  
No fast internet: Loading takes a little longer with it works fine,  
No javascript: My base layout works fine because that's done in html and css but you're stuck in an unending loading loop,  
No cookies/local storage: I dont use either, so everyting works perfectly

feature (possible) fixes:  
No images: give your image components widths and heights so your layout is still fine,  
No fonts: Make sure you set a font for your app base a fallback, or several fallbacks in case of not supported fonts,  
Color blindness: When making your app, pay attention to color contrast. Use tools to check your pages,  
No mouse: Give all your buttons and imporant text focus states,  
No fast internet: Optimize your resources, like reduce image size and use a service worker,  
No javascript: Make sure your layout has a base and possibly some info for the user to look at if Javascript doesn't work, 
No cookies/local storage: Make sure the base of your site works without so the user is still able to use your site without.

Screen reader test:
For this test I used the build in windows screen reader. For this screen reader to actually read browsers you need focus states on objects, because the reader 'reads' what's in focus on the screen. 
You can navigate my overview page perfectly, but my detail page doesn't have focus states for my items so you can't listen to those.
I can fix this by adding focus states to the detail page, this would also help with no mouse navigation. 

## Assignment 2

Wireflow:  
![alt test](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/Wireflow.png)

## assignment
My case was to make a questionnaire which can be continued later on. It also needed to contain several question types.

## description
This web app is a simple questionnaire which you can continue by saving the given link after pressing save. This will fill in all the answers you can already given and keep everyting empty which you haven't. You can also see the person who used the web app before, this is updated after every questionnaire. 

## 8 features
* No images: I dont use images so this is not a problem
* No custom fonts: I dont use custom fonts, only build in fonts, which have fall backs.
* Colors: [Can be found here](#contrast)
* No mouse: Works, you can cycle through all the questions which have focus states.  
No focus  
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/mouse001.png)
___________________________
Focus  
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/mouse002.png)  
* No broadband internet: I used a custom 'very slow' option(50kb/s) in chrome. Everything works fine, loading takes a little longer but my files aren't very big so this shouldn't be a big problem. If I had more time to work on this app I would add more feedback when the page is loading.
* No javascript: The basic functionality still works but the colored feedback and basic form validation doesn't work anymore. 
* No cookies/localstorage: I dont use either so the site works perfectly

## Functional Usable Pleasurable
* Functional: The app is function when you use the HTML/EJS. With just that you could use the app and make a questionnaire and save a link.
* Usable: When you add CSS to the mix the app becomes usable, it adds to the UX and the overall feel of the app.
* Pleasurable: The app becomes pleasurable when you add the javascript, this allows you to add extra features like progressbars, validation and local storage.

## support
I have color and date inputs which are not directly supported by IE11. This changes the the fields to a text field so you can still fill in te required information. 
Chrome:
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/chrome.png)
IE11:
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/support001.png)

For my range input I use an output to show the current value of the range. Output is not supported from IE11 so by default I put this value to nothing to combat this. All the other browsers will get to see the value when they change it. 
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/support002chrome.png)

This is however not a big problem because IE11 has something similair build in:
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/support002exp.png)
## contrast
For my website I mostly used a shade of light blue with black letters. This gives a calming feeling with good contrast. Which can be seen here:
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/contrast001.png)

## local storage
In my website I show, via local storage, which user before you used the app. This functionality has a browser detect if the user has no cookies/local storage or if the browser doesn't support it.  
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/storage.png)  
In case local storage isn't supported for some reason, you will see this message:  
![alt_text](https://github.com/mordock/browser-technologies-1920/blob/master/school%20stuff/Resources/storage_check.png)  

### conclusion

- I've learned how to utilize progressive enhancement in a website.
- I've learned that accessability is important for any site.
- I've learned how to improve a website with CSS and Javascript as extra layers. 
- I've learned how to do browser detect and how to handle unsupported features.
- I've learned how to do better and more complete tests for websites.

#### full conclusion
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
During the first assignment I learned what technologies to look research and test. With the second assignment I learned how to implement this in a simple web app. Also during this I learned how to implement these features as enhancements to the HTML and CSS. 
- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
I learned how to build up my web app in three layers, functional, usuable and pleasurable. The functional layer hold the HTML of your site, the usuable add CSS to improve the user experience increase accessibility. And the pleasurable layer adds the Javascript to make your web app truely nice to use. These lower layers should be the minimum of any site in case any of the top layers don't work for whatever reason. 
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._  
During this project I implemented a feature with local storage which can be turned off or some browsers don't support it. If it isn't supported for any of these reasons the the text you would normally get is replaced with a message telling you that the feature isn't supported. This is to inform the user of why certain features don't work and how it could possibly be fixed to give the optimal experience for the user.

## Criteria
- De code staat in een repository op GitHub  
Yes
- Er is een Readme toegevoegd met daarin beschreven:
  - Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de  functional/reliable, usable en pleasurable laag.
  - [Wireflow](#Assignment-2)
  - [Layers](#Functional-Usable-Pleasurable)
- een beschrijving van de feature(s)/Browser Technologies
  - [local storage](#local-storage)
- welke browser de feature(s) wel/niet ondersteunen
- [features](#support)
- een beschrijving van de accessibility issues die zijn onderzocht
  - [accessiblity issues](#8-features)
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
  - [Layers](#Functional-Usable-Pleasurable)
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen  
  - [contrast](#contrast)
- het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen  
  All interactable elements have focus states like buttons and inputs.
- met meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
  - The complete enhanced version is in-f***ing credeble with progess bars, local storage functionalities and amazing feedback.
- Student kan de Basic functionaliteit van een use case doorgronden
  - The user can always do the basic functionality of the web app, make a questionnaire. This is further improved by the css which add to the user experience and by javascript which adds features if they are supported
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development
  - feature detection allows you to check if the current system/brower supports a feature. If it doesn't the feature can be disable without other things breaking. The user can also be informed of the feature not working. This helps add to the pleasurable layer. 


