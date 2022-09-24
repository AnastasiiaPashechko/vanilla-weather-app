function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "be81f193e065bf5feb2d944c7336968b";
let apiUrl =
  " https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=be81f193e065bf5feb2d944c7336968b";

axios.get(apiUrl).then(displayTemperature);
