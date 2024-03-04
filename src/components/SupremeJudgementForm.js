import { Divider, Flex, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const SupremeJudgementForm = () => {
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
            <FormLabel>Date of Judgement</FormLabel>
            <Input isRequired placeholder="Enter CR Number" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Verdict</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Case of purpose</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"}>
            <FormLabel>Nature of Trial</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Flex>
          <Flex direction={"column"} justify={"flex-end"} grow={1}>
            <FormLabel>Remark</FormLabel>
            <Textarea
              resize={"none"}
              rows={6}
              isRequired
              placeholder="Enter here"
            />
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

export default SupremeJudgementForm;
