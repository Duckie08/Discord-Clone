import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };
  const getFormValidMessage = () => {
    return "Username should contains between 3 and 12 character and password shoud contain 6 to 12 characters.";
  };

  const getFormNotValidMessage = () => {
    return "Press to register";
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ margin: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already has an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectedHandler={handlePushToLoginPage}
      ></RedirectInfo>
    </>
  );
};

export default RegisterPageFooter;
