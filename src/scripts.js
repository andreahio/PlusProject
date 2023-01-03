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
let hours = now.getHours();
let minutes = now.getMinutes();

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemperature(response) {
  let city = document.querySelector("#enter-city").value;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `Currently ${temperature} °C `;
}
function searchCity(city) {
  let apiKey = "ea600dd4b1532851054fb72f18bd3426";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function searchPlace(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".enter-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  searchCity(searchInput.value);
}
let form = document.querySelector("#change-city");
form.addEventListener("submit", searchPlace);

function showResponse(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${temperature} °C ${response.data.name}`;
}
function showPosition(event) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ea600dd4b1532851054fb72f18bd3426";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showResponse);
}
navigator.geolocation.getCurrentPosition(showPosition);
let button = document.querySelector("#current-loc");
button.addEventListener("click", showPosition);