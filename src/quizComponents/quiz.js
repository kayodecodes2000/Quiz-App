import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Fade } from "react-reveal";
function Quiz() {
  const [quizCount, setQuizCount] = useState("");
  const [quizCategory, setQuizCategory] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState(false);
  const getPlayerName = (value) => {
    setPlayerName(value);
    localStorage.setItem("playername", value);
  };
  function getQuiz(e) {
    e.preventDefault();
    if (!quizCount || !quizCategory || !quizDifficulty || !playerName) {
      setError(true);
      return;
    }
    axios
      .get(
        `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDifficulty}&category=${quizCategory}`
      )
      .then((response) => {
        navigate("/play", {
          state: {
            quizData: response.data.results,
            quizCount: quizCount,
            quizDifficulty: quizDifficulty,
          },
        });
      });
  }
  return (
    <div>
      <Fade left duration={1000}>
        <Fragment>
          <Helmet>
            <title>Take-Quiz</title>
          </Helmet>
        </Fragment>
        <center>
          <p
            style={{
              fontSize: "15px",
              textTransform: "capitalize",
              position: "relative",
              top: "15px",
              background: "grey",
              height: "100px",
              width: "50%",
              textAlign: "center",
              color: "whitesmoke",
              padding: "10px",
            }}
          >
            Kindly Fill in The details below correctly
          </p>
          <div
            style={{
              borderLeft: "5px solid green",
              marginLeft: "10px",
              height: "400px",
              marginTop: "10px",
            }}
          >
            <div
              className="input-group input-group-sm mb-3"
              style={{ padding: "", marginTop: "50px", width: "90%" }}
            >
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Player Name
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                placeholder="Input Your Name"
                aria-describedby="inputGroup-sizing-sm"
                value={playerName}
                onChange={(e) => getPlayerName(e.target.value)}
                style={{ cursor: "pointer", fontSize: "15px" }}
              />
            </div>
            <div
              className="input-group input-group-sm mb-3"
              style={{ padding: "", marginTop: "50px", width: "90%" }}
            >
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Number of Questions:
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={quizCount}
                onChange={(e) => {
                  setQuizCount(e.target.value);
                }}
                style={{ cursor: "pointer", fontSize: "10px" }}
                placeholder="Input Questions From 1- 50"
              />
            </div>
            <div
              className="input-group mb-3"
              style={{
                padding: "",
                marginTop: "50px",
                width: "90%",
                cursor: "pointer",
              }}
            >
              <label className="input-group-text" for="inputGroupSelect01">
                Quiz Category:
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                value={quizCategory}
                onChange={(e) => {
                  setQuizCategory(e.target.value);
                }}
                style={{ width: "50%", cursor: "pointer" }}
              >
                <option selected>Choose...</option>
                <option value={9}>General Knowledge</option>
                <option value={18}>Science:Computers</option>
                <option value={12}>Entertainment:Music</option>
              </select>
            </div>
            <div
              className="input-group mb-3"
              style={{
                padding: "",
                marginTop: "50px",
                width: "90%",
                cursor: "pointer",
              }}
            >
              <label className="input-group-text" for="inputGroupSelect01">
                Quiz Difficulty:
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                value={quizDifficulty}
                onChange={(e) => {
                  setQuizDifficulty(e.target.value);
                }}
              >
                <option selected>Choose...</option>
                <option value={"easy"}>Easy</option>
                <option value={"medium"}>Medium</option>
                <option value={"hard"}>Hard</option>
              </select>
            </div>
          </div>
          {error ? (
            <span
              style={{
                color: "red",
                fontSize: "20px",
                textTransform: "capitalize",
              }}
              className="error"
            >
              Fill in the Empty spaces!
            </span>
          ) : (
            ""
          )}
          <br />
          <button
            className="btn btn-primary"
            onClick={getQuiz}
            style={{ position: "relative", top: "40px" }}
          >
            Get Quiz
          </button>
        </center>
      </Fade>
    </div>
  );
}

export default Quiz;
