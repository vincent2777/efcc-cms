import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProfileActivityTable from "../components/ProfileActivityTable";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems={"center"} justify={"space-between"}>
        <Text>My Profile</Text>

        <Button
          bg={"brand.primary"}
          borderRadius={0}
          color={"white"}
          leftIcon={<MdSettings />}
          px={4}
          onClick={() => navigate("/profile-settings")}
        >
          Profile Settings
        </Button>
      </Flex>
      <Divider my={6} />
      <ProfileCard />

      <ProfileActivityTable />
    </>
  );
};

export default Profile;
