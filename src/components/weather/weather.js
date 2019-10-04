import React, {Component} from 'react'
import './weather.css'
export default class Weather extends Component{
    render() {
        return(
            <div>
                {this.props.city &&
                <div className="weather">
                    <div className='weather-icon'>
                    <p><img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt=""/></p>
                    </div>
                    <p>Location: {this.props.name}</p>
                    <p>Temperature: {this.props.temp.toFixed(1)} °C</p>
                    <p>Cloudiness: {this.props.clouds}</p>
                    <p>Wind: {this.props.wind} m/s</p>
                    <p>Sunrise: {this.props.sunrise}</p>
                    <p>Sunset: {this.props.sunset}</p>
                </div>
                }

            </div>
        )
    }
}
