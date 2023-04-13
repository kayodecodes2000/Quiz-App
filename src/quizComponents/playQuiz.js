import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import Timer from "./timer";
import Stop from "./stop";
function PlayQuiz() {
  const { state } = useLocation();
  const [counter, setCounter] = useState(1);
  const [totalQuiz, setTotalQuiz] = useState(1);
  const [questionArray, setQuestionArray] = useState([]);
  const [quizDifficulty, setQuizDifficulty] = useState();
  const [timeUp, setTimeUp] = useState(false);
  const [results, setResults] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const databaseRef = collection(database, "LeadersBoard");
  const navigate = useNavigate();

  const submitQuiz = () => {
    addDoc(databaseRef, {
      playerName: playerName,
      quizDifficulty: quizDifficulty,
      quizCategory: questionArray[0].category,
      finalScore: results,
    }).then(() => {
      navigate("/quiz-result", {
        state: {
          finalResult: results,
        },
      });
    });
  };

  useEffect(() => {
    const { quizData, quizCount, quizDifficulty } = state;
    setTotalQuiz(quizCount);
    setQuestionArray(quizData);
    setQuizDifficulty(quizDifficulty);
    setPlayerName(localStorage.getItem("playername"));
    setTimeout(() => {
      setTimeUp(true);
    }, 30000);
  }, []);
  const nextQuestion = () => {
    if (counter < totalQuiz) {
      setCounter(counter + 1);
    }
  };
  return (
    <div
      style={{
        minHeight: "99vh",
        position: "relative",
        bottom: "25px",
        position: "relative",
      }}
    >
      <center>
        {timeUp && (
          <div
            style={{
              position: "absolute",
              minHeight: "100vh",
              width: "100%",
              zIndex: "10",
              background: "white",
            }}
          >
            <Stop submitQuiz={submitQuiz} />
          </div>
        )}
        <h2>Play Quiz</h2>
        <Timer />
        <Card
          questionArray={questionArray}
          counter={counter}
          nextQuestion={nextQuestion}
          setResults={setResults}
          results={results}
        />
        <p style={{ marginTop: "10px" }}>Question Number:{counter}</p>

        <p style={{ marginTop: "5px" }}> Quiz-Difficulty:{quizDifficulty}</p>
        {counter === Number(totalQuiz) ? (
          <button
            className="btn btn-primary"
            style={{
              marginLeft: "20px",
              position: "",
              bottom: "",
            }}
            onClick={submitQuiz}
          >
            Submit
          </button>
        ) : (
          ""
        )}
      </center>
    </div>
  );
}

export default PlayQuiz;
