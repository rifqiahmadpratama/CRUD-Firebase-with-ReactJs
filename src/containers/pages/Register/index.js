import React, { Component } from "react";
import "./Register.scss";
import firebase from "../../../config/firebase";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    // console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("success : ", user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode : ", errorCode);
        console.log("errorMessage : ", errorMessage);
      });
  };

  render() {
    return (
      <div>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Register Page</p>
            <input
              id="email"
              className="input"
              placeholder="Email"
              type="text"
              onChange={this.handleChangeText}
            />
            <input
              id="password"
              className="input"
              placeholder="Password"
              type="password"
              onChange={this.handleChangeText}
            />
            <button className="btn" onClick={this.handleRegisterSubmit}>
              Register
            </button>
          </div>
        </div>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

export default Register;
