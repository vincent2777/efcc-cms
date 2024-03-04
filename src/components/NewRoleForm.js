import {useState} from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,

  } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addRole } from "../redux/slices/roleSlice";
import { formatDate } from "../utils/format";

  
  const NewRoleForm = ({ onClose }) => {
    const [role, setRole] = useState("")
    const dispatch = useDispatch()
    return (
      <Flex as={FormControl} direction={"column"} gap={3}>
        <form>
        <Box>
          <FormLabel>Role Name</FormLabel>
          <Input
            isRequired
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter role name"
            _placeholder={{ color: "#B4B1B1" }}
            bg={"#F3F3F3"}
          />
        </Box>
  
  
        <Button
          borderRadius={"5px"}
          bg={"brand.primary"}
          color={"white"}
          mt="2rem"
          onClick={() => {
            dispatch(addRole({role, noOfUsers: 1, dateCreated: formatDate(new Date()) }))
            onClose();
          }}
        >
          Save
        </Button>
        </form>
      </Flex>
    );
  };
  
  export default NewRoleForm;
  