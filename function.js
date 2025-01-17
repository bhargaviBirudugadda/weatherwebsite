let weather = {
    apiKey:"5327256dfb5f38486ea9dd8070c707ed",
    fetchWeather:function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather   (data));
        
    },
    displayWeather:function(data)
    {
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+
 name ;   
       document.querySelector(".icon").src="https://openweathermap.org/img/wn/" +icon +".png";

       document.querySelector(".temp").innerText=temp+"°C";
       document.querySelector(".description").innerText=description;
       document.querySelector(".Humidity").innerText="Humidity: "+humidity+"%";
       document.querySelector(".wind").innerText="Wind speed:  "+speed+" km/h"; 


    },
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },

};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
weather.fetchWeather("Korea");
