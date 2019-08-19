import React from "react";

const Weather = props => {
    return (
      <div className="weather-content">
        { props.city && props.country && (<p>Location:{ props.city },{ props.country }</p>) }
        { props.temperature && <p>Temperature:{ props.temperature }</p> }
        { props.description && <p>Condition:{ props.description }</p> }
        { props.error && <p>{ props.error }</p> }
      </div>
    );
}

export default Weather;
