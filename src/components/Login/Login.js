import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button style={{
        width: "200px",
        height: "50px",
        backgroundColor: "#FFF",
        zIndex: 99999,
        position: "relative",
        display: "none"
    }} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;