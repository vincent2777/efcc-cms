import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Proceedings from "./Proceedings";
import StatusCard from "./StatusCard";

const FineOptions = () => {
  return (
    <>
      <Box>
        <FormLabel>Date of judgement</FormLabel>
        <Input
          isRequired
          placeholder="Enter case title"
          type="date"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Judgement fine beneficiary</FormLabel>
        <Input
          isRequired
          placeholder="Enter here"
          value={"John Madueke Akin"}
        />
      </Box>
      <Box>
        <FormLabel>Judgement fine</FormLabel>
        <Input isRequired placeholder="Enter here" value={"N690,000,000.00"} />
      </Box>
      <Box flexGrow={1}>
        <FormLabel>Remark</FormLabel>
        <Textarea
          resize={"none"}
          rows={6}
          isRequired
          placeholder="Enter here"
          value={
            "Your Honor, today's proceedings have been instrumental in shedding light on the intricate details of the alleged money embezzlement case. We diligently presented evidence and testimonies that strongly support our hypothesis and demonstrate our client's innocence. The defense firmly maintains that the prosecution's claims lack substantial merit and fail to establish any direct link between our client and the embezzled funds."
          }
        />
      </Box>
    </>
  );
};
const FineAndImprisonmentOptions = () => {
  return (
    <>
      <Box>
        <FormLabel>Date of judgement</FormLabel>
        <Input
          isRequired
          placeholder="Enter case title"
          type="date"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>No. of years sentenced</FormLabel>
        <Input isRequired placeholder="Enter here" value={"3 years"} />
      </Box>
      <Box>
        <FormLabel>Judgement fine</FormLabel>
        <Input isRequired placeholder="Enter here" value={"N690,000,000.00"} />
      </Box>
      <Box flexGrow={1}>
        <FormLabel>Remark</FormLabel>
        <Textarea
          resize={"none"}
          rows={6}
          isRequired
          placeholder="Enter here"
          value={
            "Your Honor, today's proceedings have been instrumental in shedding light on the intricate details of the alleged money embezzlement case. We diligently presented evidence and testimonies that strongly support our hypothesis and demonstrate our client's innocence. The defense firmly maintains that the prosecution's claims lack substantial merit and fail to establish any direct link between our client and the embezzled funds."
          }
        />
      </Box>
    </>
  );
};

const CommunityServiceOptions = () => {
  return (
    <>
      <Box>
        <FormLabel>Date of judgement</FormLabel>
        <Input
          isRequired
          placeholder="Enter case title"
          type="date"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Remark</FormLabel>
        <Textarea
          resize={"none"}
          rows={6}
          isRequired
          placeholder="Enter here"
          value={
            "Your Honor, today's proceedings have been instrumental in shedding light on the intricate details of the alleged money embezzlement case. We diligently presented evidence and testimonies that strongly support our hypothesis and demonstrate our client's innocence. The defense firmly maintains that the prosecution's claims lack substantial merit and fail to establish any direct link between our client and the embezzled funds."
          }
        />
      </Box>
      <Box>
        <FormLabel>Years of community service</FormLabel>
        <Input isRequired placeholder="Enter here" value={"3 years"} />
      </Box>
    </>
  );
};

const ImprisonmentOptions = () => {
  return (
    <>
      <Box>
        <FormLabel>Date of judgement</FormLabel>
        <Input
          isRequired
          placeholder="Enter case title"
          type="date"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>No. of years sentenced</FormLabel>
        <Input isRequired placeholder="Enter here" value={"3 years"} />
      </Box>
      <Box>
        <FormLabel>Remark</FormLabel>
        <Textarea
          resize={"none"}
          rows={6}
          isRequired
          placeholder="Enter here"
          value={
            "Your Honor, today's proceedings have been instrumental in shedding light on the intricate details of the alleged money embezzlement case. We diligently presented evidence and testimonies that strongly support our hypothesis and demonstrate our client's innocence. The defense firmly maintains that the prosecution's claims lack substantial merit and fail to establish any direct link between our client and the embezzled funds."
          }
        />
      </Box>
    </>
  );
};

const CriminalJudgementForm = () => {
  const [judgement, setJudgement] = useState("null");

  let options;

  switch (judgement) {
    case "fine":
      options = <FineOptions />;
      break;
    case "community-service":
      options = <CommunityServiceOptions />;
      break;
    case "imprisonment":
      options = <ImprisonmentOptions />;
      break;
    case "fine-and-imprisonment":
      options = <FineAndImprisonmentOptions />;
      break;
    case "discharged":
      options = null;
      break;
    case "discharged-and-acquitted":
      options = null;
      break;
    default:
      break;
  }

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
              "& > input, textarea, select": {
                bg: "#F3F3F3",
                borderRadius: 0,
                border: "none",
              },
            },
          }}
        >
          <Box>
            <FormLabel>Verdict</FormLabel>
            <Select
              isRequired
              placeholder="--select--"
              value={judgement}
              onChange={(e) => setJudgement(e.target.value)}
            >
              <option value="fine">Fine</option>
              <option value="community-service">Community service</option>
              <option value="imprisonment">Imprisonment</option>
              <option value="discharged">Discharged</option>
              <option value="discharged-and-acquitted">
                Discharged and Acquitted
              </option>
              <option value="fine-and-imprisonment">
                Fine and Imprisonment
              </option>
            </Select>
          </Box>

          {options}
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

export default CriminalJudgementForm;
