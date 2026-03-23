const api_key = "a9a4c4a33b8f9fde847001f163b57fe4";

function degToDirection(deg) {
    const directions = ["Wieje z północy (N)", "Wieje z północnego wschodu (NE)", "Wieje ze wschodu (E)", "Wieje ze południowego wschodu (SE)", "Wieje z południa (S)", "Wieje z południowego zachodu (SW)", "Wieje z zachodu (W)", "Wieje z północnego zachodu (NW)"];
    const normalized = deg % 360;
    const index = Math.round(normalized / 45) % 8;
    return directions[index];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


async function getWeather() {
    let city = document.querySelector('#city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric&lang=pl`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod != 200) {
            document.querySelector('main').innerHTML = `Nie znaleziono miasta`;
            return;
        }
        const temp = `${Math.round(Number(data.main.temp))} °C`;
        const temp_feel = `Odczuwalna: ${Math.round(Number(data.main.feels_like))} °C`;
        const min_temp = `${Math.round(Number(data.main.temp_min))} °C`;
        const max_temp = `${Math.round(Number(data.main.temp_max))} °C`;
        let aside = `↑ ${max_temp}/↓ ${min_temp}`;
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
            aside = `↑↓ ${max_temp}`;
        }
        if (visibility = 10) {
            visibility = `Nieograniczona`;
        }
        document.querySelector('main').innerHTML = `<section id='weatherCityName'>
        ${city}, ${country}
        </section>
        <section id='weatherTemperature'>
        <temperature>
        ${temp} 
        </temperature>
        <feel>
        ${temp_feel}
        </feel>
        <aside>
        ${aside}
        </aside>
        </section>
        <section id='weatherName'>
        ${desc}
        </section>
        <section id='weatherPressure'>
        ${pressure}
        </section>
        <section id='weatherHumidity'>
        ${humidity}
        </section>
        <section id='weatherWind>
        <section id='weatherWindSpeed'>
        ${wind_speed}
        </section>
        <section id='weatherWindDirection'>
        ${wind_direction}
        </section>
        </section>
        <section id='weatherVisibility'>
        ${visibility}
        </section>
        <section id='weatherRadar'>
        <a href='https://openweathermap.org/weathermap'>Radar <sup>↗</sup></a>
        </section>
        <section id='weatherFullGetTime'>${full_time}</section><img src='icons/${icon}.png'>`;
    }
    catch (error) {
        document.querySelector('main').innerHTML = `Błąd pobierania danych`;
    }
}

getWeather();