const tempNum = document.querySelector('.temp-num'); 
const tempDescription = document.querySelector('.weather-description'); 
const noLocationFound = document.querySelector('.current-location');
const city = document.querySelector('.city');
const country = document.querySelector('.country');

const runForm = () =>{
    const submitForm = document.querySelector('.get-location');
    submitForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        const cityInput = document.querySelector('#get-location-id').value;
        getWeatherAtLocation(cityInput);
        
    })
}

const grabUserLocation = (lat,lng) =>{
    if(lat == undefined && lng== undefined){
        noLocationFound.innerText = `Click 'Allow' to enable location`;
    }else{
        
        showWeatherAtUserLocation(lat,lng);
    }

}

const showWeatherAtUserLocation = (lat,lng) => {
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2874e0623c8807994e18916c8cd78f21`;
    fetch (weatherApi, {mode: 'cors'})
      .then((response)=> {return response.json()})
        .then( (data)=>{
            
            noLocationFound.innerText = `You're currently in ${data.name}`;
            noLocationFound.classList.add('found-location');
            renderData(data);
        } );
}

const getWeatherAtLocation = (inputLocation)=>{
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&APPID=2874e0623c8807994e18916c8cd78f21`;
    fetch (weatherApi, {mode: 'cors'})
      .then((response)=> {return response.json()})
        .then( (data)=> 
        {            
            if(data.main == undefined){
                noLocationFound.innerText = `Location weather unavailable`
                noLocationFound.classList.remove('found-location');
                noLocationFound.classList.add('no-location');
            }else {
                noLocationFound.innerText = `Weather in ${data.name}`;
            renderData(data);
            }
    });

}

const renderData = (data) =>{
    
        tempNum.innerText = Math.floor(data.main.temp + -273.15);
        tempDescription.innerText = data.weather[0].description;
        
        city.innerText = data.name
        country.innerText = data.sys.country;
        noLocationFound.classList.remove('no-location');
        noLocationFound.classList.add('found-location');

        
    
}

const getCurrentLocation = () =>{
        //Get the latitude and the longitude;
    const successFunction = (position)=> {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        grabUserLocation(lat,lng);
    }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction);
    } 

    
}

runForm();
getCurrentLocation();
grabUserLocation();