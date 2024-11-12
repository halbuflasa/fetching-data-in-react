// src/components/WeatherSearch.jsx
import { useState } from 'react';

const WeatherSearch = (props) => {
  const [city, setCity] = useState(''); // Holds the city name entered by the user

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the page from reloading after the form is submitted
    props.fetchData(city); // Calls the fetchData function to get the weather
    setCity(''); // Clears the input field after submitting
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
