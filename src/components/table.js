import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function BasicTable({ person, scoreBoardData }) {
  return (
    <TableContainer component={Paper} style={{ background: "whitesmoke" }}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                position: "relative",
                right: "",
                fontWeight: "bolder",
                color: "red",
                fontSize: "14px",
                marginRight: "40px",
              }}
            >
              playerName
            </TableCell>
            <TableCell
              style={{
                position: "relative",
                right: "230px",
                fontWeight: "bolder",
                color: "red",
              }}
            >
              Difficulty
            </TableCell>
            <TableCell
              style={{
                position: "relative",
                right: "250px",
                fontWeight: "bolder",
                color: "red",
              }}
            >
              Category
            </TableCell>
            <TableCell
              style={{
                position: "relative",
                right: "220px",
                fontWeight: "bolder",
                color: "red",
              }}
            >
              Final score
            </TableCell>
          </TableRow>
          {scoreBoardData.map((person) => {
            return (
              <TableBody style={{ fontSize: "50px" }}>
                <TableRow
                  key={person.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ marginRight: "" }}
                >
                  <TableCell component="th" scope="row"></TableCell>
                  <b>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      {person.playerName}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      {person.quizDifficulty}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      {person.quizCategory}
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }}>
                      {person.finalScore}
                    </TableCell>
                  </b>
                </TableRow>
              </TableBody>
            );
          })}
        </TableHead>
      </Table>
    </TableContainer>
  );
}
