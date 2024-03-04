import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
  AiOutlineLock,
} from "react-icons/ai";
import CustomModal from "../components/CustomModal";
import NewLegalZonalForm from "../components/NewLegalZonalForm";
import {
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

const SetUp = () => {
  const location = useLocation();

  return (
    <Flex direction={"column"} flexGrow={1}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <Text fontSize={"1.2rem"}>SetUp Management</Text>

        <Flex gap={4} direction={["column", "row", "row"]}>
          <InputGroup bg={"#C6C6C640"}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search User" />
          </InputGroup>

          {
            <CustomModal
              size={"sm"}
              modalTitle={"Add New"}
              buttonText={"Add New"}
              buttonProps={{
                bgColor: "brand.primary",
                borderRadius: "0",
                color: "white",
                flexShrink: 0,
                px: 4,
                leftIcon: <AiOutlinePlus />,
              }}
            >
              <NewLegalZonalForm />
            </CustomModal>
          }
        </Flex>
      </Flex>
      <Divider my={4} />
      <Box>
        <Flex>
          <Flex
            py={2}
            borderBottomColor={"transparent"}
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            w="full"
          >
            <Flex
              gap={2}
              overflowX={"auto"}
              flexDirection={["row", "row", "row", "column"]}
              flexBasis={["auto", "auto", "auto", "20%"]}
              flexShrink={0}
              bg="#F4F3F3"
              sx={{
                "& > a": {
                  flexShrink: 0,
                  justifyContent: "flex-start",
                  pl: [1, 1, 6],
                  _selected: { border: "none" },
                },
              }}
            >
              <Flex
                py={2}
                as={NavLink}
                style={({ isActive }) => {
                  return {
                    color:
                      isActive || location.pathname === "/set-up"
                        ? "black"
                        : "#B4B1B1",
                    background:
                      (isActive || location.pathname === "/set-up") && "white",
                    borderBottom:
                      (isActive || location.pathname === "/set-up") &&
                      "2px solid red",
                  };
                }}
                to="/set-up/teams"
                gap={4}
              >
                <AiOutlineUsergroupAdd size={"1.5rem"} />
                <Text>Teams</Text>
              </Flex>
              <Flex
                py={2}
                as={NavLink}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "#B4B1B1",
                  background: isActive && "white",
                  borderBottom: isActive && "2px solid red",
                })}
                to="/set-up/zonal-command"
                gap={4}
              >
                <AiOutlineLock size={"1.5rem"} />
                <Text>Zonal Command</Text>
              </Flex>
            </Flex>

            <Box
              flexGrow={1}
              sx={{ "& > div": { py: 0, px: [0, 0, 0, 4], my: [4, 4, 4, 0] } }}
            >
              <Outlet />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SetUp;
