let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "sanfrancisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};


let city = prompt("Where are you, or where do you want to go?");
         city=city.toLowerCase();
         city=city.replace("sanfrancisco", "san francisco");
         console.log(Math.round(weather.paris.temp));


function cityStuff() {
        if (city==="paris") {
           alert(`It is now ${Math.round(weather.paris.temp)} degrees with a humidity of ${weather.paris.humidity} in Paris! `);
         } else
         if (city==="lisbon") {
          alert(`It is now ${Math.round(weather.lisbon.temp)} degrees with a humidity of ${weather.lisbon.humidity} in Lisbon!`);
         } else
         if (city==="tokyo") {
        alert(`It is now ${Math.round(weather.tokyo.temp)} degrees with a humidity of ${Math.round(weather.tokyo.temp)} in Tokyo!`);
         } else
         if (city==="san francisco") {
        alert(`It is now ${Math.round(weather.sanfrancisco.temp)} degrees with a humidity of ${weather.sanfrancisco.humidity} in San Francisco!`);
         } else
         if (city==="moscow") {
        alert(`It is now ${Math.round(weather.moscow.temp)} degrees with a humidity of ${weather.moscow.humidity} in Moscow!`);
         } else {
        alert("I don't know that city friend. Try searching www.google.com");}
      }
      cityStuff();