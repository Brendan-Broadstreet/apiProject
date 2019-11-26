
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=new+york';
// const key = 'appid=524100a9f5f3b3de0c2e661e960e6f49'
var city = "Seattle";

//           Indianapolis
//           Noblesville
//           Fishers
//           Seattle






$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=524100a9f5f3b3de0c2e661e960e6f49", 
function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp) + "°";
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".yourCity").append(city);
    $(".temp").append(temp);

}
);