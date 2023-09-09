document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    // Display the current day of the week and UTC time
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDay;
    document.querySelector("[data-testid='currentUTCTime']").textContent = Date.now();
});
