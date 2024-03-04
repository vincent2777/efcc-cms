import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { signInSchema } from "../utils/formValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { addLoginUser } from "../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users);

  console.log(users);

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/dashboard");
    }
  }, [auth?.user, navigate]);

  const handleSubmit = async (values) => {
    console.log(values);
    const res = users.find((user) => user?.email === values.email);
    console.log(res);
    if (res) {
      dispatch(addLoginUser(res));
     return  navigate("/dashboard");
    } else {
      setError("Invalid Login Credential");
    }

  };

  return (
    <Flex w="full" h="100vh" overflow={"hidden"}>
      <Flex
        basis={[0, 0, "40%", "50%"]}
        h="full"
        shrink={"0"}
        position={"relative"}
        bg={"blackAlpha.900"}
      >
        <Image
          src="/EFCC-Nigeria.png"
          w="full"
          h="full"
          objectFit={"fill"}
          position={"absolute"}
          opacity={"0.5"}
          top={0}
        />
      </Flex>

      <Flex
        h={"full"}
        w="full"
        justify={"center"}
        alignItems={"center"}
        position={"relative"}
        bgColor={"#6e0d13"}
      >
        <Flex w={["90%", "80%", "90%", "55%"]} position={"relative"}>
          <Image
            src="/EFCC Logo.png"
            w={"92.53px"}
            position={"absolute"}
            left={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
          />

          
       
          <Flex
            direction={"column"}
            bg={"white"}
            width={"full"}
            px={"1.5rem"}
            py="2rem"
          >
            <Flex justify={"space-between"} alignItems={"center"} mb="1.5rem">
              <Text fontWeight={"700"} fontSize={"1.8rem"}>
                Login
              </Text>
            </Flex>

            {error && (
            <Alert status="error" className="mt-3">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}

            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={signInSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ errors, touched, handleBlur, handleChange }) => (
                <Form mt={4}>
                  <FormControl
                    isInvalid={errors.email && touched.email}
                    mb={5}
                    color="black"
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Enter email address"
                      bgColor={"#F3F3F3"}
                      borderRadius={0}
                      borderColor={"transparent"}
                      mb="1rem"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.email && errors.email && (
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl
                    isInvalid={errors.password && touched.password}
                    mb={5}
                    color="black"
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="Enter password"
                      bgColor={"#F3F3F3"}
                      borderRadius={0}
                      borderColor={"transparent"}
                      mb="1rem"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.password && errors.password && (
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    )}
                  </FormControl>

                  <Button
                    color={"white"}
                    bgColor={"#6e0d13"}
                    borderRadius="none"
                    mb="1rem"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>

            <Flex
              justify={"space-between"}
              alignItems={"center"}
              fontSize={"sm"}
            >
              <Text>Forgot password</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
