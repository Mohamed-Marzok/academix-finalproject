import React from "react";
import styled from "styled-components";
import {
  Card,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";

export default function McqBank({ question, order }) {
  const { Text, Options, CorrectAnswer, Explanation } = question;
  const optionsArray = Options.split("/").filter((option) => option);

  return (
    <QuestionCard>
      <Header
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <QuestionOrder>Question {order}</QuestionOrder>
        <Points>points: {question.Points}</Points>
      </Header>
      <QuestionText variant="h6">{Text}</QuestionText>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Options</FormLabel> */}
        <RadioGroup aria-label="options" name="options">
          {optionsArray.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              checked={index.toString() === CorrectAnswer}
              disabled
            />
          ))}
        </RadioGroup>
      </FormControl>
      {Explanation && (
        <ExplanationText variant="body2">{Explanation}</ExplanationText>
      )}
    </QuestionCard>
  );
}
const Header = styled(Stack)`
  margin-bottom: 20px;
`;

const QuestionOrder = styled.h3`
  color: #007bff;
`;

const Points = styled.p`
  color: #6c757d;
`;
const QuestionCard = styled(Card)`
  padding: 20px;
  margin: 20px 0;
  width: 100%;
`;

const QuestionText = styled(Typography)`
  margin-bottom: 20px;
`;

const ExplanationText = styled(Typography)`
  margin-top: 20px;
  color: grey;
`;
