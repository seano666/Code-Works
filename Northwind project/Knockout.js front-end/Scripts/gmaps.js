var map;
var geocoder;
function mapinitialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(45.4503273, -122.78900859999999),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

function codeAddress(address) {
    var loc;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                icon: "http://maps.google.com/mapfiles/ms/micons/blue.png",
                position: results[0].geometry.location
            });
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}