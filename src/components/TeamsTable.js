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
    team: "Legal Team 1",
    members: "340",
    status: "Active",
  },
  {
    team: "Legal Team 2",
    members: "340",
    status: "Active",
  },
  {
    team: "Legal Team 3",
    members: "340",
    status: "Active",
  },
  {
    team: "Legal Team 4",
    members: "340",
    status: "Active",
  },
  {
    team: "Legal Team 5",
    members: "340",
    status: "Active",
  },
];

const TeamsTable = () => {
  const navigate = useNavigate();
  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            {["S/N", "Team", "Members", "Status"]?.map((item) => {
              return (
                <Th py="10px" key={nanoid()}>
                  {item}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody position="relative" fontSize=".8em">
          {rows.map((row, index) => (
            <Tr
              bg={"white"}
              my={3}
              key={index}
              onClick={() => {
                navigate("/set-up/teams/213123413");
              }}
              cursor={"pointer"}
            >
              <Td>{index + 1}</Td>
              <Td>{row.team}</Td>
              <Td>{row.members}</Td>
              <Td>{row.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TeamsTable;
