const API_KEY = "YOUR_API_KEY"; // OpenWeatherMapのAPIキーに置き換え

document.getElementById("searchBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return;

    await fetchWeather(city);
    await fetchForecast(city);
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("都市が見つかりません");

        const data = await response.json();
        document.getElementById("cityName").textContent = `${data.name} の天気`;
        document.getElementById("temperature").textContent = `気温: ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `湿度: ${data.main.humidity}%`;
        document.getElementById("weatherDescription").textContent = data.weather[0].description;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById("weatherInfo").classList.remove("hidden");
    } catch (error) {
        alert(error.message);
    }
}

async function fetchForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("週間予報の取得に失敗");

        const data = await response.json();
        const forecastDiv = document.getElementById("forecast");
        forecastDiv.innerHTML = "";

        for (let i = 0; i < data.list.length; i += 8) {
            const forecast = data.list[i];
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString("ja-JP", { weekday: "short" });
            const temp = `${forecast.main.temp}°C`;
            const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

            const forecastItem = document.createElement("div");
            forecastItem.classList.add("forecast-item");
            forecastItem.innerHTML = `
                <p>${day}</p>
                <img src="${icon}" alt="天気アイコン">
                <p>${temp}</p>
            `;
            forecastDiv.appendChild(forecastItem);
        }
    } catch (error) {
        console.error(error);
    }
}
