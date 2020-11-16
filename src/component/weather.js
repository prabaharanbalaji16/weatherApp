import React from "react";
import 'weather-icons/css/weather-icons.css';

const Weather =(props)=>{
    return(
        <div className="container">
            <div className="cards">
                {props.cityname?
                <h1>{props.cityname}</h1>:""}
                {console.log(props.cityname)}
                
                {props.weather_status==="Thunderstorm"?
                <h5 className="py-4">
                    <i className={`wi wi-day-thunderstorm display-1`}></i>
                </h5>:""}
                {props.weather_status==="Drizzle"?
                <h5 className="py-4">
                    <i className={`wi wi-day-sleet display-1`}></i>
                </h5>:""}
                {props.weather_status==="Rain"?
                <h5 className="py-4">
                    <i className={`wi wi-day-storm-showers display-1`}></i>
                </h5>:""}
                {props.weather_status==="Snow"?
                <h5 className="py-4">
                    <i className={`wi wi-day-snow display-1`}></i>
                </h5>:""}
                {props.weather_status==="Atmosphere"?
                <h5 className="py-4">
                    <i className={`wi wi-day-fog display-1`}></i>
                </h5>:""}
                {props.weather_status==="Clear"?
                <h5 className="py-4">
                    <i className={`wi wi-day-sunny display-1`}></i>
                </h5>:""}
                {props.weather_status==="Clouds"?
                <h5 className="py-4">
                    <i className={`wi wi-day-fog display-1`}></i>
                </h5>:""}

                {props.temp?
                <h3 className="py-4">
                {props.temp}&deg; C
                </h3>:""
                }
                
                {props.mini && props.maxi ?
                <h3>
                    <span  className="px-4">{props.mini}&deg; C</span>
                    <span className="px-4">{props.maxi}&deg; C</span>
                </h3>:""}
                {/* {minmaxTemp(props.min,props.max)} */}
                <h4 className="py-4">{props.desc}</h4>
            </div>
        </div>
    );
}

export default Weather;