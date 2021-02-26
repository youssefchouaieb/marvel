import React, { useRef, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
function Landing() {
  const [btn, setBtn] = useState(false);

  const refWolverine = useRef(null);
  console.log(refWolverine);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn("True");
    }, 1000);
  }, []);

  const setLeftImg = () => {
    refWolverine.current.classList.add("leftImg");
  };
  const setRightImg = () => {
    refWolverine.current.classList.add("rightImg");
  };
  const removeLeftImg = () => {
    refWolverine.current.classList.remove("leftImg");
  };
  const removeRightImg = () => {
    refWolverine.current.classList.remove("rightImg");
  };

  const DisplayBtn = btn && (
    <Fragment>
      <div
        onMouseOver={setLeftImg}
        onMouseOut={removeLeftImg}
        className="leftBox"
      >
        <Link className="btn-welcome" to="/login">
          Connexion
        </Link>
      </div>

      <div
        onMouseOver={setRightImg}
        onMouseOut={removeRightImg}
        className="rightBox"
      >
        <Link className="btn-welcome" to="/signup">
          Inscription
        </Link>
      </div>
    </Fragment>
  );
  return (
    <main ref={refWolverine} className="welcomePage">
      {DisplayBtn}
    </main>
  );
}

export default Landing;
