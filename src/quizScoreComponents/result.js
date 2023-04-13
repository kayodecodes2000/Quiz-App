import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Table from "../components/table";
function Result() {
  const databaseRef = collection(database, "LeadersBoard");
  const { state } = useLocation();
  const [finalResults, setFinalResults] = useState(0);
  const [scoreBoardData, setScoreBoardData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const { finalResult } = state;
    setFinalResults(finalResult);
    getDocs(databaseRef);
    getData();
  }, []);
  const getData = async () => {
    const data = await getDocs(databaseRef);
    setScoreBoardData(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    ).sort((a, b) => parseFloat(b.finalScore) - parseFloat(a.finalScore));
  };
  const playAgain = () => {
    navigate("/take/quiz");
  };
  return (
    <div>
      <Fragment>
        <Helmet>
          <title>Quiz-Results</title>
        </Helmet>
      </Fragment>
      <center>
        <h2
          style={{
            marginTop: "10px",
            fontFamily: "sans-serif",
            borderBottom: "4px solid orangered",
          }}
        >
          Result
        </h2>
        <h2 style={{ fontSize: "30px" }}>Final score is:{finalResults}</h2>
        <button onClick={playAgain} style={{ marginBottom: "20px" }}>
          PlayAgain
        </button>

        <h2>Score Board</h2>
        <div style={{ width: "90%" }}>
          <Table scoreBoardData={scoreBoardData} />
        </div>
      </center>
    </div>
  );
}

export default Result;
