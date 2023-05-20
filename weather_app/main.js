const api = {
    key: "a581074c2abadc9a0e5aabd90034339d",
    base : "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt){
 if(evt.keyCode == 13){
     getResults(searchbox.value);
    //  console.log(searchbox.value);
 }
}

function getResults(query)
{
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
//    console.log(weather) ;
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span><sup>o</sup>c</span>`;
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
    console.log(weather_el);

    let hilow = document.querySelector('.current .hi-low');
    hilow.innerText = `${weather.main.temp_min}oc / ${weather.main.temp_max}oc`;
}

// to show date
function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let newdate = new Date();
    let day = days[d.getDay()];
    console.log(day);
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}