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
import { addDepartment } from "../redux/slices/roleSlice";

  
  const NewDepartmentForm = ({ onClose }) => {
    const [deptName, setDeptName] = useState("")
    const dispatch = useDispatch()
    return (
      <Flex as={FormControl} direction={"column"} gap={3}>
        <form>
        <Box>
          <FormLabel>Department Name</FormLabel>
          <Input
            isRequired
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
            placeholder="Enter department name"
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
            dispatch(addDepartment({deptName, members: 1, status: "active" }))
            onClose();
          }}
        >
          Save
        </Button>
        </form>
      </Flex>
    );
  };
  
  export default NewDepartmentForm;
  