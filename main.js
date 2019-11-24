// Initialize and add the map

  // need to be in google account, search google cloud console, as we need an API because it has to make a request to the Google servers to get the location and all that stuff.

  // so many different APIS , looking for maps JS API, make sure its enabled , click then go to credentials and create an API keys, copy API key, 

// search for Google Map docs, click on the first link here the overview, tells uus what we need to do to use API, So we need to add a script tag so a script tag just includes a javascript file and we're including the javascript maps file. But we also need to put in our API key.

// going to put it in that main J main dot J S file that we created.And notice that they have a div with the idea of map. We used a class but it doesn't really matter we can target a div or a class. And that's where the map goes.

// copy the script.  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR APIS AND CALLBACK=initMap" async defer></script> and wwhere it says YOUR APIS AND CALLBACK -  stick your API key and put it in there ...  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoZg2Es_GrQHZf_52j2-xZ3cTfBCR0HII&callback=initMap" async defer></script> and that sits before the </body> on the HTML file

// also need to have the main. js file on the HTML 


// so it's linking to the maps API and it's has this callback equals init to map this init map is a function, it's this function that we're creating, So it's going to call this init map and it is short for initialize and then what we're going ... 
function initMap() {
  // Your location
  // putting in our location which is this is actually called a javascript object and it has a latitude and longitude. Now this this latitude and longitude is actually is centred in Boston Massachusetts.

   // if you want your map to be somewhere else you can get the latitude and longitude from from there.And there certain sites you can do that with.So google get the latitude and longitude from an address and if you go to lat long.net you can put in any address eg,  New York and find, it'll get us just a random place in New York, any any latitude and longitude that you want into the object.         { lat: 42.361145, lng: -71.057083 }

  const loc={lat:53.383060,lng:-1.464790};
  // Centered map on location

 // here is creating what's called a variable called map and we're sending it to a new Google map.And then this document dot query selector is targeting the class of map. -  in our index each team Al we have this class of map. --  in  HTML file have this class of map.Sotargeting that and that's where we want to insert the map

 // zoom: 14, center: loc can change the zoom level and position, the center position is going to be in the location, the location was also put into a variable which is basically a place holder.

  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
 // here reporting on marker because we want a marker in that special location.So we're saying create a new marker and the position should be the location which is this variable.And the map should show this

  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
// at  this time , sticky doesnt work on safari

// JQuery was used all the time  a couple of years ago and it's starting to phase out for things like Dom selection basically selecting things from the document object model which is basically the hierarchy of tags and attributes and content in the browser.Now you can do all this stuff with vanilla javascript which is just regular javascript so there's a lot of things you don't need a jquery for that you used to.However animation is one that is kind of difficult to do and in some situations.So things like sliders and scrolling effects and stuff J.Query makes this stuff really easy.So we're gonna be using it for this one feature now you could download the javascript  file , we will use the CDN just like fontawesome CDN = content delivery network, code.jquery.com, dont choose silm function as doesnt have the

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
// above gives the menu an opacity when scrolling


// Smooth Scrolling
// Smooth Scrolling code snippet, any liinkin navbae, targetting the click, on click we run a function basically looking at the hash and then whatever the ID is And then call the animate on the body, the HTML body and we want to scroll from the top to that hash.
$('#navbar a, .btn').on('click', 
// class btn because of the ehat href and it leads to btn
function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
        // S-1100 prevents losin the tiles
      },
      800
      // the speed of the scroll, can make fatser slower, in milliseeconds
    );
  }
});