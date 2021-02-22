// current time & date (search engine city)

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

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

let h3 = document.querySelector("h3");
h3.innerHTML = `${day} ${hours}:${minutes}`;


function displayTemp(response) {
  let iconElement = document.querySelector("#icon");
  fahrenheitTemperature = response.data.main.temp; 
   

  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(fahrenheitTemperature);
  document.querySelector("#city-condition").innerHTML = response.data.weather[0].main; 
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
  }

function search(event) {
  event.preventDefault();
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiKey = "6878b5f626b7c98659b0400085d3bba8";
  let city = document.querySelector("#search-city").value;
  let units = "imperial";
  let apiUrl = `${apiEndpoint}${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemp);
 

}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");

  // celsiusLink.classList.add("active");
  // fahrenheitLink.classList.remove("active");
  let celsiusTemperature = (fahrenheitTemperature-32) / 1.8; 
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  // fahrenheit.classList.add("active");
  // celsius.classList.remove("active");
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);



let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);