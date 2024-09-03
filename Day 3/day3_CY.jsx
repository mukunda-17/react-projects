import React, { useState, useEffect } from "react";

const Weather = ({ initialLocation = "New York" }) => {
    const [location, setLocation] = useState(initialLocation);
    const [inputValue, setInputValue] = useState("");
    const [weather, setWeather] = useState(null);

    const apiKey = ""; // Temporarily hardcoded

    useEffect(() => {
        console.log("API Key:", apiKey); // Add this line to check the API key
    
        const fetchWeather = async () => {
            if (location && apiKey) {
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
                    );
                    const data = await response.json();
                    setWeather({
                        temperature: data.main.temp,
                        condition: data.weather[0].description,
                    });
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            }
        };
    
        fetchWeather();
    }, [location, apiKey]);
    

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(inputValue);
        setInputValue("");
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <form onSubmit={handleSubmit}
                style={{
                    backgroundColor: 'lavender',
                    padding: '50px 40px',
                    borderRadius: '10px',
                }}>
                <h1>Weather Application</h1>
                <div>
                    <input style={{ 
                        padding: '10px 20px', 
                        marginRight: '10px' 
                    }}
                        type="text" placeholder="Enter new location"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Update Location
                    </button>
                </div>
                {weather ? (
                    <>
                        <h2>Current Weather in {location}</h2>
                        <p>Temperature: {weather.temperature}°C</p>
                        <p>Condition: {weather.condition}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </form>
        </div>
    );
};

export default Weather;
