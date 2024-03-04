import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const CivilCaseLegalAdviceForm = () => {
  return (
    <>
      <Flex bg="#F3F3F3" px={[0, 2, 4, 8]}>
        <StatusCard colorScheme={"yellow"} status={"Case in Appeal Court"} />
      </Flex>
      <Divider mt={4} />
      <Flex>
        <Flex
          bg="white"
          pl={[0, 2, 4, 8]}
          py={8}
          wrap={"wrap"}
          flexBasis={"65%"}
          grow={1}
          sx={{
            "& > div": {
              py: 3,
              px: 3,
              flexBasis: ["100%", "100%", "100%", "calc(100% / 2)"],
              "& > input, textarea": {
                bg: "#F3F3F3",
                borderRadius: 0,
                border: "none",
              },
            },
          }}
        >
          <Box>
            <FormLabel>Suit Number</FormLabel>
            <Input isRequired placeholder="Enter CR Number" />
          </Box>
          <Box>
            <FormLabel>Parties</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Box>
          <Box>
            <FormLabel>Summary of facts</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date received</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Amount of damages claimed</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Relief Sought</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Presiding Judge</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Command</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Team</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Location of court (state)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Defence counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date filed for court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Status</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date assigned to counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Judgement</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Next adjourned date</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Brief of last proceedings</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Judgement date</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box flexGrow={1}>
            <FormLabel>Remarks</FormLabel>
            <Textarea
              resize={"none"}
              rows={6}
              isRequired
              placeholder="Enter here"
            />
          </Box>
        </Flex>
        <Flex
          flexBasis={"35%"}
          bg="#D7343933"
          p={4}
          alignSelf={"start"}
          display={["none", "none", "flex", "flex"]}
        >
          <Proceedings />
        </Flex>
      </Flex>
    </>
  );
};

export default CivilCaseLegalAdviceForm;
