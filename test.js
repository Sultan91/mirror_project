var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  alert('Your current position is: Latitude : ' + crd.latitude+'Longitude: ' + crd.longitude+'More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  alert('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, {timeout:10000});