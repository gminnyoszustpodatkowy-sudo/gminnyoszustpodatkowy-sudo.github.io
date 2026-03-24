function mapIcon(main) {
    const icons = {
        Clear: "clear",
        Cloud: "cloud",
        Rain: "rain",
        Thunderstorm: "thunderstorm",
        Drizzle: "drizzle",
        Snow: "snow",
        Mist: "mist",
    };
    return icons[main] || "unknown";
}
function getUniqueDays(data) {
    const days = new Set();
    data.list.forEach(item => {
        const date = item.dt_txt.split(" ")[0];
        days.add(date);
    })
    return [...days];
}

function getDayNightForecast(data, date) {
    const dayHours = ["09:00:00", "12:00:00", "15:00:00", "18:00:00"];
    const nightHours = ["00:00:00", "03:00:00", "06:00:00", "21:00:00"];

    const dayData = [];
    const nightData = [];

    data.list.forEach(item => {
        if (!item.dt_txt.startsWith(date)) return;

        if (dayHours.some(h => item.dt_txt.includes(h))) {
            dayData.push(item);
        }

        if (nightHours.some(h => item.dt_txt.includes(h))) {
            nightData.push(item);
        }
    });

    const getMaxTemp = arr =>
        arr.length ? Math.max(...arr.map(i => i.main.temp)) : null;

    const getIcon = arr => {
        if (!arr.length) return "unknown";

        const counts = {};

        arr.forEach(i => {
            const main = i.weather[0].main;
            counts[main] = (counts[main] || 0) + 1;
        });

        const mostCommon = Object.keys(counts).reduce((a, b) =>
            counts[a] > counts[b] ? a : b
        );

        return mapIcon(mostCommon);
    };

    return {
        day: {
            temp: getMaxTemp(dayData),
            icon: getIcon(dayData)
        },
        night: {
            temp: getMaxTemp(nightData),
            icon: getIcon(nightData)
        }
    };
}

function degToDirection(deg) {
    const directions = ["Wieje z północy (N)", "Wieje z północnego wschodu (NE)", "Wieje ze wschodu (E)", "Wieje ze południowego wschodu (SE)", "Wieje z południa (S)", "Wieje z południowego zachodu (SW)", "Wieje z zachodu (W)", "Wieje z północnego zachodu (NW)"];
    const normalized = deg % 360;
    const index = Math.round(normalized / 45) % 8;
    return directions[index];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const key = "a9a4c4a33b8f9fde847001f163b57fe4";

async function getWeather() {
    let city = document.querySelector('#city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric&lang=pl`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod != 200) {
            document.querySelector('main').innerHTML = `Nie znaleziono miasta`;
            return;
        }
        const temp = `${Math.round(Number(data.main.temp))}°`;
        const temp_feel = `Odczuwalna: ${Math.round(Number(data.main.feels_like))}°`;
        const min_temp = `${Math.round(Number(data.main.temp_min))}°`;
        const max_temp = `${Math.round(Number(data.main.temp_max))}°`;
        let minmax = `↑ ${max_temp}/↓ ${min_temp}`;
        const pressure = `${data.main.pressure} hPa`;
        const humidity = `${data.main.humidity}%`;
        const mainweather = data.weather[0].main;
        const desc = capitalize(data.weather[0].description);
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const country = data.sys.country;
        const wind_speed = `${((data.wind.speed).toString()).replace('.', ',')} km/h`;
        let wind_direction = degToDirection(data.wind.deg);
        const icon = data.weather[0].icon;
        const get_time = new Date(data.dt * 1000);
        let full_time = `${new Intl.DateTimeFormat('pl-PL', {
            timeStyle: 'long',
            dateStyle: 'full'
        }).format(get_time)}`;
        let visibility = (data.visibility) / 1000;
        let city = data.name;

        if (min_temp == max_temp) {
            minmax = `↑↓ ${max_temp}`;
        }
        if (visibility == 10) {
            visibility = `Nieograniczona`;
        }
        document.querySelector('main').innerHTML = `<section id='weatherInfo'><section id='weatherCityName'>
        ${city}, ${country}
        </section>
        <section id='weatherTemperatureNow'>
        ${temp}
        </section>
        <section id='weatherName'>
        ${desc}
        </section><section id='weatherTemperatureNowFeelsLike'> 
        ${temp_feel}
        </section><section id='weatherTemperatureMinMax'>
        ${minmax}
        </section>
        <section id='weatherForecast'></section>
        </section>
        <section id='weather'>
        <section id='weatherPressure' class='weatherCaffle'><span>Ciśnienie</span><br><h1>
        ${pressure}</h1>
        </section>
        <section id='weatherHumidity' class='weatherCaffle'><span>Wilgotność</span><br><h1>
        ${humidity}</h1>
        </section>
        <section id='weatherWind'  class='weatherCaffle'><span>Wiatr</span>
        <section id='weatherWindSpeed'><h1>
        ${wind_speed}</h1>
        </section>
        <section id='weatherWindDirection'><h1>
        ${wind_direction}</h1>
        </section>
        </section>
        <section id='weatherVisibility' class='weatherCaffle'><span>Widoczność</span><br><h1>
        ${visibility}</h1>
        </section> </section>
        <section id='weatherRadar'>
        <a href='https://openweathermap.org/weathermap'>Radar <sup>↗</sup></a>
        </section>
        <section id='weatherFullGetTime'>${full_time}</section>`;
    }
    catch (error) {
        document.querySelector('main').innerHTML = `Błąd pobierania danych`;
    }
}

async function getForecast() {
    let city = document.querySelector('#city').value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${key}&units=metric&lang=pl`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod !== "200") {
            document.querySelector('#weatherForecast').innerHTML = "Błąd miasta";
            return;
        }

        const days = getUniqueDays(data);

        const forecast = days.map(day => ({
            date: day,
            ...getDayNightForecast(data, day)
        }));

        const result = document.querySelector('#weatherForecast');
        result.innerHTML = "";

        forecast.slice(0, 5).forEach(item => {
            result.innerHTML += `
                <div id="day">
                    <span>${item.date}</span>
                    <span><img src='icons/${item.day.icon}.png'></span>
                    <span>
                        ${item.day.temp ? Math.round(item.day.temp) + "°" : "--"} /
${item.night.temp ? Math.round(item.night.temp) + "°" : "--"}
                    </span>
                </div>
            `;
        });

    } catch (e) {
        document.querySelector('#weatherForecast').innerHTML = "Błąd pobierania";
    }
}

async function handleSearch() {
    await getWeather();
    await getForecast();
}

handleSearch();

document.querySelector('#btn').addEventListener('click', handleSearch);