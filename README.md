Criteria

    Zet je code op Github
    Schrijf een Readme met:
        een beschrijving van alle features die je hebt getest
        een beschrijving van de Devices en browsers waar je op hebt getest
        een beschrijving van de screenreader test
        beschrijf hoe je de problemen hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben

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
