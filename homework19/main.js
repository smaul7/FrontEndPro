    const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const LAT = 44.34;
    const LON = 10.99;
    const API_KEY = '7c905d493ec87101c28acc4a62387bef';

    const output = document.getElementById('weather-output');
    const refreshBtn = document.getElementById('refresh-btn');

    async function fetchWeather() {
      output.textContent = 'Завантаження...';

      try {
        const response = await fetch(`${API_URL}?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=ua`);
        if (!response.ok) throw new Error('Помилка завантаження');

        const data = await response.json();

        const city = data.city.name;
        const country = data.city.country;

        const forecastItems = data.list.slice(0, 5).map(item => {
          const date = new Date(item.dt_txt).toLocaleString('uk-UA');
          const temp = item.main.temp.toFixed(1);
          const desc = item.weather[0].description;
          return `<div class="weather-item"><strong>${date}</strong><br>${temp}°C, ${desc}</div>`;
        }).join('');

        output.innerHTML = `<h3>${city}, ${country}</h3>${forecastItems}`;

      } catch (err) {
        output.textContent = 'Не вдалося завантажити погоду.';
        console.error(err);
      }
    }

    refreshBtn.addEventListener('click', fetchWeather);

    fetchWeather();