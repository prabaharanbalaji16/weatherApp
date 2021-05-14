import React,{useState,useEffect} from 'react';
import "./App.css";
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/weather';
import Form from './component/form';


// const api_key="5e5eee674941d08b66595b94886cc908";
const api_key="B_3qztsnkmWQZFCItyOiTgjGwuR3vDvDniHUoo277IQ"

//api call api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
class App extends React.Component{
constructor() {
  super();
  this.state={
    city:undefined,
    temp:null,
    min:null,
    max:null,
    weather:undefined,
    description:""
  };
}

    getWeather=async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
      const api_call = await fetch(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
        `https://trefle.io/api/v1/plants?token=${api_key}`
        );
      const response = await api_call.json();
      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        weather: response.weather[0].main,
        cel: response.main.temp,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].description,
      });

            console.log(response);
            console.log(this.state.temp_max);
    }

  render(){
  return(
    <div className="App">
      <Form handler={this.getWeather} />

      <Weather
       cityname={this.state.city}
       temp={this.state.cel}
       mini={this.state.temp_min}
       maxi={this.state.temp_max}
       weather_status={this.state.weather}
       desc={this.state.description} />
    </div>
  );
}
}
export default App;

