import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function Home() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isSignUpActive, setisSignUpActive] = useState(true);
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  function handleEmailChange(e) {
    setemail(e.target.value);
  }

  function handlePasswordChange(e) {
    setpassword(e.target.value);
  }

  function handleSignIn() {
    if (!email || !password) {
      seterror("Email and password both are required");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("./private")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage);
        console.log({ errorCode, errorMessage });
      });
  }

  function handleSignUp() {
    if (!email || !password) {
      seterror("Email and password both are required");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage);
        alert("error");
        console.log({ errorCode, errorMessage });
      });
  }
  function handleMethodChange() {
    setisSignUpActive(!isSignUpActive);
  }

  return (
    
    <form className="form-container">
      {isSignUpActive && <legend>Sign Up</legend>}
      {!isSignUpActive && <legend>Sign In </legend>}
      <fieldset>
        <ul>
          <li>
            <label htmlFor="email"> Email</label>
            <input type="email" id="email" onChange={handleEmailChange} />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordChange}
            />
          </li>
        </ul>
        {error && <p id="error-message">{error}</p>}
        {isSignUpActive && (
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        )}
        {!isSignUpActive && (
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </fieldset>

      {isSignUpActive && (
        <a onClick={handleMethodChange}>Already have an account? Sign In</a>
      )}
      {!isSignUpActive && (
        <a onClick={handleMethodChange}>Don't have an account? Sign Up</a>
      )}
    </form>
  );
}

export default Home;
