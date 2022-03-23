import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import "./friendButton.css";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  marginTop: "10px ",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  bgcolor: "#3ba55d ",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="friend-button">
      <CustomPrimaryButton
        className="friend-button"
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </div>
  );
};

export default AddFriendButton;
