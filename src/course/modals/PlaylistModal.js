import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createPlayList } from "../../redux/playListSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const extractPlaylistId = (url) => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get("list");
};

export default function PlaylistModal({ open, handleClose }) {
  const { id } = useParams();
  const [playlistForm, setPlaylistForm] = useState({
    courseId: id,
    playList: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(createPlayList(playlistForm));
      handleClose();
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!playlistForm.playList.trim()) errors.playList = "Link is required";
    return errors;
  };

  const handleLinkChange = (e) => {
    const link = e.target.value;
    const playlistId = extractPlaylistId(link);
    setPlaylistForm({ ...playlistForm, playList: playlistId });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2
            id="modal-modal-title"
            style={{ marginBottom: "20px", color: "#471fade3" }}
          >
            New Play List
          </h2>

          <TextField
            id="outlined-basic-name"
            label="Link"
            variant="outlined"
            sx={{ width: "100%" }}
            required
            error={!!formErrors.playList}
            helperText={formErrors.playList}
            onChange={handleLinkChange}
          />
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: "100%",
              marginTop: "10px",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
