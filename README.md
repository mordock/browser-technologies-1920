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
