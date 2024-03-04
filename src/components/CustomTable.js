import {
  Badge,
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
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const rows = [
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
//   {
//     caseTitle: "FRN vs Mohammed Hilton",
//     caseType: "Civil Case",
//     legalOfficer: "Ijeoma Gideon",
//     dateCreated: "06/04/2023",
//     status: "Legal Advice ",
//   },
// ];

const CustomTable = ({ link, type }) => {
  const navigate = useNavigate();
  const chargeNumber = "ljlakdflkjadff;klj";


  const data = useSelector((state) => state.roles?.cases)

  const rows = type ? data?.filter((item) => item.status.includes(type)) : data
  console.log(rows);

  return (
    <TableContainer
    // whiteSpace={"pre-wrap"}
    >
      <Table
        variant="simple"
        style={{ borderCollapse: "inherit", borderSpacing: "0 .5rem" }}
      >
        <Thead>
          <Tr>
            <Th display={["none", "none", "none", "table-cell"]}></Th>
            {[
              "S/N",
              "Case Title",
              "Case Type",
              "Legal Officer",
              "Date Created",
              "Status",
            ]?.map((item) => {
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
          {rows?.map((row, index) => (
            <Tr
              bg={"white"}
              my={3}
              key={index}
              cursor="pointer"
              onClick={() => navigate(`${link}/${chargeNumber}`)}
            >
              <Td display={["none", "none", "none", "table-cell"]}></Td>
              <Td>{index + 1}</Td>
              <Td>{row.caseTitle}</Td>
              <Td>{row.caseType}</Td>
              <Td>{row.legalOfficer}</Td>
              <Td>{row.dateCreated}</Td>
              <Td>
                <Badge
                  fontWeight={"medium"}
                  textTransform={"none"}
                  colorScheme={row.status === "Legal Advice" ? "purple" : row.status.includes("Court") ? "orange" : "green"}
                  color={row.status === "Legal Advice" ? "#9747FF" : row.status.includes("Court") ? "#000" : "green"}
                  // color="#9747FF"
                  // backgroundColor="#F59AF9"
                  p={3}
                >
                  {row.status}
                </Badge>
              </Td>
              <Td>
                <BsThreeDotsVertical />
              </Td>
              <Td display={["none", "none", "none", "table-cell"]}></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
