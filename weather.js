const apiKey = "b54be3f3368b9209ab3525a0075bf735";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404 || city.trim() === "") {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            
        }
        else {
            var data = await response.json();
        
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        console.log("Weather condition:", data.weather[0].main);

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "images/smoke.png";
        } else {
            // Default to clear for unhandled conditions
            weatherIcon.src = "images/clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
    }
            
        

    } 

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("input", () => {
    if (searchBox.value.trim() === "") {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";
    }
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
