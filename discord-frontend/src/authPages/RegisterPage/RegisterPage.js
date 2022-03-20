import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInput from "./RegisterPageInput";
import { validateRegisterForm } from "../../shared/utils/validators";
import { getActions } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ register }) => {
  const history = useNavigate();

  const [mail, setMail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      password,
      username,
    };
    register(userDetails, history);
    console.log("register");
    console.log(mail);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        userName={username}
        setUsername={setUserName}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionToProps)(RegisterPage);
