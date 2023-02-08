let p = document.querySelector("p.sunny");
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let date = [now.getDate()];
let hours = [now.getHours()];
let minutes = [now.getMinutes()];

p.innerHTML = `${day}, ${date}, ${hours}:${minutes}`;

// API WEATHER
function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city");
  let cityIn = document.querySelector("#city-input");
  cityName.innerHTML = cityIn.value;
  let apiKey = "2da40a2dd6ecb600a6befee8dc71a523";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityIn.value}`;

  axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showTemperature);
}
let searchSubmit = document.querySelector("#search-form");
searchSubmit.addEventListener("submit", searchCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay = document.querySelector("#temp");
  temperatureDisplay.innerHTML = `${temperature}`;
}
