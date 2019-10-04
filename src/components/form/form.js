import React, {Component} from 'react';
import './form.css'

export default class Form extends Component{
    render (){
        return(
            <div className='form'>
                <h1 className="h3">
                    Weather
                </h1>
                <form onSubmit={this.props.takeWeather}>
                    <input className="input" type='Text' name='city' placeholder='Введите город'/>
                   <button className="icon-search"> </button>
                </form>
            </div>

        )
    }

}