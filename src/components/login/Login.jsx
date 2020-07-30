import React from "react";
import { ReactComponent as LoginSvg } from "../../assets/login.svg";
import { PrimaryButton, TextField, Stack, DocumentCard } from "@fluentui/react";
import "@fluentui/react/dist/css/fabric.css";
import "./login.css";

const Login = () => {
  const stackTokens = { childrenGap: 5 };

  return (
    <div className="ms-Grid root" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8 login--sideleft">
          <div className="login--img">
            <LoginSvg />
          </div>
        </div>
        <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 login--sideright">
          <div className="main-div">
            <Stack tokens={stackTokens}>
              <h4 className="title ms-fontSize-20">Login to continue</h4>
              <DocumentCard className="form">
                <TextField label="Email " required />
                <TextField label="Password " required />
                <PrimaryButton className="btn-login" href="/dashboard">
                  Login
                </PrimaryButton>
              </DocumentCard>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
