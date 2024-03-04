import { Box, Button, Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React from "react";

const NewTrainingForm = ({setShowAssignForm}) => {
  return (
    <Flex as={FormControl} direction={"column"} gap={3}>
      <Box>
        <FormLabel>Training Name</FormLabel>
        <Input
          isRequired
          placeholder="Enter training name"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Type of Training</FormLabel>
        <Select
          isRequired
          placeholder="--select case category--"
          bg={"#F3F3F3"}
          color={"#B4B1B1"}
        >
          <option value="option2">Training 1</option>
          <option value="option1">Training 2</option>
          <option value="option1">Training 3</option>
          <option value="option1">Training 4</option>
        </Select>
      </Box>

      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="2rem"
        onClick={() => setShowAssignForm(true)}
      >
        Save
      </Button>
    </Flex>
  );
};

export default NewTrainingForm;
