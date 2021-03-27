import React, {Component} from 'react'

class SubmitButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btnInfo: {
                color: "red",
                text: "Disabled"
            }
        }
    };
  
    renderCurrentBtn(){
        
         if(this.props.inputState.firstName !== "" && this.props.inputState.lastName !== ""){
            this.setState({
                btnInfo: {
                 
                    color: 'green',
                    text: 'Send'
                }
            })
            
         }
         else {
            this.setState({
                btnInfo: {
                    color: "red",
                    text: "Disabled"
                }
            })
               
         }
         return this.state.btnInfo
     }
     render() {
     
        return (
            <div>
             <button type="submit" className={this.renderCurrentBtn().color}>{this.state.btnInfo.text}</button>
            </div> 
            )
    }
    // renderCurrentBtn(){
    //    let btnInfo = {
    //         color: 'red',
    //         text: 'Disabled'
    //     }
    //     if(this.props.inputState.firstName !== "" && this.props.inputState.lastName !== ""){
    //         btnInfo ={
                
    //             color: 'green',
    //             text: 'Send'
    //         }
    //     }
    //     else {
    //         btnInfo = {
    //             color: 'red',
    //             text: 'Disabled'
    //         }
              
    //     }
    //     return btnInfo
    // }

    // render() {
     
    //     return (
    //         <div>
    //          <button type="submit" className={this.renderCurrentBtn().color}>{this.renderCurrentBtn().text}</button>
    //         </div> 
    //         )
    // }
}

export default SubmitButton