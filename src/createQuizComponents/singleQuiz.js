import { deleteDoc, doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { database } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SingleQuiz() {
  const [quiz, setQuiz] = useState({});
  const nav = useNavigate();
  const { id } = useParams();
  React.useEffect(() => {
    const databaseRef = doc(database, "addQuiz", id);
    const getData = () => {
      getDoc(databaseRef).then((doc) => {
        console.log(doc.data());
        setQuiz(doc.data());
      });
    };
    getData();
  }, []);
  function check(ans, optionB) {
    if (ans === optionB) {
      toast.success("Right Answer", {
        autoClose: 1000,
      });
      nav("/score");
    } else {
      toast.error("Wrong Answer", {
        autoClose: 1000,
      });
    }
  }
  const handleDelete = () => {
    const databaseRef = doc(database, "addQuiz", id);
    deleteDoc(databaseRef);
    nav("/addQuiz");
  };
  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <center>
        <ToastContainer />
        <div
          className="bg-light p-5 h5"
          style={{ textTransform: "capitalize", fontSize: "25px" }}
        >
          QUESTION:&nbsp;&nbsp;{quiz.QuizDescription}
        </div>
        <hr />
        <div
          style={{
            cursor: "pointer",
            textTransform: "capitalize",
            fontSize: "18px",
          }}
        >
          <div onClick={() => check(quiz.optionsA, quiz.answer)}>
            <p className="bg-light shadow p-4  single-quiz">{quiz.optionsA}</p>
          </div>
          <div onClick={() => check(quiz.optionsB, quiz.answer)}>
            <p className="bg-light shadow p-4">{quiz.optionsB}</p>
          </div>
          <div onClick={() => check(quiz.optionsC, quiz.answer)}>
            <p className="bg-light shadow p-4">{quiz.optionsC}</p>
          </div>
          <div onClick={() => check(quiz.optionsD, quiz.answer)}>
            <p className="bg-light shadow p-4">{quiz.optionsD}</p>
            <div />
          </div>
        </div>
        Quiz Writer:{" "}
        <b
          style={{
            fontSize: "20px",
            textTransform: "capitalize",
            color: "blue",
          }}
        >
          {quiz.quizWriter}
        </b>
      </center>
      <div>
        <center>
          <Link to={`/edit/${id}`}>
            <button className="btn btn-success mx-4">edit</button>
          </Link>
          <button className="btn btn-primary mx-4" onClick={handleDelete}>
            delete
          </button>
        </center>
      </div>
    </div>
  );
}

export default SingleQuiz;
