import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

function CaseList({ tabs, panels }) {
  return (
    <Flex direction={"column"}>
      <Tabs py={2}>
        <TabList
          maxW={"95vw"}
          gap={[1, 2, 2, 4]}
          justifyContent={"space-between"}
          overflowX={"auto"}
          sx={{
            "& > div > button": {
              flexBasis: ["auto", "auto", "auto", "calc(100% / 5)"],
              flexShrink: 0,
              color: "#646363",
              bg: "#D9D9D9",
              borderTopRadius: "12px",
              whiteSpace: "nowrap",
              _selected: { color: "white", bg: "brand.primary" },
            },
          }}
        >
          <Flex gap={2}>
            {tabs.map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
          </Flex>

          <InputGroup w={"16rem"} my={1}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search for a case" />
          </InputGroup>
        </TabList>

        <TabPanels>
          {panels.map(({ table: Panel, link, type }) => {
            return (
              <TabPanel key={link}>
                <Panel link={link} type={type} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default CaseList;
