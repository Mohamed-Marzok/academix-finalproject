import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import coursesReducer from "./CoursesSlice";
import assignmentsReducer from "./assignmentsSlice";
import examsReducer from "./examsSlice";
import lecturesReducer from "./lecturesSlice";
import questionsReducer from "./createQuestionsSlice";
import postsReducer from "./PostSlice";
import examReducer from "./examSlice";
import playListReducer from "./playListSlice";
import examGradeReducer from "./gradeExam";
import assGradeReducer from "./assignmentGradeSlice";
import questionBankReducer from "./questionsBankSlice";
import notificationsReducer from "./notificationsSlice";
import commentReducer from "./commentsSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    courses: coursesReducer,
    assignments: assignmentsReducer,
    exams: examsReducer,
    lectures: lecturesReducer,
    questions: questionsReducer,
    posts: postsReducer,
    exam: examReducer,
    examGrade: examGradeReducer,
    assGrade: assGradeReducer,
    playList: playListReducer,
    questionBank: questionBankReducer,
    notifications: notificationsReducer,
    comment: commentReducer,
  },
});
