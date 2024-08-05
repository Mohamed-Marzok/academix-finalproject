import React from "react";
import styled from "styled-components";
import {
  Card,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Stack,
} from "@mui/material";

export default function MultiChoiceBank({ question, order }) {
  const { Text, Options, CorrectAnswer, Explanation } = question;
  const optionsArray = Options.split("/").filter((option) => option);
  const correctAnswersArray = CorrectAnswer.split("/").filter(
    (answer) => answer
  );

  const isCorrectAnswer = (index) =>
    correctAnswersArray.includes(index.toString());

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
        <FormGroup>
          {optionsArray.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={isCorrectAnswer(index)} disabled />}
              label={option}
            />
          ))}
        </FormGroup>
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
