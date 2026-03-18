const { DateTime } = luxon;
const timePickerOne = flatpickr("#timeInputOne", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    altInput: false,
    allowInput: true,
    enableSeconds: false,
    disableMobile: true,
    defaultDate: new Date()
});
const timePickerTwo = flatpickr("#timeInputTwo", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    altInput: false,
    allowInput: true,
    disableMobile: true,
    enableSeconds: false,
});
const datePickerOne = flatpickr("#dateInputOne", {
    dateFormat: "d.m.Y",
    altInput: false,
    allowInput: true,
    disableMobile: true,
    defaultDate: new Date()
});
const datePickerTwo = flatpickr("#dateInputTwo", {
    dateFormat: "d.m.Y",
    altInput: false,
    disableMobile: true,
    allowInput: true,
});
function timezoneConverter() {
    const timeInputOne = document.getElementById("timeInputOne").value;
    const dateInputOne = document.getElementById("dateInputOne").value;
    const timeInputTwo = document.getElementById("timeInputTwo").value;
    const dateInputTwo = document.getElementById("dateInputTwo").value;
    const timezoneOne = document.getElementById("select-timezones-1").value;
    const timezoneTwo = document.getElementById("select-timezones-2").value;
    if (!timeInputOne || !dateInputOne) return;
    if (!timezoneOne || !timezoneTwo) return;
    const datetime = DateTime.fromFormat(
        `${dateInputOne} ${timeInputOne}`,
        "dd.MM.yyyy HH:mm",
        { zone: timezoneOne }
    );
    const convertedDatetime = datetime.setZone(timezoneTwo);
    datePickerTwo.setDate(convertedDatetime.toJSDate());
    timePickerTwo.setDate(convertedDatetime.toJSDate());
    document.querySelector("#dateInputTwo").value = convertedDatetime.toFormat("dd.MM.yyyy");
    document.querySelector("#timeInputTwo").value = convertedDatetime.toFormat("HH:mm");
}
document.querySelector('#count').addEventListener('click', timezoneConverter);
const selectTimezonesOne = document.querySelector("#select-timezones-1");
const selectTimezonesTwo = document.querySelector("#select-timezones-2");
const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const opt_countriesOne = document.createElement("option");
const opt_countriesTwo = document.createElement("option");
opt_countriesOne.textContent = 'Kraje';
opt_countriesTwo.textContent = 'Kraje';
opt_countriesOne.disabled = true;
opt_countriesTwo.disabled = true;
selectTimezonesOne.appendChild(opt_countriesOne);
selectTimezonesTwo.appendChild(opt_countriesTwo);
countries.forEach((text, value) => {
    const option1 = document.createElement("option");
    option1.value = value;
    option1.textContent = text;
    const option2 = document.createElement("option");
    option2.value = value;
    option2.textContent = text;
    if (value === localTimezone) option1.selected = true;
    selectTimezonesOne.appendChild(option1);
    selectTimezonesTwo.appendChild(option2);
});


const opt_timezonesOne = document.createElement("option");
const opt_timezonesTwo = document.createElement("option");
opt_timezonesOne.textContent = 'Czasy';
opt_timezonesTwo.textContent = 'Czasy';
opt_timezonesOne.disabled = true;
opt_timezonesTwo.disabled = true;
selectTimezonesOne.appendChild(opt_timezonesOne);
selectTimezonesTwo.appendChild(opt_timezonesTwo);
timezones.forEach((text, value) => {
    const option1 = document.createElement("option");
    option1.value = value;
    option1.textContent = text;

    const option2 = document.createElement("option");
    option2.value = value;
    option2.textContent = text;

    if (value === localTimezone) option1.selected = true;
    if (value === 'Etc/UTC') option2.selected = true;

    selectTimezonesOne.appendChild(option1);
    selectTimezonesTwo.appendChild(option2);
});
const opt_zonesOne = document.createElement("option");
const opt_zonesTwo = document.createElement("option");
opt_zonesOne.textContent = 'Strefy czasowe';
opt_zonesTwo.textContent = 'Strefy czasowe';
opt_zonesOne.disabled = true;
opt_zonesTwo.disabled = true;
selectTimezonesOne.appendChild(opt_zonesOne);
selectTimezonesTwo.appendChild(opt_zonesTwo);
zones.forEach((text, value) => {
    const option1 = document.createElement("option");
    option1.value = value;
    option1.textContent = text;

    const option2 = document.createElement("option");
    option2.value = value;
    option2.textContent = text;

    if (value === localTimezone) option1.selected = true;

    selectTimezonesOne.appendChild(option1);
    selectTimezonesTwo.appendChild(option2);
});
let prevOne = selectTimezonesOne.value;
let prevTwo = selectTimezonesTwo.value;
selectTimezonesOne.addEventListener("change", () => {
    if (selectTimezonesOne.value === selectTimezonesTwo.value) {
        const temp = prevOne;
        selectTimezonesOne.value = selectTimezonesTwo.value;
        selectTimezonesTwo.value = temp;
    }
    prevOne = selectTimezonesOne.value;
});

selectTimezonesTwo.addEventListener("change", () => {
    if (selectTimezonesOne.value === selectTimezonesTwo.value) {
        const temp = prevTwo;
        selectTimezonesTwo.value = selectTimezonesOne.value;
        selectTimezonesOne.value = temp;
    }
    prevTwo = selectTimezonesTwo.value;
});
function filterSelect(input, select) {
    const filter = input.value.toLowerCase();

    Array.from(select.options).forEach(option => {
        const text = option.textContent.toLowerCase();

        if (text.includes(filter) || option.value.toLowerCase().includes(filter)) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    });
}
const search1 = document.querySelector("#search-1");
const search2 = document.querySelector("#search-2");

search1.addEventListener("input", () => {
    filterSelect(search1, selectTimezonesOne);
});

search2.addEventListener("input", () => {
    filterSelect(search2, selectTimezonesTwo);
});
window.addEventListener("DOMContentLoaded", () => { timezoneConverter(); });