import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Image,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DatapointCheckList from "../components/DatapointCheckList";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate()
  return (
    <Flex direction={"column"}>
      <Tabs py={2}>
        <TabList
          maxW={"95vw"}
          gap={[1, 2, 2, 4]}
          overflowX={"auto"}
          sx={{
            "& > button": {
              flexBasis: ["auto", "auto", "auto", "calc(100% / 5)"],
              flexShrink: 0,
              color: "#646363",
              bg: "#D9D9D9",
              borderTopRadius: "12px",
              _selected: { color: "white", bg: "brand.primary" },
            },
            "& .chakra-input__group": {
              flexBasis: ["auto", "auto", "auto", "calc(100% / 5)"],
              flexShrink: 0,
            },
          }}
        >
          <Tab>Standard Report</Tab>
          <Tab>Custom Report</Tab>
        </TabList>

        <TabPanels>
          <TabPanel
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            pos={"relative"}
          >
            <Image
              src="/reports_icon.png"
              w={[0, 0, "8rem", "10rem"]}
              flexShrink={0}
              position={"absolute"}
              top={"25%"}
              left={[0,0,"5%","2%",  "10%"]}
            />
            <Box w="25rem" bg={"white"}>
              <Text fontWeight={"bold"} p={4}>
                Standard Report
              </Text>
              <Divider color={"#D3D3D3"} />
              <Box px={6} py={8}>
                <Box>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    isRequired
                    placeholder="Enter case title"
                    type="date"
                    _placeholder={{ color: "#B4B1B1" }}
                    bg={"#F3F3F3"}
                  />
                </Box>
                <Box mt={3}>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    isRequired
                    placeholder="Enter case title"
                    type="date"
                    _placeholder={{ color: "#B4B1B1" }}
                    bg={"#F3F3F3"}
                  />
                </Box>

                <Button
                  borderRadius={"5px"}
                  bg={"brand.primary"}
                  color={"white"}
                  mt="2rem"
                  w="full"
                  onClick={() =>  navigate("/reports/standard-reports")}
                >
                  Generate Report
                </Button>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex justify={"center"} bg="#F6F6F6">
              <Flex
                alignItems={"center"}
                wrap={"wrap"}
                maxW={"50rem"}
                sx={{
                  "& > div": {
                    p: 4,
                    flexBasis: ["100%", "100%", "calc(100% /2)"],
                  },
                }}
              >
                <Box>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    isRequired
                    placeholder="Give your report a title"
                    _placeholder={{ color: "#B4B1B1" }}
                    bg={"#F3F3F3"}
                  />
                </Box>
                <Box>
                  <FormLabel>End Date</FormLabel>
                  <Select
                    isRequired
                    placeholder="Select Command Zone"
                    bg={"#F3F3F3"}
                    color={"#B4B1B1"}
                  >
                    <option value="option2">Zone 1</option>
                    <option value="option1">Zone 2</option>
                    <option value="option3">Zone 3</option>
                    <option value="option3">Zone 4</option>
                    <option value="option3">Zone 5</option>
                    <option value="option3">Zone 6</option>
                    <option value="option3">Zone 7</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    isRequired
                    placeholder="Enter case title"
                    type="date"
                    _placeholder={{ color: "#B4B1B1" }}
                    bg={"#F3F3F3"}
                  />
                </Box>
                <Box>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    isRequired
                    placeholder="Enter case title"
                    type="date"
                    _placeholder={{ color: "#B4B1B1" }}
                    bg={"#F3F3F3"}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex justify={"center"} py={10}>
              <Flex
                alignItems={"center"}
                wrap={"wrap"}
                maxW={"50rem"}
                direction={"column"}
              >
                <Flex bg="#F5F5F5C2">
                  <DatapointCheckList />
                </Flex>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Reports;
