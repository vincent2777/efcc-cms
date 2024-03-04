import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomModal from "../components/CustomModal";
import NewTrainingForm from "../components/NewTrainingForm";
import AssignLegalOfficersForm from "../components/AssignLegalOfficersForm";
import TrainingsList from "../components/TrainingsList";

const Trainings = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [showAssignForm, setShowAssignForm] = useState(false);
  return (
    isEmpty ? <Flex
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={8}
      mt={-10}
      position={"relative"}
      bg={"#F4F3F3"}
      h="calc(100vh - 10rem )"
    >
      <Image src="/no-trainings.png" />
      <Text>No Trainings Added Yet</Text>
      <CustomModal
        modalTitle={showAssignForm ? "Assign Legal Officers" : "Add New Training"}
        buttonText={"Create First Training"}
        buttonProps={{
          bgColor: "brand.primary",
          borderRadius: "5px",
          w: ["17rem", "27rem"],
          color: "white",
        }}
      >
        {!showAssignForm ? (
          <NewTrainingForm setShowAssignForm={setShowAssignForm} />
        ) : (
          <AssignLegalOfficersForm setShowAssignForm={setShowAssignForm} setIsEmpty={setIsEmpty} />
        )}
      </CustomModal>
    </Flex> : <TrainingsList showAssignForm={showAssignForm} setShowAssignForm={setShowAssignForm} />
  );
};

export default Trainings;
