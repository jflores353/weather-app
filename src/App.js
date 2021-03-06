import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;

export default class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=6fb54323d6d6e0e48df0c278f715f04e`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter City & Country"
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="main-box">
          <div className="image-box">
            <Header />
          </div>{" "}
          {/* image-box end */}
          <div className="weather-box">
            <div className="weather-form">
              <Form getWeather={this.getWeather} />
            </div>
            {/* weather-form end */}
            <div className="weather-info">
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
          {/* weather-box end */}
        </div>
      </div>
    );
  }
}
