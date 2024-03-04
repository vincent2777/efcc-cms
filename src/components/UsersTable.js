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
import { useNavigate } from "react-router-dom";

// const rows = [
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "inactive",
//   },
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "active",
//   },
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "inactive",
//   },
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "inactive",
//   },
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "active",
//   },
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "inactive",
//   },
//   {
//     fullName: "Aderibigbe O. Adamu",
//     email: "johndoe_gmail.com",
//     phoneNumber: "08067897865",
//     type: "Lawyer",
//     status: "active",
//   },
// ];

const UsersTable = () => {
  const navigate = useNavigate();
  const rows = useSelector((state) => state.users?.users)
  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table variant="unstyled">
        <Thead bg={"white"}>
          <Tr>
            {[
              "S/N",
              "Full Name",
              "Email",
              "Phone Number",
              "Type",
              "Status",
              "Actions",
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
            <Tr
              bg={"white"}
              my={3}
              key={index}
              cursor={"pointer"}
              onClick={() => navigate("user/lkjalkj")}
            >
              <Td>{index + 1}</Td>
              <Td>{row.fullName}</Td>
              <Td>{row.email}</Td>
              <Td>{row.phoneNumber}</Td>
              <Td>{row.type}</Td>
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

export default UsersTable;
