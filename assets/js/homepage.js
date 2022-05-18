var citySearch=document.querySelector("#city-search");
var searchHistory=document.querySelector("#search-history");
var searchFormEl= document.querySelector("#search-form");
var currentWeather=document.querySelector("#current-weather");

var formSubmitHandler= function(event){
    event.preventDefault();
    var cityname =citySearch.value.trim();

    if(cityname){
        getCityInfo(cityname);

        currentWeather.textContent="";
    } else {
        alert("Please enter a city name");
    }
};

function getLocation() {
    var apiUrl="https://api.openweathermap.org/data/2.5/onecall?lat="+lat + "&lon=" + lon + "&appid=f0848502da03f1a49e19e44164dd9d9c";
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                var lat = data[0].latitude;
                var lon = data[0].longitude;
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

            })
        }
    }).catch(function(error){
        console.log(error)
    })
};

function displayWeather () {

}

searchFormEl.addEventListener("submit",formSubmitHandler);
