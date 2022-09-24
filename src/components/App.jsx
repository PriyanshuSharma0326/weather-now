import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import Videos from './Videos';
import News from './News';

export default function App() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [inputValue, setInputValue] = useState("");
    const [Location, setLocation] = useState("Delhi");

    function getValue(event) {
        const newValue = event.target.value;
        setInputValue(encodeURIComponent(newValue.trim()));
    }
    
    function getLocation() {
        if(inputValue === "") {
            alert("Enter a location!");
        }
        else {
            setLocation(inputValue);
            setInputValue("");
        }
    }

    const [weather, setWeather] = useState({
        temperature: "",
        weatherDescription: "",
        iconURL: "",
        altText: ""
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + Location + "&units=metric&appid=fc388d1fbee83420800b7942280eb40f").then(
            (response) => {
                setWeather({
                    weatherDescription: response.data.weather[0].main,
                    temperature: response.data.main.temp,
                    iconURL: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png",
                    altText: response.data.weather[0].description
                });
                setError(null);
            }
        ).catch(setError);
    }, [Location]);

    if (error) return <p>An error occurred</p>

    return (
        <div>
            <Header />

            <SearchBar
                textValue={inputValue}
                handleChange={getValue}
                handleClick={getLocation}
            />

            <div className='inline-block md:flex w-full'>
                <div className='w-full md:w-1/2 my-6 border-[2px] rounded-xl'>
                    <div className='ml-4 mt-4'>
                        <h1 className='text-[1.8rem]'>{today.toLocaleDateString('en-IN', options)}.</h1>
                        <h2 className='text-[1.3rem] text-[dimgray]'>{Location.replace("%20", " ")}</h2>
                    </div>

                    <WeatherInfo 
                        temp={weather.temperature}
                        description={weather.weatherDescription}
                        url={weather.iconURL}
                        altText={weather.altText}
                    />
                </div>

                <Videos />
            </div>
        </div>
    );
}