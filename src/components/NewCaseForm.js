import {useState} from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addCase } from "../redux/slices/roleSlice";
import { formatDate } from "../utils/format";


const NewCaseForm = ({ setIsEmpty, onClose, setAssignLeads }) => {
  const [caseTitle, setCaseTitle] = useState("")
  const [legalOfficer, setLegalOfficer] = useState("")
  const [caseType, setCaseType] = useState("")

  const dispatch = useDispatch()
  return (
    <Flex as={FormControl} direction={"column"} gap={3}>
      <Box>
        <FormLabel>Case Title</FormLabel>
        <Input
          isRequired
          placeholder="Enter case title"
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
          value={caseTitle}
          onChange={(e) => setCaseTitle(e.target.value)}
        />
      </Box>
      <Box>
        <FormLabel>Case Category</FormLabel>
        <Select
          isRequired
          placeholder="--select case type--"
          bg={"#F3F3F3"}
          color={"#B4B1B1"}
          value={caseType}
          onChange={(e) => setCaseType(e.target.value)}
        >
          <option value="Civil Case">Civil Case</option>
          <option value="Criminal Case">Criminal Case</option>
          <option value="Asset Freezing">Asset Freezing</option>
          <option value="Arrest Warrant">Arrest Warrant</option>
          <option value="Remand Order">Remand Order</option>
          <option value="Court of Appeal">Court of Appeal</option>
          <option value="Supreme Court">Supreme Court</option>
        </Select>
      </Box>

      <Box>
        <FormLabel>Team Leads</FormLabel>
        <Select
          isRequired
          placeholder="--Assign Team Lead--"
          bg={"#F3F3F3"}
          color={"#B4B1B1"}
          value={legalOfficer}
          onChange={(e) => setLegalOfficer(e.target.value)}
        >
          <option value="Korede Lawal">Korede Lawal</option>
          <option value="Amadu Uche">Amadu Uche</option>
          <option value="Ibrahim Bala">Ibrahim Bala</option>
        </Select>
      </Box>

      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="2rem"
        // onClick={() => {p
        //   setIsEmpty(false);
        //   setAssignLeads(true);
        // }}

        onClick={() =>  {
          dispatch(addCase({
            caseTitle, caseType, legalOfficer, status: "Legal Advice", dateCreated: formatDate(new Date())
          }))
          onClose()
        }}
      >
        Save
      </Button>
    </Flex>
  );
};

export default NewCaseForm;
