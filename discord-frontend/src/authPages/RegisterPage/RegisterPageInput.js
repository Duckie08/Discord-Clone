import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInput = ({
  mail,
  setMail,
  password,
  setPassword,
  username,
  setUsername,
  isFormValid,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email address"
        type="text"
        placeholder="Enter email addres"
      />

      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Email Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInput;
