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
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const rows = [
  {
    team: "Gloria Anikwe",
    members: "340",
    status: "Active",
  },
  {
    team: "Gloria Anikwe",
    members: "340",
    status: "Active",
  },
  {
    team: "Gloria Anikwe",
    members: "340",
    status: "Active",
  },
  {
    team: "Gloria Anikwe",
    members: "340",
    status: "Active",
  },
  {
    team: "Gloria Anikwe",
    members: "340",
    status: "Active",
  },
];

const TeamMembersTable = () => {
  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            {["S/N", "Team", "Members", "Status", "Actions"]?.map((item) => {
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
            <Tr bg={"white"} my={3} key={index} onClick={() => {}}>
              <Td>{index + 1}</Td>
              <Td>{row.team}</Td>
              <Td>{row.members}</Td>
              <Td>{row.status}</Td>
              <Td>
                <HiOutlineDotsCircleHorizontal size={"1.5rem"} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TeamMembersTable;
