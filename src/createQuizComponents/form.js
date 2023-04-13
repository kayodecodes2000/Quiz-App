import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [QuizDescription, setQuizDescription] = useState("");
  const [quizPoint, setQuizPoint] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionsA, setOptionsA] = useState("");
  const [optionsB, setOptionsB] = useState("");
  const [optionsC, setOptionsC] = useState("");
  const [optionsD, setOptionsD] = useState("");
  const [quizWriter, setQuizWriter] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);
  const databaseRef = collection(database, "addQuiz");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !QuizDescription ||
      !quizPoint ||
      !quizWriter ||
      !optionsA ||
      !optionsB ||
      !optionsC ||
      !optionsD ||
      !answer
    ) {
      setError(true);
      return;
    }
    setLoading(true);

    addDoc(databaseRef, {
      QuizDescription: QuizDescription,
      quizPoint: quizPoint,
      optionsA: optionsA,
      optionsB: optionsB,
      optionsC: optionsC,
      optionsD: optionsD,
      quizWriter: quizWriter,
      answer: answer,
    }).then(() => {
      toast.success("quiz added successfuly");
      setLoading(false);
      navigate("/addQuiz");
    });
  }

  return (
    <div className="form-container">
      <Fragment>
        <Helmet>
          <title>Create-Quiz</title>
        </Helmet>
      </Fragment>
      <h3>Create New Quiz</h3>

      <form className="create">
        <Fade duration={5000}>
          <b>
            <label>Quiz Description:</label>
          </b>
          <textarea
            value={QuizDescription}
            onChange={(e) => setQuizDescription(e.target.value)}
            placeholder="Input your Questions"
          ></textarea>

          <b>
            <label>Quiz Point:</label>
          </b>
          <input
            value={quizPoint}
            onChange={(e) => setQuizPoint(e.target.value)}
            type="number"
            placeholder="Give your Quiz Points"
          />
          <b>
            <label>Wriiten By:</label>
          </b>
          <input
            value={quizWriter}
            onChange={(e) => setQuizWriter(e.target.value)}
            type="text"
            placeholder="Writer's Name"
          />
        </Fade>
        <Fade duration={3000}>
          <div className="options">
            <b>
              <label>Option A:</label>
            </b>
            <input
              type="text"
              style={{ width: "50%" }}
              value={optionsA}
              onChange={(e) => setOptionsA(e.target.value)}
            />
            <b>
              <label>Option B:</label>
            </b>
            <input
              type="text"
              style={{ width: "50%" }}
              value={optionsB}
              onChange={(e) => setOptionsB(e.target.value)}
            />
            <b>
              <label>Option C:</label>
            </b>
            <input
              type="text"
              style={{ width: "50%" }}
              value={optionsC}
              onChange={(e) => setOptionsC(e.target.value)}
            />
            <b>
              <label>Option D:</label>
            </b>
            <input
              type="text"
              style={{ width: "50%" }}
              value={optionsD}
              onChange={(e) => setOptionsD(e.target.value)}
            />
            <b>
              <label>Answer:</label>
            </b>
            <input
              type="text"
              style={{ width: "90%" }}
              value={answer}
              placeholder="Your Answer must match one of your options"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </Fade>
        <ToastContainer />
        <center>
          <button onClick={handleSubmit} disabled={loading}>
            Submit
          </button>
        </center>
        <center>
          <br />
          <br />
          <br />
          <div>
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
          </div>
        </center>
        <center>
          <Link to="/">
            <button className="btn-home" style={{ marginBottom: "20px" }}>
              Back to home
            </button>
          </Link>
        </center>
      </form>
    </div>
  );
}

export default Form;
