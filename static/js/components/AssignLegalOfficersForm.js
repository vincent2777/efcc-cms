import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    Input,
  } from "@chakra-ui/react";
  import Select from "react-select";
  import React from "react";
  import { AiOutlineUpload } from "react-icons/ai";
  
  const AssignLegalOfficersForm = ({
    onClose,
    setShowAssignForm,
    setIsEmpty,
  }) => {
    const legalOfficers = [
      { value: "Leroy Satterfield", label: "Leroy Satterfield" },
      { value: "Lorenzo Raynor DDS", label: "Lorenzo Raynor DDS" },
      { value: "Alfred Trantow", label: "Alfred Trantow" },
      { value: "Lydia Cormier", label: "Lydia Cormier" },
      { value: "Alfonso Schimmel", label: "Alfonso Schimmel" },
      { value: "Conrad Osinski", label: "Conrad Osinski" },
      { value: "Juanita Douglas", label: "Juanita Douglas" },
      { value: "Marion Schroeder", label: "Marion Schroeder" },
      { value: "Rex Hilll", label: "Rex Hilll" },
      { value: "Gerardo Herman", label: "Gerardo Herman" },
      { value: "Ms. Marion Rau", label: "Ms. Marion Rau" },
    ];
  
    return (
      <Flex as={FormControl} direction={"column"} gap={3}>
        <Box>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={legalOfficers}
            placeholder="--select-user-type--"
            // styles={colourStyles}
          />
        </Box>
        <Input
          as={"input"}
          type="text"
          placeholder="Start Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <Input
          as={"input"}
          type="text"
          placeholder="End Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
  
        <Center
          borderTop={"1px solid #D3D3D3"}
          borderBottom={"1px solid #D3D3D3"}
          py={4}
          mt={14}
          mx={"-2rem"}
        >
          <Button
            rightIcon={<AiOutlineUpload />}
            bg={"#EEB7003D"}
            borderRadius={0}
            size={"sm"}
          >
            Bulk Upload
          </Button>
        </Center>
  
        <Button
          borderRadius={"5px"}
          bg={"brand.primary"}
          color={"white"}
          mt=".5rem"
          onClick={() => {
            setShowAssignForm(false);
            setIsEmpty && setIsEmpty(false);
            onClose();
          }}
        >
          Save
        </Button>
      </Flex>
    );
  };
  
  export default AssignLegalOfficersForm;
  