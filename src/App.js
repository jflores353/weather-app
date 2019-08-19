import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "6fb54323d6d6e0e48df0c278f715f04e";

export default class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Header />,
        <Form getWeather={this.getWeather} />,
        <Weather />
      </div>
    );
  }
}
