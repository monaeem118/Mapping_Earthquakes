var map = L.map('mapid').setView([40.7128, -74.0059], 4);

// Get data from cities.js
let cityData = cities;



// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  
  L.circleMarker(city.location, {
    radius: city.population/100000,

  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    id: 'mapbox/streets-v11',
      accessToken: API_KEY
  }).addTo(map);


