import React,{useState} from "react";
import axios from "axios";

const SignUp =()=>{
  const [firstName, setFirstName] =useState();
  const [lastName, setLastName] =useState();
  const [phoneNumber, setPhoneNumber] =useState();
  const [email, setEmail] =useState();
  const [password, setPassword] =useState();
  const [status, setStatus] =useState();

  return (
    <div className="signUp">
        
      <input
        type="text"
        placeholder="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="phoneNumber"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          axios
            .post("http://localhost:5000/signUp",{
              firstName,
              lastName,
              phoneNumber,
              email,
              password,
            })
            .then((result) => {
          //    console.log(result)
              setStatus(
                <div className="success">
                  the user has been added successfully
                </div>
              );
            })
            .catch((err) => {
              setStatus(
                <div className="wrong">
                  error happen while regeister please try again
                </div>
              );
            });
        }}
      >
        signUp
      </button>
      {status}
      

    </div>
  )
}


export default SignUp