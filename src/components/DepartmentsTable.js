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
import { useSelector } from "react-redux";

// const rows = [
//   {
//     deptName: "Legal Affairs Department",
//     members: "340",
//     status: "active",
//   },
//   {
//     deptName: "Legal Affairs Department",
//     members: "340",
//     status: "active",
//   },
//   {
//     deptName: "Legal Affairs Department",
//     members: "340",
//     status: "active",
//   },
//   {
//     deptName: "Legal Affairs Department",
//     members: "340",
//     status: "active",
//   },
//   {
//     deptName: "Legal Affairs Department",
//     members: "340",
//     status: "active",
//   },
//   {
//     deptName: "Legal Affairs Department",
//     members: "340",
//     status: "active",
//   },
// ];


const DepartmentsTable = () => {
  const rows = useSelector((state) => state.roles?.departments)

  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            {["S/N", "Dept. Name", "Members", "Status", "Actions"]?.map(
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
          {rows?.map((row, index) => (
            <Tr bg={"white"} my={3} key={index}>
              <Td>{index + 1}</Td>
              <Td>{row.deptName}</Td>
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

export default DepartmentsTable;
