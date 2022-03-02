
const API_KEY = `21759ca175b23c7d2a4ce1207f2f93ab`;

const searchTemperature = () =>{
    //console.log('hoice');

    const cityName = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(Response => Response.json())
    .then(data => displayTemperature(data))
};

    const setInnerText = (id, Text) => {
        document.getElementById(id).innerText = Text ;
    }

const displayTemperature = (temperature) =>{
   
    console.log(temperature);
    setInnerText ('city', temperature.name );
    setInnerText ('temperature', temperature.main.temp );
    setInnerText ('condition', temperature.weather[0].main );

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}
