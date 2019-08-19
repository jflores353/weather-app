import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "6fb54323d6d6e0e48df0c278f715f04e";

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
      `https://api.openweathermap.org/data/2.5/weathe{r?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description
    });
  };
  render() {
    return (
      <div>
        <Header />,
        <Form getWeather={this.getWeather} />,
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
        />
      </div>
    );
  }
}
