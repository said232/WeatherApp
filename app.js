const apikey = 'b9432112fd2bfe2facd7552071a813a1';
 let latitude;
 let longitude;
let temperElemnt = document.querySelector('.temperature-value p');
const notification = document.getElementsByClassName('notification')[0];
let weatherIcon = document.querySelector('.weather-icon');
let locationElement = document.querySelector('.location p');
let temperatureDescription = document.querySelector('.temperature-description p');


function getLocation() {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(onSccess,onError);
    
}

function onSccess(position)
{
    console.log(position);
    latitude =position.coords.latitude
    longitude = position.coords.longitude
    const weather = fetch('https://api.openweathermap.org/data/2.5/weather?'
    +'lat='
    +latitude
    +'&lon='
    +longitude
    +'&appid='
    +apikey
    
    );
    weather
        .then(response => response.json())
        .then(result => 
            {
                temperElemnt.innerHTML = `${Math.round(result.main.temp - 273.15)} °<span>C</span>`;
                weatherIcon.innerHTML = `<img src="icons/${result.weather[0].icon}.png"/>`; locationElement.innerHTML = `${result.name + ' ' + result.sys.country}`;temperatureDescription.innerHTML = `${result.weather[0].description}`;
            });
}

function onError(error)
{
const p =document.createElement('p');
    console.log('no what did you do is ',error);
    p.innerHTML=error.message
    notification.style.display='block'
    notification.appendChild(p)
}
getLocation()
