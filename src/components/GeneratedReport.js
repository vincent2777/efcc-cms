import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import ReportsTable from "./ReportsTable";

const reports = [
  {
    suitNumber: "12/09/2023",
    parties: "Adegoke / Jamiu",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Abuja",
    court: "Abuja CT",
    judge: "Bankole Sanusi",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Miss Jacquelyn Zemlak",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "case closed",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Emmanuel / Isaac",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Enugu",
    court: "Enugu CT",
    judge: "Akunna Aigbiniode",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Jermaine Bruen",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "on-going",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Obioma / Titi ",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Abuja",
    court: "Abuja CT",
    judge: "Titilayo Onyinyechukwu",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Mr. Ronnie Moore",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "on-going",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Remilekun / Muyiwa",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Port Harcourt",
    court: "Port Harcourt CT",
    judge: "Danjuma Abiodun",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Margaret Connelly",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "on-going",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Bankole  / Tope ",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Abuja",
    court: "Abuja CT",
    judge: "Adegoke Aderinsola",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Kimberly Greenfelder",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "case closed",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Simisola / Ogunbanwo",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Lagos",
    court: "Lagos CT",
    judge: "Akande Abosede",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Joan Homenick",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "on-going",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Zainab / Simisola",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Benin",
    court: "Benin CT",
    judge: "Adegoke Aderinsola",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Candace Beahan",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "case closed",
  },
  {
    suitNumber: "12/09/2023",
    parties: "Chizoba / Nojeem",
    reliefSought: "Sum refund",
    dateReceived: "04/12/2023",
    dateAssigned: "17/12/2023",
    command: "Uyo",
    court: "Uyo CT",
    judge: "Chinedu Gbogboade",
    outcome: "Judgement Delivered",
    judgement: "Fine and Imprisonment",
    remark:
      "The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    defenseCounsel: "Dr. Milton Herman",
    summaryOfFacts:
      "Throughout this trial, we have rigorously adhered to the principles of justice, ensuring that every piece of evidence and witness testimony was thoroughly examined. The intricacies of financial transactions were analyzed in-depth, and we have exposed several discrepancies in the prosecution's case.",
    status: "case closed",
  },
];

const GeneratedReport = () => {
  const [rows] = useState(reports);
  const [searchInput, setSearchInput] = useState("")

  function filterByValue() {
    return rows.filter((obj) =>
      Object.keys(obj).some((prop) => {
        return obj[prop].toLowerCase().includes(searchInput.toLowerCase());
      })
    );
  }

  return (
    <Flex direction={"column"} flexGrow={"100%"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
        gap={2}
      >
        <Text
          fontSize={"0.875rem"}
          fontStyle={"italic"}
          color={"#898989"}
          flexShrink={1}
        >
          Showing report for Friday April 27th, 2023 - 18th 30th April, 2023
        </Text>

        <Flex gap={4} direction={["column", "row", "row"]}>
          <InputGroup bg={"#C6C6C640"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input placeholder="Search Reports" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          </InputGroup>
          <Button
            flexShrink={0}
            borderRadius={"5px"}
            bg={"brand.primary"}
            color={"white"}
            leftIcon={<AiOutlineDownload />}
          >
            Download Report
          </Button>
        </Flex>
      </Flex>
      <Divider my={4} />
      <ReportsTable reports={filterByValue()} />
    </Flex>
  );
};

export default GeneratedReport;
