import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Container, flexbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import BASE_URL from "../constant";

function Login() {
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isAlert, setIsAlert] = useState(false);
  const [show2, setShow2] = useState(false);

  const [isLoadinng, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // msggg dekhoooo

  useEffect(() => {
    let loginData = localStorage.getItem("loginData");
    loginData = JSON.parse(loginData);
    if (loginData && loginData.isLogged) {
      navigate("/home");
    } else {
    }
  }, []);

  // const history = useHistory();

  const handleClick2 = () => setShow2(!show2);

  const submitHandler = () => {
    if (name.trim() == "" || confirmPassword.trim() == "") {
      setIsAlert(true);
      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    } else {
      // console.log(name, confirmPassword)
      login();
    }
  };

  const login = async () => {
    setIsLoading(true);
    try {
      let res = await axios.post(`${BASE_URL}/login`, {
        login_id: name,
        password: confirmPassword,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem(
          "loginData",
          JSON.stringify({ isLogged: true, token: res.data.access_token })
        );
        navigate("/home");
      } else {
        localStorage.setItem(
          "loginData",
          JSON.stringify({ isLogged: false, token: null })
        );
      }

      if (true) {
        // move to next screen
        // history.push("/");
      } else {
      }
    } catch (error) {
      console.log(error, "error in login");
      // something went wrong
    }
    setIsLoading(false);
  };

  return (
    <Container fontSize={20}>
      <VStack spacing="5px " className="loginForm">
        {/* <Alert isVisible={isAlert} /> */}
        <h1 style={{ paddingBottom: "0.3em" }}>Login</h1>
        <FormControl id="first-name" isRequired>
          <FormLabel>Login ID</FormLabel>
          <Input
            placeholder="Enter your login_id"
            width="300px"
            height="30px"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show2 ? "text" : "password"}
              placeholder="Enter Your password"
              width="300px"
              height="30px"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </InputGroup>
        </FormControl>
        <Button
          isLoading={isLoadinng}
          loadingText="Please Wait..."
          colorScheme="blue"
          width="100%"
          height={39}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>
        {isAlert && (
          <h1 style={{ color: "red", fontWeight: 700 }}>Enter All Fields!</h1>
        )}
      </VStack>
    </Container>
  );
}
export default Login;
