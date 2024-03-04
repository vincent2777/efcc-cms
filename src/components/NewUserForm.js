import {useState} from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/usersSlice";
import { roles } from "../data/mock";


const NewUserForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [type, setType] = useState("")
  return (
    <Flex as={FormControl} direction={"column"} gap={3}>
      <Box>
        <FormLabel>Full Name</FormLabel>
        <Input
          isRequired
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Email Address</FormLabel>
        <Input
          isRequired
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Phone Number</FormLabel>
        <Input
          isRequired
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          _placeholder={{ color: "#B4B1B1" }}
          bg={"#F3F3F3"}
        />
      </Box>
      <Box>
        <FormLabel>Assign to a Zone</FormLabel>
        <Select
          isRequired
          placeholder="--select zone--"
          bg={"#F3F3F3"}
          color={"#B4B1B1"}
        >
          <option value="option2">Zone 1</option>
          <option value="option1">Zone 2</option>
          <option value="option3">Zone 3</option>
          <option value="option3">Zone 4</option>
          <option value="option3">Zone 5</option>
          <option value="option3">Zone 6</option>
          <option value="option3">Zone 7</option>
        </Select>
      </Box>
      <Box>
        <FormLabel>Assign position</FormLabel>
        <Select
          isRequired
          placeholder="--select user type--"
          bg={"#F3F3F3"}
          color={"#B4B1B1"}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {roles.map((role) => (
            <option value={role?.role}>{role?.role}</option>
          ))}
          
          
        </Select>
      </Box>

      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="2rem"
        onClick={() => {
          dispatch(addUser({fullName, email, phoneNumber, type, status: "active"}))
          onClose();
        }}
      >
        Save
      </Button>
    </Flex>
  );
};

export default NewUserForm;
