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
    team: "Abuja",
    members: "340",
    status: "Active",
  },
  {
    team: "Benin",
    members: "340",
    status: "Active",
  },
  {
    team: "Enugu",
    members: "340",
    status: "Active",
  },
  {
    team: "Gombe",
    members: "340",
    status: "Active",
  },
  {
    team: "Kaduna",
    members: "340",
    status: "Active",
  },
  {
    team: "Lagos",
    members: "340",
    status: "Active",
  },
];

const ZonalTable = () => {
  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            {["S/N", "Zonal Command", "Members", "Status"]?.map(
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
            <Tr bg={"white"} my={3} key={index}>
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

export default ZonalTable;
