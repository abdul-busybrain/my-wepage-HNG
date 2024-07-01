// const container = document.querySelector(".container");
// container.addEventListener("click", function (event) {
//   const data = event.target.dataset.testid;
//   console.log(data);
// });

const utcTime = document.querySelector(".utc-time");

utcTime.textContent = new Date(Date.UTC(2024, 8, 2, 7, 5, 4, 3));

const today = new Date("2024-07-01");
const day = today.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const utcDay = document.querySelector(".utc-day");
utcDay.textContent = dayNames[day];
