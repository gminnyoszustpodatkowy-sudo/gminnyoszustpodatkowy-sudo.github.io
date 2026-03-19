const units = new Map([
    ['msd', 'Milisekundy dziesiętne'], 
    ['ms', 'Milisekundy'], 
    ['sd', 'Sekundy dziesiętne'], 
    ['s', 'Sekundy'], 
    ['mind', 'Minuty dziesiętne'], 
    ['min', 'Minuty'], 
    ['hd', 'Godziny dziesiętne'], 
    ['h', 'Godziny'], 
    ['d', 'Dni'], 
    ['wk', 'Tygodnie']
]);
const selectOne = document.querySelector("#unit1");
const selectTwo = document.querySelector("#unit2");

units.forEach((text, value) => {
    const option1 = document.createElement("option");
    option1.value = value;
    option1.textContent = text;
    const option2 = document.createElement("option");
    option2.value = value;
    option2.textContent = text;
    selectOne.appendChild(option1);
    selectTwo.appendChild(option2);
});

function parseTimeString(str) {
    let totalSeconds = 0;
    const regex = /(\d+\.?\d*)\s*(msd|ms|sd|s|mind|min|hd|h|d|wk)/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
        const [_, value, unit] = match;
        totalSeconds += parseFloat(value) * factors[unit];
    }
    return totalSeconds;
}

const factors = {
    msd: 0.001,
    ms: 0.001,
    sd: 1,
    s: 1,
    mind: 60,
    min: 60,
    hd: 3600,
    h: 3600,
    d: 86400,
    wk: 604800
};

const decimalUnits = ["msd", "sd", "mind", "hd"];
const normalUnits = ["ms", "s", "min", "h", "d", "wk"];

function formatTime(seconds, unit) {
    if (unit === 'ms') return Math.round(seconds * 1000);
    if (unit === 's') return Math.round(seconds);

    if (unit === 'min') return (seconds / 60).toFixed(2);

    if (unit === 'h') {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${h}:${m.toString().padStart(2, '0')}`;
    }

    if (unit === 'd') return (seconds / 86400).toFixed(4);
    if (unit === 'wk') return (seconds / 604800).toFixed(4);

    return "";
}

function convert(value, fromUnit, toUnit) {
    let seconds;

    // jeśli wpis zawiera jednostki (np. "2h 30min")
    if (/[a-z]/i.test(value)) {
        seconds = parseTimeString(value);
    } else {
        const num = parseFloat(value.replace(",", "."));

        if (isNaN(num)) return "Błędna wartość";

        seconds = num * factors[fromUnit];
    }

    if (normalUnits.includes(toUnit)) {
        return formatTime(seconds, toUnit);
    } else if (decimalUnits.includes(toUnit)) {
        return (seconds / factors[toUnit]).toFixed(4);
    }

    return "";
}

document.querySelector('#count').addEventListener('click', () => {
    const inputValue = document.querySelector('#input1').value;
    const fromUnit = selectOne.value;
    const toUnit = selectTwo.value;
    document.querySelector('#input2').value = convert(inputValue, fromUnit, toUnit);
});