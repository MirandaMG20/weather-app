import React from 'react'
import './weather.css'
import { useState } from 'react'


function Weather() {

    const [form, setForm] = useState({
        city: '',
        country: ''
    })

    const [weather, setWeather] = useState([])

    const APIKEY = '60494e187a0dce359ddb7c25f0ba90c3';

    //Fetching Weather Data
    // OR this function const weatherData = async() => { }
    async function weatherData(e) {
        e.preventDefault();

        // checking if the input has a value
        if (form.city == '') {
            alert('Add Values')
        } else {
            // making the api call 
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
            const res = await data.json()
            // console.log(res)
            setWeather(res)
        }
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name == 'city') {
            setForm({
                ...form,
                city: value
            })
        }
        if (name == 'country') {
            setForm({
                ...form,
                country: value
            })
        }
    }

    // console.log(form.city, form.country)

    return (
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br />

            <form action=''>
                <input
                    type='text'
                    name='city'
                    placeholder='city'
                    onChange={handleChange}
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                    type='text'
                    name='country'
                    placeholder='country'
                    onChange={handleChange}
                />

                <button
                    className='getweather'
                    onClick={weatherData}>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Weather