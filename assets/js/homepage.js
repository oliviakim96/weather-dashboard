var citySearch=document.querySelector("#city-search");
var searchHistory=document.querySelector("#search-history");
var searchFormEl= document.querySelector("#search-form");
var currentWeather=document.querySelector("#current-weather");

var formSubmitHandler= function(event){
    event.preventDefault();
    console.log("myname")
    var cityname =citySearch.value.trim();

    if(cityname){
        currentWeather.textContent="";
        getLocation(cityname);
    } else {
        alert("Please enter a city name");
    }
};

function getLocation(data) {
    var apiUrl="http://api.openweathermap.org/geo/1.0/direct?q=" + data + "&limit=5&appid=f0848502da03f1a49e19e44164dd9d9c"
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log("latitude: "+ lat);
                console.log(lon);
                getWeather(lat,lon);
            });
        };
    }).catch(function(error){
        console.log(error)
    });
};

function getWeather(lat,lon) {
    var apiUrl="https://api.openweathermap.org/data/2.5/onecall?lat="+lat + "&lon=" + lon + "&appid=f0848502da03f1a49e19e44164dd9d9c";
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                
                displayWeather();
                console.log(data);

            })
        }
    }).catch(function(error){
        console.log(error)
    })
};

function displayWeather () {

}

searchFormEl.addEventListener("click",formSubmitHandler);
