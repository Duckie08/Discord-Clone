import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "mark",
    isOnline: true,
  },
  {
    id: 2,
    username: "Duck",
    isOnline: false,
  },
  {
    id: 3,
    username: "Tuse",
    isOnline: true,
  },
  {
    id: 4,
    username: "Hieu",
    isOnline: true,
  },
  {
    id: 5,
    username: "Hoai",
    isOnline: false,
  },
];
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});
const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
