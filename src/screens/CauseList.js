import {
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CauseListTable from "../components/CauseListTable";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCalendarMonth } from "react-icons/md";
import { PiCaretDown } from "react-icons/pi";
import CustomCalendar from "../components/CustomCalendar";

const CauseList = () => {
  const [showcalendar, setShowCalendar] = useState(false);

  return (
    <Flex direction={"column"} flexGrow={"1"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <Text fontSize={"1.2rem"}>Case list</Text>

        <Flex gap={4} direction={["column", "row", "row"]}>
          <InputGroup bg={"#C6C6C640"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search User" />
          </InputGroup>

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
              {showcalendar && (
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
      <Divider my={4} />
      <CauseListTable />
    </Flex>
  );
};

export default CauseList;
