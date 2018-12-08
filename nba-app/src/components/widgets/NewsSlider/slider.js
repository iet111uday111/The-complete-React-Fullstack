import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplate from './sliderTemplate';


export default class NewsSlider extends Component{
    state = {
        news: []
    }

    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`)
            .then((response) =>{
                console.log(response.data);
                this.setState({
                    news: response.data
                })
                
            }).catch((err) => {
                throw(err);
            })
    }

    render(){
        console.log(this.state.news);
        
        return (
            <div>
                <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        )
    }
}