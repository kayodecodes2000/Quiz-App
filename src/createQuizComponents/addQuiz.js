import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { database } from "../firebase-config";
function AddQuiz() {
  const [userName, setUserName] = React.useState([]);
  const databaseRef = collection(database, "addQuiz");
  React.useEffect(() => {
    const getData = async () => {
      const data = await getDocs(databaseRef);
      setUserName(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  return (
    <div style={{}} className="add-quiz">
      <h5
        style={{
          color: "whitesmoke",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        Custom User's Quiz
      </h5>
      <br />
      {userName.map((user) => (
        <div
          key={user.id}
          className="bg-light shadow p-3"
          style={{ margin: "10px auto" }}
        >
          <Link to={`addQuiz/${user.id}`}>{user.quizWriter}</Link>
        </div>
      ))}
      <center>
        <Link to="/">
          <button className="btn-home" style={{ marginBottom: "20px" }}>
            Back to home
          </button>
        </Link>
      </center>
    </div>
  );
}

export default AddQuiz;
