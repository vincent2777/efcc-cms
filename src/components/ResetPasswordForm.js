import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const ResetPasswordForm = ({ onClose }) => {
  return (
    <Flex as={FormControl} direction={"column"} gap={3}>
      <Box>
        <FormLabel>Current Password</FormLabel>
        <Input
          isRequired
          placeholder="Enter your current password"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>New Password</FormLabel>
        <Input
          isRequired
          placeholder="Enter New password"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Retype Password</FormLabel>
        <Input
          isRequired
          placeholder="Retype New password"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>

      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="2rem"
        onClick={onClose}
      >
        Save
      </Button>
    </Flex>
  );
};

export default ResetPasswordForm;
