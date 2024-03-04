import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const permissions = [
    "Can view dashboard",
    "Can create users",
    "Can export reports",
    "Can view dashboard",
    "Can view dashboard",
];

const AdminRolePermissionForm = () => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((item) => item !== value));
        } else {
            setCheckedItems([...checkedItems, value]);
        }
    };


    return (
        <>
            <Text color={"#898989"}>This role has the following permissions</Text>
            <Flex
                wrap={"wrap"}
                maxW={"50rem"}
                gap={2}
                justify={"space-between"}
                sx={{
                    "& > div": {
                        flexBasis: "100%",
                        bgColor: "#F9F9F9",
                    },
                    "& svg": { fill: "brand.primary" },
                }}
            >
                {permissions.map((option) => (
                    <Flex p={2}>
                        <Flex
                            as={"label"}
                            name="option"
                            key={option}
                            cursor={"pointer"}
                            align={"center"}
                            gap={3}
                            grow={1}
                            p={2}
                        >
                            {checkedItems.includes(option) ? (
                                <MdCheckBox size={"1.5rem"} />
                            ) : (
                                <MdCheckBoxOutlineBlank size={"1.5rem"} />
                            )}
                            <input
                                type="checkbox"
                                value={option}
                                for="option"
                                checked={checkedItems.includes(option)}
                                onChange={handleCheckboxChange}
                                style={{ position: "absolute", opacity: 0 }}
                            />
                            {option}
                        </Flex>

                        <Flex
                            gap={2}
                            sx={{
                                "& > button": {
                                    fontWeight: "normal",
                                    bg: "none",
                                    _hover: { bg: "none" },
                                    _focus: { bg: "none" },
                                },
                            }}
                        >
                            <Button>Edit</Button>
                            <Button color={"brand.primary"}>Delete</Button>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </>
    );
};

export default AdminRolePermissionForm;
