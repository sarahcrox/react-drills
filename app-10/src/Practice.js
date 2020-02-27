import React, { Component } from 'react'
import './Practice.css'

export default class Practice extends Component{
    constructor(){
        super();
            this.state={
                email: '',
                hasBeenClicked: false,
                emailList: []
            };
    }
    emailInput=(e) => {
        this.setState({
            email: e.target.value
        });
    }
    emailClick=()=>{
        this.setState({
            hasBeenClicked: true
        });
    }


    render(){
        return(
            <div>

                <input onChange={(e)=>this.emailInput(e)}/>    
                <button onClick={()=>this.emailClick()}>PuShit</button>
                {this.state.hasBeenClicked ? this.state.email : ''}
            </div>
        )
    }
}