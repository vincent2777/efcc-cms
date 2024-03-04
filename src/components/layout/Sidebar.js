import {
  Box,
  Divider,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import menu from "./sideBarLinks";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const role = useSelector((state) => state.auth?.user?.role);

  console.log(role);

  return (
    <Flex
      as={"nav"}
      pt={4}
      direction="column"
      w={isCollapsed ? "5rem" : "20%"}
      bgColor={"brand.primary"}
      h="100%"
      color={"white"}
      transition={"all 0.5s ease"}
      position={"fixed"}
      align={"center"}
      left={0}
      top={0}
      bottom={0}
      zIndex={100}
      display={["none", "none", "none", "flex"]}
    >
      <Image src="/EFCC Logo.png" w={"87px"} px={4} />

      <Divider maxW={"80%"} my={3} />

      <Flex cursor="pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? (
          <Flex alignItems={"center"}>
            Expand <AiFillCaretRight />{" "}
          </Flex>
        ) : (
          <Flex alignItems={"center"}>
            Collapse <AiFillCaretLeft />{" "}
          </Flex>
        )}
      </Flex>

      <List
        mt={5}
        spacing={5}
        alignSelf={"stretch"}
        sx={{
          "& svg": {
            width: "1.5rem",
            height: "1.5rem",
            "& + span": {
              display: isCollapsed ? "none" : "inline",
            },
          },
        }}
        overflowY={"auto"}
      >
        {menu[role]?.map(({ name, link, icon }) => {
          return (
            <ListItem
              key={name}
              as={NavLink}
              to={link}
              py={3}
              display={"flex"}
              justify={"center"}
              position="relative"
            >
              {({ isActive }) => (
                <Flex
                  alignItems={"center"}
                  color={isActive && "white"}
                  minW={"80%"}
                  mx="auto"
                  gap={1}
                >
                  <Box
                    position={"absolute"}
                    left={0}
                    width={"full"}
                    height={"full"}
                    zIndex={-1}
                    bg={isActive && "#F3555A"}
                  />
                  <ListIcon
                    flexShrink={0}
                    flexGrow={0}
                    flexBasis={"3.5rem"}
                    as={icon}
                    m={0}
                    opacity={isCollapsed && !isActive && 0.5}
                  />
                  <Box as={"span"} flexGrow={1}>
                    {name}
                  </Box>
                </Flex>
              )}
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default Sidebar;
