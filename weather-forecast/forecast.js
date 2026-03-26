const { DateTime } = luxon;
let randomCities = ['Londyn', 'Warszawa', 'Nowy Jork', 'Halifax', 'Tokio', 'Sydney', 'Los Angeles', 'Vancouver', 'Sao Paulo', 'Madryt', 'Kapsztad', 'Trypolis', 'Ateny', 'Honolulu', 'Kolonia, FM'];
document.querySelector('#city').value = randomCities[Math.floor(Math.random() * 14)];
function mapIcon(main) {
    const icons = {
        Clear: "clear",
        Cloud: "clouds",
        Rain: "rain",
        Thunderstorm: "thunderstorm",
        Drizzle: "drizzle",
        Snow: "snow",
        Mist: "mist",
        Fog: "mist",
        Haze: "mist",
        Smoke: "mist",
        Dust: "mist",
        Sand: "mist",
        Ash: "mist",
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
    const dayData = [];
    const nightData = [];

    data.list.forEach(item => {
        if (!item.dt_txt.startsWith(date)) return;

        const hour = parseInt(item.dt_txt.split(" ")[1].split(":")[0]);

        if (hour >= 6 && hour < 18) {
            dayData.push(item);
        } else {
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
    console.log("DAY:", dayData.length, "NIGHT:", nightData.length);
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

async function fetchWeatherData(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pl`);
    let data = await res.json();

    if (data.cod == 200) return { data };

    let geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}&units=metric&lang=pl`);
    let geo = await geoRes.json();

    if (!geo.length) return null;

    const { lat, lon, name, country } = geo[0];

    res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=pl`);
    data = await res.json();

    if (data.cod != 200) return null;

    return { data, lat, lon, name, country, local_names: geo[0].local_names };
}
function getLocalizedName(localNames, fallback) {
    if (!localNames) return fallback;

    return localNames.pl || localNames.en || fallback;
}

async function getWeather() {
    const cityInput = document.querySelector('#city').value;

    try {
        const result = await fetchWeatherData(cityInput);

        if (!result) {
            document.querySelector('main').innerHTML = "Nie znaleziono miasta";
            return;
        }

        const { data } = result;

        const temp = `${Math.round(Number(data.main.temp))}°`;
        const temp_feel = `Odczuwalna: ${Math.round(Number(data.main.feels_like))}°`;
        const min_temp = `${Math.round(Number(data.main.temp_min))}°`;
        const max_temp = `${Math.round(Number(data.main.temp_max))}°`;
        let minmax = `↑ ${max_temp}/↓ ${min_temp}`;
        const pressure = `${data.main.pressure} hPa`;
        const humidity = `${data.main.humidity}%`;
        const desc = capitalize(data.weather[0].description);
        let city = data.name;
        let country = data.sys.country;
        if (result) {
            city = getLocalizedName(result.local_names, result.name) || city;
        }
        const wind_speed = `${((data.wind.speed).toString()).replace('.', ',')} km/h`;
        let wind_direction = degToDirection(data.wind.deg);
        const icon = data.weather[0].icon;
        const get_time = new Date(data.dt * 1000);
        let full_time = `${new Intl.DateTimeFormat('pl-PL', {
            timeStyle: 'long',
            dateStyle: 'full'
        }).format(get_time)}`;
        let visibility = Math.round((data.visibility) / 1000);
        const sunrise_time = DateTime.fromSeconds(data.sys.sunrise, { zone: "utc" }).plus({ seconds: data.timezone }).toFormat("HH:mm");
        const sunset_time = DateTime.fromSeconds(data.sys.sunset, { zone: "utc" }).plus({ seconds: data.timezone }).toFormat("HH:mm");

        if (min_temp == max_temp) {
            minmax = `↑↓ ${max_temp}`;
        }
        if (visibility == 10) {
            visibility = `Nieograniczona`;
        }
        else {
            visibility = `${visibility} km`;
        }
        document.querySelector('main').innerHTML = `<section id='weather'><section id='weatherInfo'><section id='weatherCityName'>
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
        <section id='weatherInfo2'>
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
        </section>
        </section>
        <section id='weatherSunRiseSet'>
        <div id='weatherSRSInfo'>
        <span>Wschód i zachód słońca</span></div>
        <div id='weatherSRS'>
        <div id='weatherSRSLeft'>
        <img src='icons/sunrise.png'>
        <p>${sunrise_time}</p>
        </div>
        <div id='weatherSRSRight'>
        <img src='icons/sunset.png'>
        <p>${sunset_time}</p>
        </div></div>
        </section>
        <section id='weatherRadar'>
        <a href='https://openweathermap.org/weathermap'>Radar <sup>↗</sup></a>
        </section>
        <section id='weatherFullGetTime'>${full_time}</section></section>`;

    } catch {
        document.querySelector('main').innerHTML = "Błąd pobierania danych";
    }
}
async function getForecast() {
    const city = document.querySelector('#city').value;

    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pl`);
        let data = await res.json();

        if (data.cod !== "200") {
            const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
            const geo = await geoRes.json();

            if (!geo.length) return;

            const { lat, lon } = geo[0];

            res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=pl`);
            data = await res.json();
        }

        const days = getUniqueDays(data);
        const result = document.querySelector('#weatherForecast');
        result.innerHTML = "";
        days.slice(0, 5).forEach(day => {
            const f = getDayNightForecast(data, day);
            result.innerHTML += `
        <div id="day">
            <span>${day}</span>
            <span><img src='icons/${f.day.icon}.png'></span>
            <span>
                ${Math.round(f.day.temp) !== "--" ? Math.round(f.day.temp) + "°" : "--"} 
                / 
                ${Math.round(f.night.temp) !== "--" ? Math.round(f.night.temp) + "°" : "--"}
            </span>
        </div>
    `;
        });

    } catch {
        document.querySelector('#weatherForecast').innerHTML = "Błąd prognozy";
    }
}
async function handleSearch() {
    await getWeather();
    await getForecast();
}
handleSearch();
document.querySelector('#btn').addEventListener('click', handleSearch);
document.querySelector('#city').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
});