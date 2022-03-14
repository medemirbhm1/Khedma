import React, { useState } from "react";
import choice1 from "./img/undraw_personal_file_re_5joy.svg";
import choice2 from "./img/undraw_coming_home_re_ausc.svg";
function SignUp() {
  const [chose, setChose] = useState(false);

  return (
    <div>
      {!chose ? (
        <>
          <h2>Sign up as a :</h2>
          <div className="choices">
            <div className="choice">
              <img src={choice1} />
              <h3>Person</h3>
            </div>
            <div className="choice">
              <img src={choice2} />
              <h3>Company</h3>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignUp;
