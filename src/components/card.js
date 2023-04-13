import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "../components/grid"
export default function OutlinedCard({questionArray,counter,nextQuestion,setResults,results}) {
  
  return (
    <Box sx={{ minWidth: 275 }} style={{padding:"10px"}}>
      {questionArray.length > 0 ? (<Card variant="outlined">
      <CardContent>
      <Typography style={{fontWeight:"bolder",fontStyle:"initial",fontSize:"20px",textTransform:"capitalize"}} color="text.secondary" gutterBottom>
        Question:{questionArray[counter - 1].question}
      </Typography>
    
      <Typography style={{fontWeight:"bold",fontSize:"15px",textTransform:"capitalize",marginBottom:"15px"}} color="text.secondary">
        Category:{questionArray[counter - 1].category}
      </Typography>
      {[...questionArray[counter - 1].incorrect_answers,questionArray[counter - 1].correct_answer].map((options)=>{
        return(
          <Grid options={options}
          nextQuestion={nextQuestion}
          setResults = {setResults}
          results={results}
          correctAnswer = {questionArray[counter - 1].correct_answer}
          />
          
        )
      })}
    </CardContent>
      </Card>) :
      
      (
        "no data"
      )}
      
    </Box>
  );
}
