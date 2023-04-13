import React from "react";
import { Link } from "react-router-dom";
function Score() {
  return (
    <div>
      <h1
        style={{
          fontSize: "20px",
          textTransform: "capitalize",
          fontFamily: "sans-serif",
          color: "green",
          fontWeight: "bolder",
        }}
      >
        {" "}
        Yay,You Are Correct!
      </h1>
      <center>
        <img
          src="data:image/jpeg;base64,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"
          alt="Thumbs Up!"
          width={300}
        />
        <div>
          <Link to="/addQuiz">
            <button className="btn-quiz">Back To AddQuiz</button>
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Score;