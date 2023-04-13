import { async } from "@firebase/util";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Edit() {
  const [QuizDescription, setQuizDescription] = useState("");
  const [quizPoint, setQuizPoint] = useState("");
  const [optionsA, setOptionsA] = useState("");
  const [optionsB, setOptionsB] = useState("");
  const [optionsC, setOptionsC] = useState("");
  const [optionsD, setOptionsD] = useState("");
  const [quizWriter, setQuizWriter] = useState("");

  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const { editID } = useParams();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const databaseRef = doc(database, "addQuiz", editID);
    const getData = () => {
      getDoc(databaseRef).then((doc) => {
        console.log(doc.data());
        setQuizWriter(doc.data().quizWriter);
        setQuizDescription(doc.data().QuizDescription);
        setQuizPoint(doc.data().quizPoint);
        setOptionsA(doc.data().optionsA);
        setOptionsB(doc.data().optionsB);
        setOptionsC(doc.data().optionsC);
        setOptionsD(doc.data().optionsD);
        setAnswer(doc.data().answer);
      });
    };
    getData();
  }, []);
  async function handleUpdate(e) {
    e.preventDefault();
    const docRef = doc(database, "addQuiz", editID);

    await updateDoc(docRef, {
      QuizDescription: QuizDescription,
      quizPoint: quizPoint,
      optionsA: optionsA,
      optionsB: optionsB,
      optionsC: optionsC,
      optionsD: optionsD,
      quizWriter: quizWriter,
      answer: answer,
    });
    toast.success("Quiz Added Successfuly", {
      autoClose: 1000,
    });
    setLoading(true);
    navigate("/addQuiz");
  }

  return (
    <div style={{ minHeight: "110vh" }}>
      <h3>EDIT QUIZ</h3>

      <form className="create">
        <b>
          <label>Quiz Description:</label>
        </b>
        <textarea
          value={QuizDescription}
          onChange={(e) => setQuizDescription(e.target.value)}
        ></textarea>

        <b>
          <label>Quiz Point:</label>
        </b>
        <input
          value={quizPoint}
          onChange={(e) => setQuizPoint(e.target.value)}
        />

        <b>
          <label>Wriiten By:</label>
        </b>
        <input
          value={quizWriter}
          onChange={(e) => setQuizWriter(e.target.value)}
        />

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
            style={{ width: "50%" }}
            value={answer}
            placeholder="Answer"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <ToastContainer />
        <center>
          <button onClick={handleUpdate} disabled={loading}>
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}
export default Edit;
