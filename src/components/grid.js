import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function BasicGrid({
  options,
  correctAnswer,
  nextQuestion,
  setResults,
  results,
}) {
  const handleOption = (option) => {
    if (correctAnswer === option) {
      setResults(results + 1);
      toast.success("Right Answer", {
        autoClose: 500,
      });
    } else {
      setResults(results - 1);
      toast.error("Wrong Answer!", {
        autoClose: 500,
      });
    }
    nextQuestion();
  };
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "whitesmoke", cursor: "pointer" }}
    >
      <ToastContainer />
      <Grid container spacing={1}>
        <Grid
          style={{
            marginLeft: "",
            width: "90%",
            textAlign: "center",
            padding: "5px",
            margin: "10px auto",
          }}
          className="options-grid"
        >
          <Item
            className="options-grid"
            style={{
              fontWeight: "bolder",
              fontSize: "17px",
              fontStyle: "italic",
            }}
            onClick={() => {
              handleOption(options);
            }}
          >
            {options}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
