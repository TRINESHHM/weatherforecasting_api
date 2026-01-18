const apiKey = "c624885bcc3c6ab5ee1bd1edbe83fd29";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod != 200) {
                document.getElementById("weatherResult").innerHTML =
                    `<p>City not found ❌</p>`;
                return;
            }

            document.getElementById("weatherResult").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error(error);
            alert("Error fetching data");
        });
}
