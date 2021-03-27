import React, {Component} from 'react'
import {ButtonContext} from './button-context.js'



class SubmitButton extends React.Component{
    constructor(props) {
        super(props);
    };
  

    static contextType = ButtonContext;
    render() {
        let btn = this.context;
        return (
            <div>
             <button type="submit" style={{backgroundColor: btn.color}}>{btn.text}</button>
            </div> 
            )
    }
}

//  SubmitButton.contextType = ButtonContext;

export default SubmitButton