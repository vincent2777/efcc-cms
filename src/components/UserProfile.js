import React from "react";
import ProfileCard from "../screens/ProfileCard";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <ProfileCard />
      <Box bg="white" my={2}>
        <Flex
          justify={"space-between"}
          alignItems={"center"}
          px={[1, 2, 2, 8]}
          py={4}
          borderBottom={"1px solid rgba(211, 211, 211, 1)"}
        >
          <Text fontWeight={"bold"}>Permissions</Text>
          <Button
            borderRadius={"5px"}
            bg={"brand.primary"}
            color={"white"}
            onClick={() => navigate("/user-management/roles")}
          >
            Manage role
          </Button>
        </Flex>
        <Flex
          sx={{
            "&": {
              display: "flex",
              w: ["full", "full", "80%", "70%"],
              py: 4,
              flexDirection: "column",
              mx: "auto",
              gap: 2,
              "& > label": {
                bg: "#F9F9F9",
                p: 4,
                gap: 4,
              },
            },
          }}
        >
          <Text color={"#898989"}>Lawyers can:</Text>
          <CheckboxGroup size={"lg"} colorScheme="red">
            <Checkbox value="dashboard">Can View Dashboard</Checkbox>
            <Checkbox value="users">Can create users </Checkbox>
            <Checkbox value="reports">Can export reports</Checkbox>
            <Checkbox value="dashboard">Can view dashboard</Checkbox>
            <Checkbox value="dashboard">Can view dashboard</Checkbox>
          </CheckboxGroup>
        </Flex>
      </Box>
    </>
  );
};

export default UserProfile;
