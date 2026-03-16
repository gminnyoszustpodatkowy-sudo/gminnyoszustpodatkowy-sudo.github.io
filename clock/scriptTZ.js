const timePicker = flatpickr("#timeInput", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    altInput: false,
    allowInput: true,
    defaultDate: new Date()
});

const datePicker = flatpickr("#dateInput", {
    dateFormat: "d.m.Y",
    altInput: false,
    allowInput: true,
    defaultDate: new Date()
});

function localToSelected() {
    const timeInput = document.getElementById("timeInput").value;
    const dateInput = document.getElementById("dateInput").value;
    const timezone = document.getElementById("timezone").value;
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!timeInput || !dateInput) return;

    const [hours, minutes] = timeInput.split(":").map(Number);
    const [day, month, year] = dateInput.split(".").map(Number);
    const date = new Date(year, month - 1, day, hours, minutes);

    const formattedDate = new Intl.DateTimeFormat("pl-PL", {
        timeZone: timezone,
        dateStyle: "full"
    }).format(date);

    const formattedHour = new Intl.DateTimeFormat("pl-PL", {
        timeZone: timezone,
        timeStyle: "short"
    }).format(date);

    const formattedDateNow = new Intl.DateTimeFormat("pl-PL", {
        timeZone: localTimezone,
        dateStyle: "full"
    }).format(date);

    const formattedHourNow = new Intl.DateTimeFormat("pl-PL", {
        timeZone: localTimezone,
        timeStyle: "short"
    }).format(date);

    document.querySelector("#localTimeText").innerHTML = `Czas lokalny:`;
    document.querySelector("#selectedTimeText").innerHTML = `Wybrana strefa czasowa:`;
    document.querySelector("#resultHour").innerHTML = formattedHour;
    document.querySelector("#resultDate").innerHTML = formattedDate;
    document.querySelector("#resultHourNow").innerHTML = formattedHourNow;
    document.querySelector("#resultDateNow").innerHTML = formattedDateNow;
    // document.querySelector("footer").innerHTML = `${localTimezone}, ${timezone}`;
}


function selectedToLocal() {
    const timeInput = document.getElementById("timeInput").value;
    const dateInput = document.getElementById("dateInput").value;
    const timezone = document.getElementById("timezone").value;
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!timeInput || !dateInput) return;

    const [hours, minutes] = timeInput.split(":").map(Number);
    const [day, month, year] = dateInput.split(".").map(Number);
    const date = new Date(year, month - 1, day, hours, minutes);

    const formattedDate = new Intl.DateTimeFormat("pl-PL", {
        timeZone: localTimezone,
        dateStyle: "full"
    }).format(date);

    const formattedHour = new Intl.DateTimeFormat("pl-PL", {
        timeZone: localTimezone,
        timeStyle: "short"
    }).format(date);

    const formattedDateNow = new Intl.DateTimeFormat("pl-PL", {
        timeZone: timezone,
        dateStyle: "full"
    }).format(date);

    const formattedHourNow = new Intl.DateTimeFormat("pl-PL", {
        timeZone: timezone,
        timeStyle: "short"
    }).format(date);

    document.querySelector("#localTimeText").innerHTML = `Wybrana strefa czasowa:`;
    document.querySelector("#selectedTimeText").innerHTML = `Czas lokalny:`;
    document.querySelector("#resultHour").innerHTML = formattedHour;
    document.querySelector("#resultDate").innerHTML = formattedDate;
    document.querySelector("#resultHourNow").innerHTML = formattedHourNow;
    document.querySelector("#resultDateNow").innerHTML = formattedDateNow;
    // document.querySelector("footer").innerHTML = `${localTimezone}, ${timezone}`;
}

window.addEventListener("DOMContentLoaded", () => {
    localToSelected();
});