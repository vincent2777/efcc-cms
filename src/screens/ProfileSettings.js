import {
  Avatar,
  Box,
  Divider,
  Flex,
  FormLabel,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import CustomModal from "../components/CustomModal";
import ResetPasswordForm from "../components/ResetPasswordForm";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
  const user = useSelector((state) => state.auth?.user);
  console.log({ user });

  return (
    <Box w="100%">
      <Text>Profile Settings</Text>
      <Divider my={6} />
      <Flex>
        <Tabs
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
            flexBasis={["auto", "auto", "auto", "30%"]}
            flexShrink={0}
            bg="#F4F3F3"
            sx={{
              "& > button": {
                flexShrink: 0,
                color: "#B4B1B1",
                // bg: "#D9D9D9",
                _selected: {
                  color: "black",
                  bg: "white",
                  borderBottom: "5px solid red",
                },
              },
            }}
          >
            <Tab gap={4}>
              <AiOutlineUser size={"1.5rem"} />
              <Text>Basic Info</Text>
            </Tab>
            <Tab gap={4}>
              <AiOutlineLock size={"1.5rem"} />
              <Text>Password</Text>
            </Tab>
          </TabList>

          <TabPanels display={"flex"}>
            <TabPanel>
              <Flex direction={"column"}>
                <Flex
                  my={4}
                  as={Avatar}
                  src={`/${user?.profileImg}`}
                  w={"10rem"}
                  h={"10rem"}
                  alignSelf={"center"}
                />
                <Flex
                  flexWrap={"wrap"}
                  sx={{
                    "& > div": {
                      p: 2,
                      flexBasis: ["full", "calc( 100%  / 2)"],
                    },
                  }}
                >
                  <Box>
                    <FormLabel> First Name</FormLabel>
                    <Input />
                  </Box>
                  <Box>
                    <FormLabel> Last Name</FormLabel>
                    <Input />
                  </Box>
                  <Box>
                    <FormLabel> Email Address</FormLabel>
                    <Input />
                  </Box>
                  <Box>
                    <FormLabel> Phone Number</FormLabel>
                    <Input />
                  </Box>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel flexGrow={1}>
              <Flex
                direction={"column"}
                w={["auto", "auto", "60%", "60%"]}
                mx="auto"
              >
                <Flex
                  my={4}
                  as={Image}
                  src="/password-reset.png"
                  w={"5rem"}
                  h={"5rem"}
                  alignSelf={"center"}
                />
                <FormLabel>Password</FormLabel>
                <Input type="password" />

                <CustomModal
                  size={"sm"}
                  modalTitle={"Reset Password"}
                  buttonProps={{
                    bgColor: "brand.primary",
                    color: "white",
                    mt: 10,
                    flexGrow: 1,
                    flexDir: "column",
                    gap: 2,
                  }}
                  buttonText={"Reset Password"}
                >
                  <ResetPasswordForm />
                </CustomModal>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default ProfileSettings;
