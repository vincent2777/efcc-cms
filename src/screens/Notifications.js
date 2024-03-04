import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Notifications = () => {
  const selected = {
    color: "#B4B1B1",
    bg: "white",
    borderBottom: "2px solid red",
  };
  return (
    <>
      <Tabs py={2} borderBottomColor={"transparent"} w="full">
        <TabList
          gap={2}
          bg="#F4F3F3"
          sx={{
            "& > buttton": {
              flexShrink: 0,
              color: "#B4B1B1",
              justifyContent: "flex-start",
              pl: [1, 1, 6],
              gap: 4,
              _selected: selected,
            },
          }}
        >
          <Tab>
            <Text>All</Text>
          </Tab>
          <Tab>
            <Text>Mentions</Text>
          </Tab>
        </TabList>

        <TabPanels
          maxW={["auto", "auto", "auto", "80%"]}
          sx={{ "& > div": { py: 0, px: [0, 0, 0, 4], my: [4, 4, 4, 0] } }}
        >
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Notifications;
