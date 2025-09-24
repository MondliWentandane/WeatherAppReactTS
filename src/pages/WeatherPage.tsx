import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "473b77d656249c2740cdfd1a021d2e96";

  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeatherData(data);
    setLoading(false);
  };

  const fetchWeatherByCity = async (city: string) => {
    setLoading(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeatherData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation not supported");
      setLoading(false);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      fetchWeatherByCity(searchTerm);
      setSearchTerm("");
    }
  };

  if (loading)
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  if (!weatherData)
    return <div style={{ textAlign: "center", marginTop: "50px" }}>No weather data available.</div>;

  const { main, weather, wind, name } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="mainCont">
      <div id="box">
        <div id="topDiv" style={{ textAlign: "center", marginBottom: "20px" }}>
          <form onSubmit={handleSearch} style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <input
              type="text"
              placeholder="Search city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: "8px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              style={{
                padding: "8px 12px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#0389ff",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Search
            </button>
          </form>
        </div>

        <div id="middleDiv">
          <Card>
            <div style={{ marginLeft: "15px", display: "inline-flex", gap: "35px" }}>
              <div>
                <h1 style={{ fontSize: "5rem" }}>{Math.round(main.temp)}°C</h1>
                <p style={{ fontSize: "1.5rem" }}>{weather[0].description}</p>
              </div>
              <img id="weathImg" src={iconUrl} alt={weather[0].description} />
            </div>
          </Card>

          <Card>
            <div>
              <p style={{ marginLeft: "17px", marginTop: "15px" }}>
                <strong>{name}</strong> <br />
                {new Date().toLocaleDateString()}
              </p>
              <ul>
                <li>Humidity: {main.humidity}%</li>
                <li>Wind Speed: {wind.speed} m/s</li>
                <li>Max Temp: {Math.round(main.temp_max)}°C</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div style={{ marginLeft: "15px" }}>
              <h3>
                Suggested Outfit <br />
                <img
                  src="https://i.pinimg.com/736x/14/5f/63/145f633fbfe16618ce52cfcc74d5c93e.jpg"
                  alt="Suggested Outfit"
                  id="imgCloth"
                />
              </h3>
            </div>
          </Card>
        </div>

        <div id="bottomDiv"></div>
      </div>
    </div>
  );
};

export default WeatherPage;
