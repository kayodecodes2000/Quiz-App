import React from "react";

function Stop({ submitQuiz }) {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h5>Oops you ran out of time</h5>
        <b>
          <code>
            <p>submit now!!</p>
          </code>
        </b>
        <button onClick={submitQuiz}>SUBMIT</button>
      </div>
    </div>
  );
}

export default Stop;
