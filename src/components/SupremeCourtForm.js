import { Divider, Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const SupremeCourtForm = () => {
  return (
    <>
      <Flex bg="#F3F3F3" px={[0, 2, 4, 8]}>
        <StatusCard status={"Legal Advice"} colorScheme={"purple"} />
      </Flex>
      <Divider mt={4} />
      <Flex alignItems={"start"}>
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
              "& > input,  textarea": {
                bg: "#F3F3F3",
                borderRadius: 0,
                border: "none",
              },
            },
          }}
        >
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Suit Number</FormLabel>
            <Input isRequired placeholder="Enter CR Number" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Parties</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Relief sought</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Command</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Presiding judges</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Date filed in court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>

          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Date received</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>

          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Respondent counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Applicant's counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Next court sitting </FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Date assigned to counsel </FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Brief of last proceeding</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Judgement</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Date Judgement Delivered</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Remark</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Outcome of Appeal</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
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

export default SupremeCourtForm;
