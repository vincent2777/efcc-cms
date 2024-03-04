import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";
import { AiFillFile } from "react-icons/ai";

const CriminalCaseLegalAdviceForm = () => {
  const inputRef = useRef();
  return (
    <>
      <Flex bg="#F3F3F3" px={[0, 2, 4, 8]}>
        <StatusCard status={"Legal Advice"} colorScheme={"purple"} />
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
              "& > input, select": {
                bg: "#F3F3F3",
                borderRadius: 0,
                border: "none",
              },
            },
          }}
        >
          <Box>
            <FormLabel>CR Number</FormLabel>
            <Input isRequired placeholder="Enter CR Number" />
          </Box>
          <Box>
            <FormLabel>Charge Number</FormLabel>
            <Input isRequired placeholder="Enter Charge Number" />
          </Box>
          <Box>
            <FormLabel>Number of Suspect(s)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Name of complainant(s)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Nature of offence(s)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Gender of suspect</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Amount involved (in Naira)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Amount involved (Other currency)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Property involved</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Investigating section</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date received for advice</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Date assigned to counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Investigating officer(s)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>BVN (Suspect)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>NIN (Suspect)</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel htmlFor="writeUpFile">Passport photograph</FormLabel>
            <InputGroup alignItems={"center"} bg={"#F3F3F3"}>
              <InputLeftElement
                pointerEvents="none" position={"static"}
                children={<AiFillFile />}
              />
              <input
                type="file"
                accept={"*img/png"}
                name={"file"}
                ref={inputRef}
                inputRef={inputRef}
                style={{ display: "none" }}
              />
              <Button
                pl={2}
                bg={"transparent"}
                color={"#718096"}
                size={"sm"}
                onClick={() => inputRef.current.click()}
              >
                Click here to upload
              </Button>
            </InputGroup>
            {/* <FormErrorMessage>{invalid}</FormErrorMessage> */}
          </Box>
          <Box>
            <FormLabel>Case purpose</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Team</FormLabel>
            <Select isRequired placeholder="--select team--">
              <option value="fine">Teamm 1</option>
              <option value="community-service">Team 2</option>
              <option value="imprisonment">Team 3</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Prosecuting counsel</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Legal advice (opinion)</FormLabel>
            <Select isRequired placeholder="--select status--">
              <option value="fine">Settle out of court</option>
              <option value="community-service">
                Further investigation Required
              </option>
              <option value="imprisonment">File closes</option>
              <option value="discharged">Case file returned</option>
              <option value="discharged-and-acquitted">Proceed to trial</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Date legal advice was given</FormLabel>
            <Input isRequired placeholder="Enter here" />
          </Box>
          <Box>
            <FormLabel>Legal advice (other) document</FormLabel>
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

export default CriminalCaseLegalAdviceForm;
