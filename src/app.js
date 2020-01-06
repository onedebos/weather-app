const tempNum = document.querySelector('.temp-num');
const tempDescription = document.querySelector('.weather-description');
const noLocationFound = document.querySelector('.current-location');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const tempBtn = document.querySelector('.temperature');
const convertToCelsius = (tempInKelvin) => Math.floor(tempInKelvin + -273.15);
const convertToFahrenheit = (tempInKelvin) => Math.floor(tempInKelvin + -459.67);

const renderData = (data) => {
  if (tempBtn.classList.contains('fahrenheit')) {
    tempNum.innerText = convertToFahrenheit(data.main.temp);
    document.querySelector('.temp-degree').innerText = '';
    document.querySelector('.temp-celsius').innerText = 'F';
  } else {
    tempNum.innerText = convertToCelsius(data.main.temp);
    document.querySelector('.temp-degree').innerText = 'o';
    document.querySelector('.temp-celsius').innerText = 'C';
  }

  tempDescription.innerText = data.weather[0].description;
  city.innerText = data.name;
  country.innerText = data.sys.country;
  noLocationFound.classList.remove('no-location');
  noLocationFound.classList.add('found-location');
};

const getWeatherAtLocation = (inputLocation) => {
  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&APPID=2874e0623c8807994e18916c8cd78f21`;
  fetch(weatherApi, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      if (data.main === undefined) {
        noLocationFound.innerText = 'Location weather unavailable';
        noLocationFound.classList.remove('found-location');
        noLocationFound.classList.add('no-location');
      } else {
        noLocationFound.innerText = `Weather in ${data.name}`;
        renderData(data);
      }
    });
};

const showWeatherAtUserLat = (lat, lng) => {
  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2874e0623c8807994e18916c8cd78f21`;
  fetch(weatherApi, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      noLocationFound.innerText = `You're currently in ${data.name}`;
      noLocationFound.classList.add('found-location');
      renderData(data);
    });
};

tempBtn.addEventListener('click', () => {
  tempBtn.classList.toggle('fahrenheit');
  const cityInput = document.querySelector('#get-location-id').value;
  getWeatherAtLocation(cityInput);
});

const runForm = () => {
  const submitForm = document.querySelector('.get-location');
  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityInput = document.querySelector('#get-location-id').value;
    getWeatherAtLocation(cityInput);
  });
};

const grabUserLocation = (lat, lng) => {
  if (lat === undefined && lng === undefined) {
    noLocationFound.innerText = 'Click \'Allow\' to enable location';
  } else {
    showWeatherAtUserLat(lat, lng);
  }
};

tempBtn.addEventListener('click', () => {
  tempBtn.classList.toggle('fahrenheit');
  const cityInput = document.querySelector('#get-location-id').value;
  getWeatherAtLocation(cityInput);
});

const getCurrentLocation = () => {
  // Get the latitude and the longitude;
  const successFunction = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    grabUserLocation(lat, lng);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
  }
};

getCurrentLocation();
runForm();
grabUserLocation();