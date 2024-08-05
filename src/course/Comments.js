import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, InputBase, Paper, Stack } from "@mui/material";
import { createComment } from "../redux/commentsSlice";
import { useParams } from "react-router-dom";
export default function Comments({ comments, postId }) {
  const loading = useSelector((state) => state.comment.loading);
  const userId = JSON.parse(localStorage.getItem("user")).Id;
  const dispatch = useDispatch();
  const [commentForm, setCommentForm] = useState({
    discussionId: postId,
    applicationUserId: userId,
    content: "",
  });
  const handleSendBtn = () => {
    dispatch(createComment(commentForm));
    setCommentForm({ ...commentForm, content: "" });
  };
  const commentsList = useMemo(() => {
    return comments?.map((comment) => {
      return (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ width: "100%" }}
        >
          {comment?.Content}
        </Alert>
      );
    });
  }, [comments]);
  return (
    <Stack>
      <CommentsContainer>
        {loading ? <CircularProgress color="success" /> : commentsList}
      </CommentsContainer>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add Student Grade"
          inputProps={{ "aria-label": "add student grade" }}
          value={commentForm.content}
          onChange={(e) =>
            setCommentForm({ ...commentForm, content: e.target.value })
          }
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="add"
          onClick={handleSendBtn}
        >
          <SendIcon color="success" />
        </IconButton>
      </Paper>
    </Stack>
  );
}

const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
