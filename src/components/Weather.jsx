import React from 'react'
import './weather.css'
import { useState } from 'react'

function Weather() {

    const [form, setForm] = useState({
        city: '',
        country: ''
    })

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

    return (
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br />

            <form action=''>
                <input type='text' name='city' placeholder='city' />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type='text' name='country' placeholder='country' />
                <button className='getweather'>Submit</button>
            </form>

        </div>
    )
}

export default Weather