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

const rows = [
  {
    activity: "You viewed Case management",
    time: "3 mins ago",
  },
  {
    activity: "You edited profile information",
    time: "5 mins ago",
  },
  {
    activity: "You viewed Case management",
    time: "10 mins ago",
  },
  {
    activity: "You edited profile information",
    time: "13 mins ago",
  },
  {
    activity: "You viewed Case management",
    time: "23 mins ago",
  },
  {
    activity: "You viewed Case management",
    time: "30 mins ago",
  },
];

const ProfileActivityTable = () => {
  return (
    <TableContainer
      // whiteSpace={"pre-wrap"}
      my={8}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            <Th display={["none", "none", "none", "table-cell"]}></Th>
            {["S/N", "Activity", "Time"]?.map((item) => {
              return (
                <Th py="10px" key={nanoid()}>
                  {item}
                </Th>
              );
            })}
            <Th display={["none", "none", "none", "table-cell"]}></Th>
          </Tr>
        </Thead>
        <Tbody position="relative" fontSize=".8em">
          {rows.map((row, index) => (
            <Tr bg={"white"} my={3} key={index}>
              <Td display={["none", "none", "none", "table-cell"]}></Td>
              <Td>{index + 1}</Td>
              <Td>{row.activity}</Td>
              <Td>{row.time}</Td>
              <Td display={["none", "none", "none", "table-cell"]}></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProfileActivityTable;
