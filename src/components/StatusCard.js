import { Badge, Flex, Text } from "@chakra-ui/react";
import React from "react";

const StatusCard = ({ status, colorScheme }) => {
  return (
    <Flex bg="white" p={2} gap={4} borderRadius={"5px"}>
      <Text>Current case status:</Text>
      <Badge colorScheme={colorScheme} display={"flex"} alignItems={"center"}>
        {status}
      </Badge>
    </Flex>
  );
};

export default StatusCard;
