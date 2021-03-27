import React, { useState, useRef, useEffect } from "react";
import Greeting from "./Greeting.js";
import SubmitCounts from "./SubmitCounts.js";
import "./App.css";
import SubmitButton from "./SubmitButton.js";

function ContactForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    desc: "",
  };

  const [inputName, setInputName] = useState(initialState);
  const [count, setCount] = useState(0);
  const [submittedArray, setSubmittedArray] = useState([]);

  const inputRef = useRef();

  console.log(`Submitted array is ${submittedArray.length} long.`);
  for (var i = 0; i < submittedArray.length; i++) {
    console.log(`Names submitted are ${submittedArray[i].firstName}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.firstName.value);

    const newData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      desc: inputRef.current.value,
    };

    // var partialState = {};
    // partialState["desc"] = inputRef.current.value;
    // setInputName((inputName) => {
    //   return {
    //     ...inputName,
    //     ...partialState,
    //   };
    // });

    if (
      //   inputName.firstName === initialState.firstName ||
      //   inputName.lastName === initialState.lastName
      newData.firstName === initialState.firstName ||
      newData.lastName === initialState.lastName
    ) {
      alert("oops you forgot something");
    } else {
      setCount((C) => C + 1);
      console.log(`Submitted ${count} times.`);
      const newArray = submittedArray.slice();
      //   newArray.push(inputName);
      newArray.push(newData);
      setSubmittedArray(newArray);
      //   console.log(`Submitted array is ${submittedArray.length} long.`);
      //   for (var i = 0; i < submittedArray.length; i++) {
      //     console.log(`Names submitted are ${submittedArray[i].firstName}`);
      //   }
      // setSubmittedArray(inputName);
    }
  }

  function handleGreeting(event) {
    const result = event.target.value;
    setInputName({
      ...inputName,
      [event.target.name]: result,
    });
  }

  useEffect(() => {
    function cleanForm() {
      setInputName(initialState);
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
        <SubmitButton inputState={inputName} />
      </form>
      <SubmitCounts inputs={count} submitters={submittedArray} />
    </div>
  );
}

export default ContactForm;
