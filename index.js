let map;

function initMap() {

    if(navigator.geolocation)
    {
navigator.geolocation.getCurrentPosition((pos)=>{

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: { lat: 11.59364 , lng: 37.39077 },
      });
      // NOTE: This uses cross-domain XHR, and may not work on older browsers.
      map.data.loadGeoJson(
        "http://127.0.0.1:5500/map/Grid.geojson",
      );

      map.data.addListener('click',function(event)
      {
        console.log(event.feature.h.name)
      })
      



})
        

    }

}

window.initMap = initMap;