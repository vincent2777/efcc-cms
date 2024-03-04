import {
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import TrainingsTable from "./TrainingsTable";
import CustomModal from "./CustomModal";
import NewTrainingForm from "./NewTrainingForm";
import AssignLegalOfficersForm from "./AssignLegalOfficersForm";

const TrainingsList = ({ showAssignForm, setShowAssignForm }) => {
  return (
    <Flex direction={"column"} flexGrow={"100%"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <Text fontSize={"1.2rem"}>Trainings</Text>

        <Flex gap={4} direction={["column", "row", "row"]}>
          <InputGroup bg={"#C6C6C640"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search User" />
          </InputGroup>

          <CustomModal
            modalTitle={
              showAssignForm ? "Assign Legal Officers" : "Add New Training"
            }
            buttonText={"Add New Training"}
            buttonProps={{
              bgColor: "brand.primary",
              borderRadius: "0",
              w: ["17rem", "27rem"],
              color: "white",
              px: 4,
              leftIcon: <AiOutlinePlus />,
            }}
          >
            {!showAssignForm ? (
              <NewTrainingForm setShowAssignForm={setShowAssignForm} />
            ) : (
              <AssignLegalOfficersForm setShowAssignForm={setShowAssignForm} />
            )}
          </CustomModal>
        </Flex>
      </Flex>
      <Divider my={4} />
      <TrainingsTable />
    </Flex>
  );
};

export default TrainingsList;
