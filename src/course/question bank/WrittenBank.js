import React, { useState } from "react";
import styled from "styled-components";
import { Card, Typography, TextField, Stack } from "@mui/material";

export default function WrittenBank({ question, order }) {
  const { Text, Explanation } = question;
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

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
      <AnswerField
        label="Your Answer"
        multiline
        rows={4}
        variant="outlined"
        disabled
        value={answer}
        onChange={handleAnswerChange}
      />
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

const AnswerField = styled(TextField)`
  width: 100%;
  margin-top: 20px;
`;
