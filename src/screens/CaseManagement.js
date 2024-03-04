import {
  Box,
  Circle,
  Divider,
  Flex,
  // Input,
  // InputGroup,
  // InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiFillStar,
  // AiOutlineSearch
} from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import CustomModal from "../components/CustomModal";
import CustomTable from "../components/CustomTable";
import NewCaseForm from "../components/NewCaseForm";
import { useNavigate } from "react-router-dom";
import AssignTeamLead from "../components/AssignTeamLead";
import { useSelector } from "react-redux";

const CaseCard = ({ caseTitle, numberOfCases }) => {
  const navigate = useNavigate();

  return (
    <Box
      p={2}
      color={"white"}
      cursor={"pointer"}
      onClick={() => navigate(caseTitle.split(" ").join("-").toLowerCase())}
    >
      <Flex
        borderRadius={"8px"}
        bg={"rgba(0, 0, 0, 0.66)"}
        h="150px"
        flexDir={"column"}
        justify={"center"}
        p={6}
      >
        <Text fontWeight={"bold"} fontSize={"1.5rem"}>
          {caseTitle}
        </Text>
        <Flex gap={2} alignItems={"center"}>
          <Circle size={"10px"} bg={"brand.primary"} />
          <Text>{numberOfCases} Cases</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const cases = [
  { caseTitle: "Criminal Cases", numberOfCases: 23 },
  { caseTitle: "Civil Cases", numberOfCases: 90 },
  { caseTitle: "Asset Freezing", numberOfCases: 13 },
  { caseTitle: "Arrest Warrant", numberOfCases: 56 },
  { caseTitle: "Court of Appeal", numberOfCases: 29 },
  { caseTitle: "Remand Warrant", numberOfCases: 23 },
  { caseTitle: "Supreme Court Cases", numberOfCases: 15 },
];

const CaseManagement = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [assignLeads, setAssignLeads] = useState(false);
  const [command, setCommand] = useState("");
  const navigate = useNavigate();
  const commands = [
    "Abuja",
    "Benin",
    "Enugu",
    "Gombe",
    "Ibadan",
    "Kano",
    "Kaduna",
    "Lagos",
    "Maidugure",
    "Makurdi",
    "Sokoto",
  ];

  const rows = useSelector((state) => state.roles?.cases);

  return (
    <Box minH={"100%"} position={"relative"}>
      <Flex
        direction={"column"}
        position={"sticky"}
        top={"5rem"}
        height={"5.5rem"}
        zIndex={1000}
        py={2}
        bg={"#F4F3F3"}
      >
        <Flex alignItems={"center"} justify={"space-between"}>
          {command === "" ? (
            <Text>Case Management (Nationwide Cases)</Text>
          ) : (
            <Text>
              All cases in{" "}
              <Box as="span" fontWeight={"bold"}>
                {command} command
              </Box>
            </Text>
          )}

          <Flex
            gap={4}
            alignItems={"center"}
            display={["none", "none", "flex", "flex"]}
          >
            <Circle bg={"#CAC6C6"} p={2}>
              <AiFillStar color="white" />
            </Circle>
            {/* <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search User" />
            </InputGroup> */}

            {/* <CustomModal
              size={"sm"}
              modalTitle={"Add New Case"}
              buttonText={"Add New Case"}
              buttonProps={{
                bgColor: "brand.primary",
                borderRadius: "0",
                color: "white",
                flexShrink: 0,
                px: 4,
                leftIcon: <AiOutlinePlus />,
              }}
            >
              <NewCaseForm setIsEmpty={setIsEmpty} />
            </CustomModal> */}
            <Select
              isRequired
              placeholder="View by commands"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
            >
              {commands.map((command) => (
                <option
                  value={command}
                  key={command}
                  onChange={() => setCommand(command)}
                >
                  {command} command
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
        <Divider my={6} />
      </Flex>

      {!isEmpty ? (
        <Box>
          <Flex
            sx={{
              "& > div": {
                flexBasis: [
                  "calc(100% / 1)",
                  "calc(100% / 2)",
                  "calc(100% / 3)",
                  "calc(100% / 4)",
                ],
              },
            }}
            wrap={"wrap"}
          >
            {cases.map(({ caseTitle, numberOfCases }) => (
              <CaseCard
                key={caseTitle}
                caseTitle={caseTitle}
                numberOfCases={
                  caseTitle === "Criminal Cases" ? rows?.length : numberOfCases
                }
              />
            ))}
            {!assignLeads ? (
              <CustomModal
                size={"sm"}
                modalTitle={"Add New Case"}
                buttonText={"Add New Case"}
                buttonProps={{
                  bgColor: "brand.primary",
                  borderRadius: "8px",
                  color: "white",
                  height: "150px",
                  m: 2,
                  flexGrow: 1,
                  leftIcon: (
                    <IoIosAddCircleOutline color="white" size={"1.5rem"} />
                  ),
                  flexDir: "column",
                  gap: 2,
                }}
              >
                <NewCaseForm
                  setIsEmpty={setIsEmpty}
                  setAssignLeads={setAssignLeads}
                />
              </CustomModal>
            ) : (
              <CustomModal
                size={"sm"}
                modalTitle={"Assign Team Lead"}
                buttonText={"Add New Case"}
                buttonProps={{
                  bgColor: "brand.primary",
                  borderRadius: "8px",
                  color: "white",
                  height: "150px",
                  m: 2,
                  flexGrow: 1,
                  leftIcon: (
                    <IoIosAddCircleOutline color="white" size={"1.5rem"} />
                  ),
                  flexDir: "column",
                  gap: 2,
                }}
                customButton={
                  <Text
                    size={"sm"}
                    position={"absolute"}
                    top="1.3rem"
                    fontSize={"14px"}
                    right={"1.5rem"}
                    color={"#5C5C5C"}
                    cursor={"pointer"}
                    onClick={() => navigate("/user-management/roles")}
                  >
                    Create new team
                  </Text>
                }
              >
                <AssignTeamLead setAssignLeads={setAssignLeads} />
              </CustomModal>
            )}
          </Flex>

          <Box bgColor={"#F4F3F3"} my={4}>
            <Text
              borderBottom={"1px solid #D3D3D3"}
              p={"1.5rem"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              Case Forwarded History Legal Department
            </Text>

            <CustomTable />
          </Box>
        </Box>
      ) : (
        <Flex
          justify={"center"}
          alignItems={"center"}
          direction={"column"}
          gap={4}
          mt={-10}
          position={"relative"}
          bg={"#F4F3F3"}
          h="calc(100vh - 10rem )"
        >
          <Text>No Cases Added Yet</Text>
          <CustomModal
            size={"sm"}
            modalTitle={"Add New Case"}
            buttonText={"Create First Case"}
            buttonProps={{
              bgColor: "brand.primary",
              borderRadius: "5px",
              w: ["17rem", "27rem"],
              color: "white",
            }}
          >
            <NewCaseForm setIsEmpty={setIsEmpty} />
          </CustomModal>
        </Flex>
      )}
    </Box>
  );
};

export default CaseManagement;
