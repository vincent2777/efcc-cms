import { Avatar, Badge, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state) => state.auth?.user);
  console.log(user);

  return (
    <Flex
      p={[2, 2, 6, "3rem"]}
      bg={"white"}
      gap={4}
      flexDir={["column", "column", "column", "row"]}
    >
      <Flex
        as={Avatar}
        src={`/${user?.profileImg}`}
        w={"10rem"}
        h={"10rem"}
        alignSelf={"center"}
      />

      <Flex
        direction={"column"}
        justify={"center"}
        grow={1}
        gap={[2, 2, 2, 3]}
        flexWrap={"wrap"}
      >
        <Flex
          alignItems={"center"}
          flexWrap={"wrap"}
          sx={{
            "& >  div": {
              flexBasis: [
                "calc( 100% / 1)",
                "calc( 100% / 2)",
                "calc( 100% / 3)",
                "calc( 100% / 3)",
              ],
              alignItems: ["center", "center", "center", "normal"],
              flexGrow: 1,
            },
          }}
        >
          <Flex direction={"column"} p={2}>
            <Text fontWeight={"500"}>{user.fullName}</Text>
            <Text color="#666666">EFCC-0238982</Text>
          </Flex>
          <Flex direction={"column"} p={2}>
            <Text fontWeight={"500"}>Date Joined</Text>
            <Text color="#666666">4th August, 2023</Text>
          </Flex>
          <Flex direction={"column"} p={2}>
            <Text fontWeight={"500"}>Role</Text>
            <Badge
              colorScheme="red"
              alignSelf={["center", "center", "center", "start"]}
            >
              {user.role}
            </Badge>
          </Flex>
        </Flex>
        <Divider />
        <Flex
          alignItems={"center"}
          flexWrap={"wrap"}
          sx={{
            "& > div": {
              p: 2,
              flexDirection: "column",
              flexBasis: [
                "calc( 100% / 1)",
                "calc( 100% / 2)",
                "calc( 100% / 3)",
                "calc( 100% / 3)",
              ],
              alignItems: ["center", "center", "center", "normal"],
              flexGrow: 1,
              "&  p::first-of-type": { fontWeight: "500" },
              "&  p:nth-of-type(2)": {
                border: "1px solid #F0F0F0",
                p: 2,
                color: "#666666",
              },
            },
          }}
        >
          <Flex>
            <Text>Email address</Text>
            <Text>{user.email}</Text>
          </Flex>
          <Flex>
            <Text>Telephone</Text>
            <Text>{user.phoneNumber}</Text>
          </Flex>
          {user.role !== "chairman" && (
            <Flex>
              <Text>Department</Text>
              <Text>Legal Department</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
