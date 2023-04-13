import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
function Home() {
  return (
    <div className="container-home">
      ***
      <Fragment>
        <Helmet>
          <title>React-Quiz App</title>
        </Helmet>
      </Fragment>
      <center>
        <Fade left duration={3000}>
          <h1
            style={{ position: "relative", bottom: "", color: "whitesmoke" }}
            className="header"
          >
            Quiz-App
          </h1>
        </Fade>
        <b>
          <Fade duration={1000}>
            <p
              className="guide"
              style={{ position: "relative", bottom: "20px" }}
            >
              How to play the game
            </p>
          </Fade>
        </b>
        <Fade duration={4000}>
          <div className="instructions">
            <ul className="order-list">
              <p
                style={{
                  fontFamily: "monospace",
                  color: "white",
                  position: "relative",
                  right: "",
                }}
              >
                Ensure you read this guide from start to finish!
              </p>
              <ol style={{ position: "relative", right: "" }}>
                Each game consist of multi-choice questions
              </ol>
              <br />
              <ol style={{ position: "relative", right: "" }}>
                Every Question contains 4 options.
              </ol>
            </ul>
            <p
              style={{
                marginTop: "60px",
                color: "grey",
                fontFamily: "revert",
                fontSize: "15px",
              }}
            >
              Good Luck!
            </p>
          </div>
        </Fade>
        <br />
        <div className="btn-container">
          <Link to="/take/quiz">
            <button className="btn-quiz">Take Quiz</button>
          </Link>
          <Link to="/create/quiz">
            <button className="btn-quiz">Add New Quiz</button>
          </Link>
          <Link to="/addQuiz">
            <button className="btn-quiz">Custom Quiz</button>
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Home;
