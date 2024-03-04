import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const CriminalAppealCourtForm = () => {
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
              "& > input": {
                bg: "#F3F3F3",
                borderRadius: 0,
                border: "none",
              },
            },
          }}
        >
          <Box>
            <FormLabel>Date assigned to counsel</FormLabel>
            <Input isRequired placeholder="Enter CR Number" />
          </Box>
          <Box>
            <FormLabel>Team</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Box>
          <Box>
            <FormLabel>Prosecuting Counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Number of counts</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date filed in court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date of arraignment</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Prosecuting Court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Presiding Judge</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Location of Court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Charge Number</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Legal Officer Assigned</FormLabel>
            <Input isRequired placeholder="Enter here" />
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

export default CriminalAppealCourtForm;
