const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e4bbe45551mshe687b33ef74b804p111c44jsn54bb414fcd8b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
        })
        .catch(err => console.error(err));
} 

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})