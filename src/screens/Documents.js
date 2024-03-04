import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineFilter,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import CustomModal from "../components/CustomModal";
import { PiCaretDown } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Document = ({ image, name, createdBy, time }) => {
  const navigate = useNavigate()
  return (
    <Box
      p={2}
      flexBasis={["100%", "calc(100% / 2)", "calc(100% / 3)", "calc(100% / 4)"]}
      cursor={"pointer"} onClick={()  =>  navigate("sdfadfadfadsf")}
    >
      <Box h="15rem" bg={"white"}>
        <Box h="35%" overflow={"hidden"}>
          <Image src={image} />
        </Box>
        <Flex direction={"column"} h="65%">
          <Box p={2}>
            <Text mt={4} fontWeight={"bold"}>
              {name}
            </Text>
            <Text color={"#847F7F"}>created by {createdBy}</Text>
          </Box>
          <Flex
            justify={"space-between"}
            mt={"auto"}
            alignItems={"center"}
            p={2}
            borderTop={"1px solid #DDDDDD"}
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
            <Text>{time}</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const Documents = () => {
  return (
    <Flex direction={"column"} flexGrow={"1"} >
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <Text fontSize={"1.2rem"}>Documents</Text>

        <Flex gap={4} direction={["column", "row", "row"]}>
          <InputGroup bg={"white"} border={"transparent"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search for a doc" />
          </InputGroup>
          <Button
            rightIcon={<PiCaretDown />}
            leftIcon={<AiOutlineFilter />}
            flexShrink={0}
            bg={"white"}
          >
            Filter by
          </Button>
          <CustomModal
            size={"sm"}
            modalTitle={"Add Document"}
            buttonText={"Add Document"}
            buttonProps={{
              bgColor: "brand.primary",
              borderRadius: "0",
              color: "white",
              flexShrink: 0,
              px: 4,
              leftIcon: <AiOutlinePlus />,
            }}
          >
            <Box h="10rem" />
          </CustomModal>
        </Flex>
      </Flex>

      <Divider my={4} />

      <Flex wrap={"wrap"} py={6}>
        {Array(8)
          .fill({
            name: "Case 2235AD (pdf)",
            createdBy: "James Idiagbon",
            time: "3 days ago",
            image: "/document.jpg",
          })
          .map((document, i) => (
            <Document key={i} {...document} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Documents;
