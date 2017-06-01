$(document).ready(function(){
  $.getJSON("http://freegeoip.net/json/", function(data) {

    var latitude = data.latitude;
    var longitude = data.longitude;
    var appId = '65a275edd3ce6a80b7b446a84846fed7';
    var units = 'metric';
    var imgUrl = 'http://openweathermap.org/img/w/';

    $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+longitude+'&units=' + units +'&appid='+appId,
    }).done(function(currWeather){

      var location = currWeather.name+ ', ' + currWeather.sys.country;
      var mainTemp = Math.round(currWeather.main.temp);
      var mainWeather = currWeather.weather[0].main;
      imgUrl+=currWeather.weather[0].icon + '.png';

      $('#location').text(location);
      $('#temp').text(mainTemp + ' ' + String.fromCharCode(176) + 'C');
      $('#weather').text(mainWeather);
      $("#tempImg").attr("src", imgUrl);

      $('#toggleTemp').on('click', function(e){

        var units = 'imperial';
        $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+longitude+'&units=' + units +'&appid='+appId,
        }).done(function(fahrenhitWeather){
                  var mainTemp = Math.round(fahrenhitWeather.main.temp);
                  $('#temp').text(mainTemp + ' ' + String.fromCharCode(176) + 'F');
        });
      });
   });
  });
});
