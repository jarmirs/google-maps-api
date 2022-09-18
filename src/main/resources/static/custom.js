var map;
var coords = {lat: 39.9612, lng: -82.9988};

function initMap() {
	
	var image = {url: '/flagpic.png', 
    scaledSize: new google.maps.Size(50, 50)};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.9612, lng: -82.9988},
        zoom: 10,
        scrollwheel: false
    });
    // The marker, positioned at Uluru
   var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: image,
    animation: google.maps.Animation.BOUNCE
});

var contentString = '<h2>Columbus, OH</h2> <p>Where your dreams come true.</p>';

 var infowindow = new google.maps.InfoWindow({
   content: contentString
 });

 google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
 });
 



}