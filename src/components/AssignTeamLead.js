import { Button, Flex, FormControl, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { PiCaretDownBold } from "react-icons/pi";

const TeamLead = ({ id, selectedLead, setSelectedLead, name, team }) => {
  const [isChecked, setIsChecked] = useState(false);
 


  const handleChange = (e) => {
    setIsChecked(!isChecked);
  
    if (selectedLead.includes(parseInt(e.target.id))) {
      setSelectedLead(
        selectedLead.filter(
          (selectedMember) => selectedMember !== parseInt(e.target.id)
        )
      );
      return;
    }
    setSelectedLead([...selectedLead, parseInt(e.target.id)]);
  };

  return (
    <Flex
      alignItems={"center"}
      justify={"space-between"}
      py={2}
      px={4}
      _notLast={{ borderBottom: "2px solid #D3D3D3" }}
    >
      <Flex direction={"column"}>
        <Text fontWeight={"bold"}>{name}</Text>
        <Text>{team}</Text>
      </Flex>
      <label htmlFor={id} onChange={handleChange}>
        <input
          onChange={handleChange}
          type="checkbox"
          id={id}
          checked={isChecked}
          style={{ width: "0", position: "absolute", opacity: "0" }}
        />
        {isChecked ? (
          <MdCheckBox color="#6e0d13" size="1.5rem" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank size="1.5rem" />
        )}
      </label>
    </Flex>
  );
};

const AssignTeamLead = ({ onClose, setAssignLeads }) => {
  const [selectedLead, setSelectedLead] = useState([]);
  const [showTeamLeads, setShowTeamLeads] = useState(false);

  const teamLeads = [
    { id: 1, name: "Leroy Satterfield", team: "Eagle Team" },
    { id: 2, name: "Lorenzo Raynor DDS", team: "Alpha Team" },
    { id: 3, name: "Alfred Trantow", team: "Phoenix Team" },
    { id: 4, name: "Alfred Trantow", team: "Alpha Team" },
    { id: 5, name: "Alfred Trantow", team: "Bravo Team" },
  ];

  console.log(selectedLead);

  return (
    <Flex as={FormControl} direction={"column"} minH={"300px"}>
      <Button
        bg={"#F3F3F3"}
        borderRadius={0}
        color={"#B4B1B1"}
        fontWeight={"normal"}
        rightIcon={<PiCaretDownBold />}
        justifyContent={"space-between"}
        onClick={() => setShowTeamLeads(!showTeamLeads)}
      >
        --Search team lead--
      </Button>
      {showTeamLeads && (
        <Flex
          bg={"#F3F3F3"}
          direction="column"
          gridGap={2}
          py={2}
          overflowY="scroll"
          maxH="250px"
          mb={8}
        >
          {teamLeads?.map((item) => (
            <TeamLead
              key={item?.id}
              id={item?.id}
              name={item?.name}
             
              team={item?.team}
              selectedLead={selectedLead}
              setSelectedLead={setSelectedLead}

            />
          ))}
        </Flex>
      )}
      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="auto"
        onClick={() => {
          onClose();
          setAssignLeads(false);
        }}
      >
        Save
      </Button>
    </Flex>
  );
};

export default AssignTeamLead;
