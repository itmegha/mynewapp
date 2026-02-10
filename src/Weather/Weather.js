import { useState } from "react";

function Weather(){

  const [location, setCity] = useState("");
  const [weather, setWeather] = useState(null); // Optional: store the fetched data
  const [error, setError] = useState("");

  const apiKey = 'YD5F23XRXC86QLASQ8KRGKYWA';

  const fetchData = () => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        console.log("Weather Data:", data);
        setWeather(data);
        setError("");
      })
      .catch((errorResponse) => {
        if (errorResponse.text) {
          errorResponse.text().then((errorMessage) => {
            setError(errorMessage);
            console.error("Error Message:", errorMessage);
          });
        } else {
          setError("Unknown error occurred.");
          console.error("Unknown Error");
        }
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetchData(); // Call fetch on submit
  };

  const onChangeHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <h2>Weather App</h2>
      <div id="div1">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="location"
            placeholder="Enter city"
            value={location}
            onChange={onChangeHandler}
            className="form-control"
          />
          <button type="submit" 
          className="btn btn-success b1"
          >Search</button>

        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && (
          <div style={{ marginTop: "1rem" }}>
            <h3>
              {weather.resolvedAddress}
            </h3>
            <p>Temperature: {weather.currentConditions.temp}°C</p>
            <p>Conditions: {weather.currentConditions.conditions}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;