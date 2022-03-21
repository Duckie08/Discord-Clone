import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();
  const handlePushToRegisterPage = () => {
    history.push("/register");
  };
  const getFormValidMessage = () => {
    return "Enter correct email adress and password should contains between 6 and 12 characters";
  };

  const getFormNotValidMessage = () => {
    return "Press to log in";
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Login in"
            additionalStyles={{ margin: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectedHandler={handlePushToRegisterPage}
      ></RedirectInfo>
    </>
  );
};

export default LoginPageFooter;
