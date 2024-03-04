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
import CustomModal from "./CustomModal";
import AdminRolePermissionForm from "./AdminRolePermissionForm";
import { useSelector } from "react-redux";

// const rows = [
//   {
//     roles: "Admin",
//     noOfUsers: 3,
//     dateCreated: "06/08/2023",
//   },
//   {
//     roles: "Lawyer",
//     noOfUsers: 7080,
//     dateCreated: "06/08/2023",
//   },
//   {
//     roles: "Director Legal",
//     noOfUsers: 6,
//     dateCreated: "06/08/2023",
//   },
//   {
//     roles: "Chairman",
//     noOfUsers: 1,
//     dateCreated: "06/08/2023",
//   },
//   {
//     roles: "Head of Legal",
//     noOfUsers: 3,
//     dateCreated: "06/08/2023",
//   },
// ];


const RolesTable = () => {
  const rows = useSelector((state) => state.roles?.roles)
  console.log(rows);
  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            {[
              "S/N",
              "Roles",
              "No. of Users",
              "Date Created",
              "Permissions",
              "Action",
            ]?.map((item) => {
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
            <Tr bg={"white"} my={3} key={index}>
              <Td>{index + 1}</Td>
              <Td>{row.role}</Td>
              <Td>{row.noOfUsers}</Td>
              <Td>
                <CustomModal
                  size={"2xl"}
                  modalTitle={"Admin's role permission"}
                  buttonText={"View Permissions"}
                  fontSize={".9rem"}
                  buttonProps={{
                    bg: "none",
                    color: "#18A0FB",
                    flexShrink: 0,
                    p: 0,
                    fontWeight: "normal",
                  }}
                >
                  <AdminRolePermissionForm />
                </CustomModal>
              </Td>
              <Td>{row.dateCreated}</Td>
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

export default RolesTable;
