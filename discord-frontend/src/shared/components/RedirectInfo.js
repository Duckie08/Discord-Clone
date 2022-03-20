import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: "500",
  cursor: "pointer",
});
const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectedHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      styled={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectedHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
