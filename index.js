function iniciarMap(){
    var coord = {lat:19.5275006 ,lng: -96.8970348};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}