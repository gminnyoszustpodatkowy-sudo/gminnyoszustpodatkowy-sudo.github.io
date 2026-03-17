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
window.addEventListener("DOMContentLoaded", () => { timezoneConverter(); });