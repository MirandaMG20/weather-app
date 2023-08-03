import React from 'react'
import './displayWeather.css'


function DisplayWeather({ data }) {
    // console.log(data)

    const iconurl =
        "http://openweathermap.org/img/wn/" +
        `${data.cod !== 404 ? data.weather[0].icon : null}` +
        ".png";

    return (
        <div className='displayweather'>
            <div className='maincard'>
                <span className='cardtitle'>
                    {data.name}, {data.sys.country}, Weather
                </span>
                <span className='cardsubtitle'>
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>
                    {Math.floor((data.main.temp_max - 273.15) * 1.8) + 32}<sup>o</sup>/
                    {Math.floor((data.main.temp_min - 273.15) * 1.8) + 32}<sup>o</sup>
                </h1>
                <span className="weather-main">{data.weather[0].main}</span>
                <img src={iconurl} className='weather-icon' alt='' />
                <span className="weather-description">
                    {data.weather[0].description}
                </span>
            </div>

            <div className="weatherdetails">
                <div className="section1">
                    <table>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                <span>
                                    {Math.floor((data.main.temp_max - 273.15) * 1.8) + 32}<sup>o</sup>/ {" "}
                                    {Math.floor((data.main.temp_min - 273.15) * 1.8) + 32}<sup>o</sup> F
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Humidity</h4>
                            </td>
                            <td>
                                <span>{data.main.humidity} % </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Pressure</h4>
                            </td>
                            <td>
                                <span>{data.main.pressure} hPa </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Visibility</h4>
                            </td>
                            <td>
                                <span>{data.visibility / 1000} Km </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather