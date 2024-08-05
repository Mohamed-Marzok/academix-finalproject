import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../redux/notificationsSlice";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import styled from "styled-components";
import { AlertTitle } from "@mui/material";
export default function Notifications() {
  const userId = JSON.parse(localStorage.getItem("user")).Id;
  console.log(userId);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.data);
  console.log(notifications);
  useEffect(() => {
    dispatch(getNotifications(userId));
  }, [userId]);

  const notificationsList = useMemo(() => {
    return notifications.map((notification) => {
      return (
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          <AlertTitle sx={{ fontWeight: "bold" }}>
            {notification.Notification.Subject}
          </AlertTitle>
          {notification.Content}
        </Alert>
      );
    });
  }, [notifications]);
  return (
    <Container>
      <Content>{notificationsList}</Content>{" "}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
  overflow-y: auto !important;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
