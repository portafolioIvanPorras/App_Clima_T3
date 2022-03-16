let weather = {
  apiKey: '631804e07c716f88136d45ae594aa00d',
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=es`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.city').innerText = 'Clima en ' + name;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText =
      'Humedad: ' + humidity + '%';
    document.querySelector('.wind').innerText =
      'Velocidad de Viento: ' + speed + ' km/h';
    document.querySelector('.weather').classList.remove('loading');
  },
  search: function() {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
};

document.querySelector('.btn-search').addEventListener('click', function() {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Guatemala");