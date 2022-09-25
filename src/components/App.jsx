import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';

export default function App() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [inputValue, setInputValue] = useState("");
    var [Location, setLocation] = useState("");

    function getValue(event) {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    function getLocation() {
        if(inputValue === "") {
            alert("Enter a location!");
        }
        else {
            const newLocation = encodeURIComponent(inputValue.trim());
            setLocation(newLocation);
            setInputValue("");
        }
    }

    const [weather, setWeather] = useState({
        temperature: "",
        weatherDescription: "",
        iconURL: "",
        altText: "",
        location: "",
        feelsLike: ""
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        if(inputValue === "" && Location === "") {
            Location = "Delhi";
        }
        
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + Location + "&units=metric&appid=fc388d1fbee83420800b7942280eb40f").then(
            (response) => {
                setWeather({
                    weatherDescription: response.data.weather[0].main,
                    temperature: response.data.main.temp,
                    iconURL: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png",
                    altText: response.data.weather[0].description,
                    location: response.data.name,
                    feelsLike: response.data.main.feels_like
                });
                setError(null);
            }
        ).catch(setError);
    }, [Location]);

    if (error) return <p>An error occurred</p>

    return (
        <div>
            <Header />

            <div className='m-auto text-center'>
                <SearchBar
                    handleChange={getValue}
                    handleClick={getLocation}
                    inputTextValue={inputValue}
                />
            </div>

            <h1 className='
                text-left 
                mt-4 
                px-4 
                md:px-40
                lg:px-80
                text-[1.5rem]
                text-white'>{today.toLocaleDateString('en-IN', options)}.
            </h1>

            <div className='w-full px-4 md:px-40 lg:px-80'>
                <div className='mt-6 rounded-[4px] bg-white bg-opacity-[60%] lg:inline-block flex'>
                    <div className='ml-4 my-auto lg:mt-2'>
                        <h2 className='text-[1.2rem] lg:text-[1.4rem] text-[#222]'>{weather.location}</h2>
                    </div>

                    <WeatherInfo 
                        temp={weather.temperature}
                        description={weather.weatherDescription}
                        url={weather.iconURL}
                        altText={weather.altText}
                        feels_like={weather.feelsLike}
                    />
                </div>
            </div>
        </div>
    );
}