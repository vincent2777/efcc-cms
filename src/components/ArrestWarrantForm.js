import { Divider, Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const ArrestWarrantForm = () => {
  return (
    <>
      <Flex bg="#F3F3F3" px={[0, 2, 4, 8]}>
        <StatusCard colorScheme={"red"} status={"Judgement"} />
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
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Suit Number</FormLabel>
            <Input isRequired placeholder="Enter CR Number" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Parties</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Relief Sought</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Command</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Date filed in court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Investigating section</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Trial court</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Out-come of application</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Duration of remand</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Date order was granted</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Next return date</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Next court sitting date</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Flex>
          <Flex direction="column" justifyContent="flex-end">
            <FormLabel>Remark</FormLabel>
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

export default ArrestWarrantForm;
