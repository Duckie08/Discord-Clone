import React from "react";
import { styled } from "@mui/system";
import PendingInvitationListItem from "./PendingInvitationListItem";

const DUMM_INVITATIONS = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      mail: "dummmy@gmail.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "Mark",
      mail: "dummmy@gmail.com",
    },
  },
  {
    _id: "3",
    senderId: {
      username: "Mark",
      mail: "dummmy@gmail.com",
    },
  },
];
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMM_INVITATIONS.map((invitation) => (
        <PendingInvitationListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
