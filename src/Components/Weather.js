import React from "react";

const Weather = props => {
    return (
      <div className="weather-content">
        { 
          props.city && props.country && <p className="weather-key">Location:
          <span className="weather-value"> { props.city },{ props.country }</span></p> 
        }
        { 
          props.temperature && <p className="weather-key">Temperature:
          <span className="weather-value"> { props.temperature }</span></p> 
        }
        { 
          props.description && <p className="weather-key">Condition:
          <span className="weather-value"> { props.description }</span></p> 
        }
        { 
          props.error && <p className="weather-error"> { props.error }</p> 
        }
      </div>
    );
}

export default Weather;
