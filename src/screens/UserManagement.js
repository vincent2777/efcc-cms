import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineUserSwitch,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { GrDriveCage } from "react-icons/gr";
import CustomModal from "../components/CustomModal";
import NewUserForm from "../components/NewUserForm";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import NewRoleForm from "../components/NewRoleForm";
import NewDepartmentForm from "../components/NewDepartmentForm";

const UserManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const location = useLocation();

  const modals = [
    <CustomModal
      size={"sm"}
      modalTitle={"Add New User"}
      buttonText={"Add New User"}
      buttonProps={{
        bgColor: "brand.primary",
        borderRadius: "0",
        color: "white",
        flexShrink: 0,
        px: 4,
        leftIcon: <AiOutlinePlus />,
      }}
    >
      <NewUserForm />
    </CustomModal>,
    <CustomModal
      size={"sm"}
      modalTitle={"Add New Department"}
      buttonText={"Add New Department"}
      buttonProps={{
        bgColor: "brand.primary",
        borderRadius: "0",
        color: "white",
        flexShrink: 0,
        px: 4,
        leftIcon: <AiOutlinePlus />,
      }}
    >
      <NewDepartmentForm />
    </CustomModal>,
    <CustomModal
      size={"sm"}
      modalTitle={"Add New Role"}
      buttonText={"Add New Roles"}
      buttonProps={{
        bgColor: "brand.primary",
        borderRadius: "0",
        color: "white",
        flexShrink: 0,
        px: 4,
        leftIcon: <AiOutlinePlus />,
      }}
    >
      <NewRoleForm />
    </CustomModal>,
  ];

  return (
    <Flex direction={"column"} flexGrow={1}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <Text fontSize={"1.2rem"}>User Management</Text>

        <Flex gap={4} direction={["column", "row", "row"]}>
          <InputGroup bg={"#C6C6C640"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search User" />
          </InputGroup>

          {modals[tabIndex]}
        </Flex>
      </Flex>
      <Divider my={4} />
      <Box>
        <Flex>
          <Tabs
            onChange={(index) => setTabIndex(index)}
            py={2}
            borderBottomColor={"transparent"}
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            w="full"
          >
            <TabList
              gap={2}
              overflowX={"auto"}
              flexDirection={["row", "row", "row", "column"]}
              flexBasis={["auto", "auto", "auto", "20%"]}
              flexShrink={0}
              bg="#F4F3F3"
              sx={{
                "& > a": {
                  flexShrink: 0,
                  color: "#B4B1B1",
                  justifyContent: "flex-start",
                  pl: [1, 1, 6],
                  border: "none",
                },
              }}
            >
              <Tab
                as={NavLink}
                style={({ isActive }) => {
                  return {
                    color:
                      isActive || location.pathname === "/user-management"
                        ? "black"
                        : "#B4B1B1",
                    background:
                      (isActive || location.pathname === "/user-management") &&
                      "white",
                    borderBottom:
                      (isActive || location.pathname === "/user-management") &&
                      "2px solid red",
                  };
                }}
                to={"users"}
                gap={4}
              >
                <AiOutlineUsergroupAdd size={"1.5rem"} />
                <Text>Users</Text>
              </Tab>
              <Tab
                as={NavLink}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#B4B1B1",
                  background: isActive && "white",
                  borderBottom: isActive && "2px solid red",
                })}
                to={"departments"}
                gap={4}
              >
                <GrDriveCage size={"1.5rem"} />
                <Text>Departments</Text>
              </Tab>
              <Tab
                as={NavLink}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#B4B1B1",
                  background: isActive && "white",
                  borderBottom: isActive && "2px solid red",
                })}
                to={"roles"}
                gap={4}
              >
                <AiOutlineUserSwitch size={"1.5rem"} />
                <Text>Roles</Text>
              </Tab>
            </TabList>

            <TabPanels
              maxW={["auto", "auto", "auto", "80%"]}
              sx={{ "& > div": { py: 0, px: [0, 0, 0, 4], my: [4, 4, 4, 0] } }}
            >
              <Outlet />
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserManagement;
