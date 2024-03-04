import {
  Badge,
  Flex,
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
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCalendar from "./CustomCalendar";
import { MdCalendarMonth } from "react-icons/md";
import { PiCaretDown } from "react-icons/pi";
import TrainingFeedbackForm from "./TrainingFeedbackForm";
import CustomModal from "./CustomModal";

const row = {
  legalOfficer: "Hassan Farooq",
  dateEnrolled: "06/04/2023",
  progress: "70%",
  status: "enrolled",
};

const TrainingTable = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const location = useLocation();

  return (
    <>
      <Flex
        justify="space-between"
        alignItems={"center"}
        bg="#043B5C0F"
        px={4}
        py={2}
        mx={[-1, -1, -4, -4]}
      >
        <Text fontWeight={"bold"} textTransform={"uppercase"}>
          {location.state}
        </Text>
        <Flex align={"center"} gap={2}>
          <Text>Filter: </Text>
          <Flex position={"relative"}>
            <Flex
              gap={4}
              alignItems={"center"}
              color={"#B5B5B5"}
              border={"1px solid #B5B5B5"}
              p={2}
              justify={"space-around"}
              onClick={() => setShowCalendar(true)}
              cursor={"pointer"}
              width={["full", "15rem", "15rem", "15rem"]}
            >
              <MdCalendarMonth size={"1.5rem"} /> dd/mm/yy{" "}
              <PiCaretDown size={"1.5rem"} />
            </Flex>

            <Flex
              position={"absolute"}
              top={0}
              zIndex={200}
              right={["-20%", 0, 0]}
              width={"20rem"}
            >
              {showCalendar && (
                <CustomCalendar
                  showCloseButton={true}
                  setShowCalendar={setShowCalendar}
                  monthAndYearWrapperMargin="0"
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <TableContainer>
        <Table
          variant="striped"
          // style={{ borderCollapse: "inherit", borderSpacing: "0 .5rem" }}
        >
          <Thead>
            <Tr>
              {[
                "S/N",
                "Legal Officer",
                "Date enrolled",
                "Progress",
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
            {Array(5)
              .fill(row)
              .map((row, index) => (
                <Tr bg={"white"} my={3} key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{row.legalOfficer}</Td>
                  <Td>{row.dateEnrolled}</Td>
                  <Td>{row.progress}</Td>
                  <Td>
                    <Badge
                      p={2}
                      colorScheme={
                        row.status.toLowerCase() === "enrolled"
                          ? "green"
                          : "red"
                      }
                    >
                      {row.status}
                    </Badge>
                  </Td>
                  <Td>
                    <CustomModal
                      size={"sm"}
                      modalTitle={"Feedback"}
                      buttonText={"View Feedback"}
                      fontSize={".9rem"}
                      buttonProps={{
                        bg: "none",
                        color: "#18A0FB",
                        flexShrink: 0,
                        p: 0,
                        fontWeight: "normal",
                      }}
                    >
                      <TrainingFeedbackForm />
                    </CustomModal>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TrainingTable;
