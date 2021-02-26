import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";

const Login = (props) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    firebase
      .loginUser(email, password)
      .then((user) => {
        props.history.push("./welcome");
      })
      .catch((error) => {
      setError(error)
      
      setEmail('')
      setPassword('')});
  };

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
          {error !== '' && <span>{error.message}</span>}
            <h2>Connexion </h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  id="email"
                  required
                ></input>
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  id="password"
                  required
                ></input>
                <label htmlFor="password">Mot de passe</label>
              </div>

              {btn ? (
                <button>Connexion</button>
              ) : (
                <button disabled>Connexion</button>
              )}
            </form>

            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">
                Nouveau sur Marvel ? Inscrivez vous !!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
