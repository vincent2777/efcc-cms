import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const DocumentManagement = () => {
  return (
    <Flex direction={"column"} flexGrow={1}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <Text fontSize={"1.2rem"}>
          All Documentss / Case 2235AD - Hammed vs NNPC
        </Text>
      </Flex>
      <Divider my={4} />

      <Box w={["100%", "100%", "90%", "90%"]} mx={"auto"}>
        <Flex
          direction={["column", "column", "row", "row"]}
          justify={"space-between"}
          bg={"#EDEDED"}
          py={2}
          px={[1, 2, 2, 14]}
        >
          <AvatarGroup size="md" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>

          <Flex gap={2} alignItems={"center"}  py={2}>
            <Button size={"xs"} fontWeight={"normal"} bg="none">
              Edit
            </Button>
            <Center height="20px">
              <Divider borderColor={"black"} orientation="vertical" />
            </Center>
            <Button size={"xs"} fontWeight={"normal"} bg="none">
              Re-assign
            </Button>
            <Center height="20px">
              <Divider borderColor={"black"} orientation="vertical" />
            </Center>
            <Button size={"xs"} fontWeight={"normal"} bg="none">
              Remove shared users
            </Button>
            <Center height="20px">
              <Divider borderColor={"black"} orientation="vertical" />
            </Center>
            <Button size={"xs"} fontWeight={"normal"} bg="none">
              share
            </Button>
          </Flex>
        </Flex>
        <Box bg="white" h="150vh" px={8} py={4}>
          <Text variant={"h2"} fontSize={"5rem"}>
            A simple PDF File
          </Text>
          <Text>
            Engineer BelizeMollitia sint nam voluptatem est officiis. Voluptatem
            adipisci enim reiciendis aliquam minus consequuntur quidem ad
            consequatur. Numquam rerum porro aut. Vitae et quis qui est.
            Eligendi est et velit omnis velit. Quis itaque maiores fuga ut
            cupiditate et nobis. Sunt in aut. Nam voluptate impedit voluptatem
            quas quibusdam fuga est. Aut nostrum et in in ex animi. Laboriosam
            recusandae sit iste. Quis delectus ea omnis aut facere dolores sed
            atque. Ipsa nesciunt non voluptatem earum quam aliquid illum impedit
            dolores. Rerum non officia aliquam molestias non et. Facilis
            pariatur voluptatem voluptas dolores et hic veniam. Voluptate et
            nobis odio aut ab. Qui reiciendis quam aut doloremque et soluta.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default DocumentManagement;
