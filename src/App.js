// import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../src/createQuizComponents/form";
import Home from "../src/Pages/home";
import PlayQuiz from "./quizComponents/playQuiz";
import Quiz from "../src/quizComponents/quiz";
import Result from "./quizScoreComponents/result";
import { app } from "./firebase-config";
import AddQuiz from "./createQuizComponents/addQuiz";
import SingleQuiz from "./createQuizComponents/singleQuiz";
import Edit from "./createQuizComponents/edit";
import Score from "./createQuizComponents/Score";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/quiz" element={<Form />} />
          <Route path="/take/quiz" element={<Quiz />} />
          <Route path="/play" element={<PlayQuiz />} />
          <Route path="/quiz-result" element={<Result />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/addQuiz" element={<AddQuiz />} />
          <Route path="/addQuiz/addQuiz/:id" element={<SingleQuiz />} />
          <Route path="/edit/:editID" element={<Edit />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
