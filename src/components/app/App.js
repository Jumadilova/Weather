import React, {Component} from 'react';
import './App.css'
import Form from "../form";
import Weather from "../weather";
import ErrorIndicator from "../error-indicator";


export default class App extends Component {
    sunrise() {
        let date = new Date(this.state.sunrise * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return hours + ':' + minutes
    }

    sunset() {
        let date = new Date(this.state.sunset * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return hours + ':' + minutes
    }

    state = {
        icon: null,
        temp: null,
        wind: null,
        city: null,
        sunrise: null,
        sunset: null,
        name: null,
        clouds: null,
        error: false
    };
    onError = (err) => {
        this.setState({
                error: true,
            }
        )
    };
    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        console.log(city);
        if (city) {
            const API_KEY = 'f7840ad20fbd1807a61426d6bbdc03cf';
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

                .then((res) => {
                    return res.json()
                })

                .then((body) => {
                    console.log(body);
                    console.log(body.clouds.all);
                    console.log(body.main.temp);
                    console.log(body.wind.speed);
                    console.log(body.city);
                    console.log(body.sys.sunrise);
                    console.log(body.sys.sunset);

                    this.setState({
                        name: body.name,
                        city: body.name,
                        temp: body.main.temp - "273",
                        wind: body.wind.speed,
                        sunrise: body.sys.sunrise,
                        sunset: body.sys.sunset,
                        clouds: body.clouds.all,
                        icon: body.weather[0].icon,
                    });
                    // let sunset = weatherData.sys.sunset*1000;
                    // let date = new Date();
                    // date.setTime(sunset);
                    // let sunsetDate = date.getHours() + ':' + date.getMinutes();
                    //
                    // let sunrise = weatherData.sys.sunrise*1000;
                    // let date2 = new Date();
                    // date.setTime(sunset);
                    // let sunriseDate = date2.getHours() + ':' + date2.getMinutes();
                })
                .catch(this.onError);
        }

    };

    render() {
        const {error} = this.state;
        const errorMessage = error ? <ErrorIndicator/> : <Weather icon={this.state.icon}
                                                                  name={this.state.name}
                                                                  city={this.state.city}
                                                                  temp={this.state.temp}
                                                                  clouds={this.state.clouds}
                                                                  wind={this.state.wind}
                                                                  sunrise={this.sunrise()}
                                                                  sunset={this.sunset()}/>;
        return (
            <div className="App">
                <Form takeWeather={this.getWeather}/>
                {errorMessage}
            </div>
        )
    }
};