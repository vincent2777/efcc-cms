import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const DetailsCard = ({ name, number, borderColor,bgColor }) => {
  return (
    <Flex
      flexBasis={["100%", "calc(100% / 2)", "calc(100% / 2)", "calc(100% / 4)"]}
      px={2}
      pt={2}
    >
      <Flex
        direction={"column"}
        borderBottom={`5px solid ${borderColor}`}
        bgColor={bgColor}
        px={4}
        py={2}
        grow={1}
      >
        <Flex textTransform={"uppercase"} color={"#5C5C5C"}>
          {name}
        </Flex>
        <Flex>
          <Text fontWeight={"700"} fontSize={"3rem"}>
            {number}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DetailsCard;
