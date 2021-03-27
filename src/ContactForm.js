import React, { useState, useRef, useEffect } from "react";
import Greeting from "./Greeting.js";
import SubmitCounts from "./SubmitCounts.js";
import "./App.css";
import SubmitButton from "./SubmitButton.js";
import {ButtonContext, btnInfo} from './button-context.js'



function ContactForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    desc: "",
  };

  const [inputName, setInputName] = useState(initialState);
  const [count, setCount] = useState(0);
  const [submittedArray, setSubmittedArray] = useState([]);
  const [btnState, setBtnState] = useState(btnInfo.disabled)

  const inputRef = useRef();

  


  function handleSubmit(event) {
    event.preventDefault();

    const newData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      desc: inputRef.current.value,
    };

    if (
      newData.firstName === initialState.firstName ||
      newData.lastName === initialState.lastName
    ) {
      alert("oops you forgot something");
     
    } else {
      setCount((C) => C + 1);
      console.log(`Submitted ${count} times.`);
      const newArray = submittedArray.slice();
      newArray.push(newData);
      setSubmittedArray(newArray);
    
    }
  }

  function handleGreeting(event) {
    const result = event.target.value;
    setInputName({
      ...inputName,
      [event.target.name]: result,
    });
 

    if(inputName.firstName === "" || inputName.lastName === "" ){
        setBtnState(btnState => btnState = btnInfo.disabled);
    }
    else{
        
        setBtnState(btnState => btnState = btnInfo.enabled);
      }

      console.log(`Context color ${btnState.color}`)
      
   
  }

  useEffect(() => {
    function cleanForm() {
      setInputName(initialState);
      setBtnState(btnInfo.disabled);
    }
    if (count != 0) {
      setTimeout(() => {
        alert(`Thank you for entering the form!`);
      }, 1000);
    }

    return () => {
      cleanForm();
    };
  }, [count]);

  return (
    <div>
      <Greeting first={inputName.firstName} last={inputName.lastName} />
      <form onSubmit={handleSubmit} id="app-form" key={count}>
        <label htmlFor="firstName">
          Your firstname:
          <input
            name="firstName"
            id="firstName"
            onChange={handleGreeting}
            autoComplete="false"
          />
        </label>
        <label htmlFor="lastName">
          Your lastname:
          <input
            name="lastName"
            id="lastName"
            onChange={handleGreeting}
            autoComplete="false"
          />
        </label>
        <label htmlFor="desc">
          Describe yourself (optional):
          <textarea ref={inputRef}></textarea>
        </label>
        {/* <SubmitButton inputState={inputName} /> */}
      <ButtonContext.Provider value={btnState}>
            {/* <button type="submit" style={{backgroundColor: btnInfo.color}}>{btnInfo.text}</button> */}
            <SubmitButton />
        </ButtonContext.Provider>
      </form>
      <SubmitCounts inputs={count} submitters={submittedArray} />
    </div>
  );
}



export default ContactForm;
