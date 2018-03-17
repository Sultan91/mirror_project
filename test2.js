$(document).ready(function (){

var lat=0;
var lon=0;
$.getJSON("http://ip-api.com/json", function(geo_data){

lat=geo_data.lat;
lon=geo_data.lon;


	var api='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=3ad73aeb46986a534c0fd3cf623f8f8e';
		//$("#weather").html(api);
		//-------------------------------
		$.getJSON(api,function(data){
			var weathertype=data.weather[0].description;
			var weather=data.weather[0].main;
			var kelvin=data.main.temp;
			var windspeed=data.wind.speed;
			var city=data.name;
			ftemp=Math.floor((kelvin)*(9/5)-459.67);
			ctemp=Math.floor((kelvin-273.15));
			$("#weather").html(weathertype+': '+lat+' ; '+lon);
			$("#temp").html(city+'  <div id="t">'+ctemp+' &#8451</div>')
			if(weathertype=="clear sky"){
			$(".animation").prepend("<div class='icon sunny'>  <div class='sun'>    <div class='rays'></div>  </div> </div>")
			}
			else if(weathertype=="shower rain"){
				$(".animation").prepend("<div class='icon sun-shower'>  <div class='cloud'></div>  <div class='sun'>    <div class='rays'></div>  </div>  <div class='rain'></div></div>")
			}
			else if(weathertype=="rain"){
				$(".animation").prepend("<div class='icon rainy'>  <div class='cloud'></div>  <div class='rain'></div></div>")
			}
			else if(weathertype=="snow"){
				$(".animation").prepend("<div class='icon flurries'>  <div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div> </div></div>")}
			else if(weathertype=="thunderstorm"){
				$(".animation").prepend("<div class='icon thunder-storm'><div class='cloud'></div><div class='lightning'><div class='bolt'></div><div class='bolt'></div></div></div>")}
			else if(weathertype=="broken clouds"||"scattered clouds"){
				$(".animation").prepend("<div class='icon cloudy'> <div class='cloud'></div>  <div class='cloud'></div></div>")}
			else if(weathertype=="few clouds"){
				$(".animation").prepend("<div class='icon sunny'><div class='cloud'></div>  <div class='sun'><div class='rays'></div></div></div>")}
		})
		
		
		
		
		
		})
});