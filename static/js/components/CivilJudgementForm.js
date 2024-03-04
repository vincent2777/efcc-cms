import { Box, Divider, Flex, FormLabel, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const CivilJudgementForm = () => {
  const [judgement, setJudgement] = useState("null");

  return (
    <>
      <Flex bg="#F3F3F3" px={[0, 2, 4, 8]}>
        <StatusCard status={"Case closed"} colorScheme={"red"} />
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
              "& > input, textarea": {
                bg: "#F3F3F3",
                borderRadius: 0,
                border: "none",
              },
            },
          }}
        >
          <Box>
            <FormLabel>Date assigned to counsel</FormLabel>
            <Select
              isRequired
              placeholder="--select--"
              value={judgement}
              defaultValue={"struck-out"}
              onChange={(e) => setJudgement(e.target.value)}
            >
              <option value="struck-out">Fine</option>
              <option value="dismissed-in-favour-of">Dismissed-in-favour-of</option>
              <option value="damages-awarded">Damages Awarded</option>
              <option value="cost-awarded">Cost-awarded</option>
              <option value="settled">Settled</option>
              <option value="dismissed-against">Dismissed against</option>
              <option value="withdrawn">Withdrawn</option>
            </Select>
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

export default CivilJudgementForm;
