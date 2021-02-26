import React, { Fragment, useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../Firebase";
import Quiz from "../Quiz";
import Logout from "../Logout";

const Welcome = (props) => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push("/");
      console.log(user, "wesh la fleche");
      console.log(userSession, "wesh mon gars");
    });

    console.log("ahla w sahla", userSession.uid);

    firebase
      .user(userSession.uid)
      .get()
      .then((doc) => {
        if (doc && doc.exists) {
          const myData = doc.data();
          setUserData(myData);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("wiw");
      });

    return () => {
      listener();
    };
  }, []);

  console.log("halima", userSession);

  return userSession === null ? (
    <Fragment>
      <div className="loader"></div>
      <p> Loading ... </p>
    </Fragment>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />

        <Quiz userData={userData.uid} />
      </div>
    </div>
  );
};

export default Welcome;
