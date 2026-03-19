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
    switch(unit) {
        case 'ms': return Math.round(seconds * 1000);
        case 's': return Math.round(seconds);
        case 'min': return Math.floor(seconds / 60);
        case 'h': return Math.floor(seconds / 3600);
        case 'd': return (seconds / 86400).toFixed(2);
        case 'wk': return (seconds / 604800).toFixed(2);
        default: // hh:mm:ss
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = Math.floor(seconds % 60);
            return `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }
}

function convert(value, fromUnit, toUnit) {
    let seconds;

    if (typeof value === "string" && value.match(/\d/)) {
        seconds = parseTimeString(value);
    } else {
        seconds = parseFloat(value) * factors[fromUnit];
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