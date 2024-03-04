import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { IoMdStar } from "react-icons/io";
import Rating from "react-rating";

const TrainingFeedbackForm = ({ onClose }) => {
  return (
    <>
      <Flex
        justify={"center"}
        sx={{ "& >  span": { display: "flex !important", gap: 3 } }}
        mb={6}
      >
        <Rating
          fullSymbol={<IoMdStar color="#FFC34F" size={"1.625rem"} />}
          emptySymbol={<IoMdStar color="#D9D9D9" size={"1.625rem"} />}
        />
      </Flex>
      <Box bg={"#F3F3F3"}>
        <Text color={"#5C5C5C"} fontWeight="700" px={4} py={2} my={2}>
          Hassan Farooq
        </Text>

        <Textarea
          color={"#5C5C5C"}
          borderColor={"transparent"}
          resize={"none"}
          p={4}
          rows={6}
          value={
            "I recently completed the Legal Research and Writing Techniques Program, and I must say, it was a highly disappointing experience. Despite the promises made by the program, I found it to be a complete waste of my time and money."
          }
        />
      </Box>
      <Button
        w="full"
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="1.5rem"
        onClick={() => {
          onClose();
        }}
      >
        Done
      </Button>
    </>
  );
};

export default TrainingFeedbackForm;
