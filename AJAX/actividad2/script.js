// This file contains the JavaScript code that handles the AJAX request to fetch the weather data and processes it to display the required information in the HTML.

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const location = 'Madrid'; // Specify the location for the weather data

fetch(`https://api.aemet.es/weather/your_endpoint?apiKey=${apiKey}&location=${location}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process and display the weather data
        const maxTemp = data.temperature.max;
        const minTemp = data.temperature.min;
        const skyCondition = data.skyCondition;
        const windDirection = data.wind.direction;
        const windSpeed = data.wind.speed;
        const humidity = data.humidity;

        document.getElementById('max-temp').textContent = `Max Temperature: ${maxTemp}°C`;
        document.getElementById('min-temp').textContent = `Min Temperature: ${minTemp}°C`;
        document.getElementById('sky-condition').textContent = `Sky Condition: ${skyCondition}`;
        document.getElementById('wind-direction').textContent = `Wind Direction: ${windDirection}`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} km/h`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });