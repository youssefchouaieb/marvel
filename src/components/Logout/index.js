import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const Logout = (props) => {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (checked) {
      firebase.signoutUser();
    }
  }, [checked, firebase]);
  console.log(checked);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  
  return (
    <div className="logoutContainer">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider round "></span>
      </label>
    </div>
  );
};
export default Logout;
