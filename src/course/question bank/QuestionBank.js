import React, { useMemo } from "react";
import McqBank from "./McqBank";
import styled from "styled-components";
import MultiChoiceBank from "./MultiChoiceBank";
import WrittenBank from "./WrittenBank";

export default function QuestionBank({ questionBank }) {
  console.log(questionBank);
  const questionBankList = useMemo(() => {
    return questionBank.map((question, index) => {
      if (question.Type === "mcq") {
        return <McqBank question={question} order={index + 1} />;
      } else if (question.Type === "multiple choice") {
        return <MultiChoiceBank question={question} order={index + 1} />;
      } else if (question.Type === "written") {
        return <WrittenBank question={question} order={index + 1} />;
      } else {
        return "";
      }
    });
  }, [questionBank]);

  return (
    <Container>
      <Content>{questionBankList}</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
