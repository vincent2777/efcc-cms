import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    dateCreated: "06/04/2023",
    training: "benchmark global interfaces",
    enrollees: "233",
    feedback: 6,
  },
  {
    dateCreated: "06/04/2023",
    training: "envisioneer collaborative users",
    enrollees: "75",
    feedback: 9,
  },
  {
    dateCreated: "06/04/2023",
    training: "benchmark robust vortals",
    enrollees: "587",
    feedback: 9,
  },
  {
    dateCreated: "06/04/2023",
    training: "synthesize mission-critical functionalities",
    enrollees: "931",
    feedback: 8,
  },
  {
    dateCreated: "06/04/2023",
    training: "morph e-business web services",
    enrollees: "564",
    feedback: 3,
  },
  {
    dateCreated: "06/04/2023",
    training: "morph back-end e-markets",
    enrollees: "187",
    feedback: 7,
  },
  {
    dateCreated: "06/04/2023",
    training: "maximize back-end web services",
    enrollees: "709",
    feedback: 3,
  },
  {
    dateCreated: "06/04/2023",
    training: "matrix visionary deliverables",
    enrollees: "734",
    feedback: 2,
  },
  {
    dateCreated: "06/04/2023",
    training: "extend back-end e-markets",
    enrollees: "168",
    feedback: 3,
  },
  {
    dateCreated: "06/04/2023",
    training: "incubate front-end web services",
    enrollees: "803",
    feedback: 5,
  },
];

const TrainingsTable = () => {
  const navigate = useNavigate()
  return (
    <TableContainer>
      <Table
        variant="striped"
        // style={{ borderCollapse: "inherit", borderSpacing: "0 .5rem" }}
      >
        <Thead>
          <Tr>
            {["S/N", "Training", "Enrollees", "Date Created", "Feedback"]?.map(
              (item) => {
                return (
                  <Th py="10px" key={nanoid()}>
                    {item}
                  </Th>
                );
              }
            )}
          </Tr>
        </Thead>
        <Tbody position="relative" fontSize=".8em">
          {rows.map((row, index) => (
            <Tr bg={"white"} my={3} key={index} cursor={"pointer"} onClick={() => navigate("dfskljsda", {state: row.training})}>
              <Td>{index + 1}</Td>
              <Td>{row.training}</Td>
              <Td textAlign={"center"}>{row.enrollees}</Td>
              <Td>{row.dateCreated}</Td>
              <Td textAlign={"center"}>{row.feedback}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrainingsTable;
