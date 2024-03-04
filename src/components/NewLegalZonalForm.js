import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";

const NewLegalZonalForm = ({ setIsEmpty, onClose }) => {
  return (
    <Flex as={FormControl} direction={"column"} gap={3}>
      <Box>
        <FormLabel>Category</FormLabel>
        <Select
          isRequired
          placeholder="--select category--"
          bg={"#F3F3F3"}
          color={"#B4B1B1"}
        >
          <option value="option2">Legal Team</option>
          <option value="option2">Zonal Office</option>
        </Select>
      </Box>

      <Box>
        <FormLabel>Name</FormLabel>
        <Input
          isRequired
          placeholder="Enter a name"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>

      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="2rem"
        onClick={() => {
          onClose();
          return setIsEmpty(false);
        }}
      >
        Save
      </Button>
    </Flex>
  );
};

export default NewLegalZonalForm;
