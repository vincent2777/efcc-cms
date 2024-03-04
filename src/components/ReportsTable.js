import {
  Badge,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";

function getColor(status) {
  if (status.toLowerCase() === "on-going") return "orange";
  if (status.toLowerCase() === "case open") return "green";
  if (status.toLowerCase() === "case closed") return "red";
  if (status.toLowerCase() === "judgment") return "cyan";
}

const ReportsTable = ({reports}) => {
  return (
    <TableContainer>
      <Table
        variant="striped"
        // style={{ borderCollapse: "inherit", borderSpacing: "0 .5rem" }}
      >
        <Thead>
          <Tr>
            {[
              "S/N",
              "Suit Number",
              "Parties",
              "Summary of Facts",
              "Relief Sought",
              "Date Received",
              "Command",
              "Court",
              "Judge",
              "Defense Counsel",
              "Date Assigned",
              "Judgement Delivered",
              "Outcome",
              "Remark",
              "Status",
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
          {reports.map((report, index) => (
            <Tr my={3} key={index}>
              <Td>{index + 1}</Td>
              <Td>{report.suitNumber}</Td>
              <Td>{report.parties}</Td>
              <Td>
                <Text whiteSpace={"pre-wrap"} noOfLines={3} maxW={"200px"}>
                  {report.summaryOfFacts}
                </Text>
              </Td>
              <Td>{report.reliefSought}</Td>
              <Td>{report.dateReceived}</Td>
              <Td>{report.command}</Td>
              <Td>{report.court}</Td>
              <Td>{report.judge}</Td>
              <Td>{report.defenseCounsel}</Td>
              <Td>{report.dateAssigned}</Td>
              <Td>{report.judgement}</Td>
              <Td>{report.outcome}</Td>
              <Td>
                <Text whiteSpace={"pre-wrap"} noOfLines={3} maxW={"200px"}>
                  {report.remark}
                </Text>
              </Td>
              <Td>
                <Badge
                  fontWeight={"medium"}
                  textTransform={"none"}
                  colorScheme={getColor(report.status.trim())}
                  p={1.5}
                >
                  {report.status}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ReportsTable;
