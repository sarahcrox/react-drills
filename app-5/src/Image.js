import React, { Component } from 'react'
export default class image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <h5>Beep Boop</h5>
            </div>
        )
    }
}