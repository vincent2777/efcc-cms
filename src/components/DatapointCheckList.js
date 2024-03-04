import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const checkboxOptions = [
  "Suit Number",
  "Parties",
  "Summary of facts",
  "Relief sought",
  "Date  received",
  "Zone",
  "Court/Judge",
  "Defense counsel",
  "Date assigned",
  "Judgement Delivered",
  "Outcome",
  "Remark",
  "Status",
  "Charge number",
];
const DatapointCheckList = () => {
  const navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const handleSelectAll = () => {
    if (checkedItems.length === checkboxOptions.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(checkboxOptions);
    }
  };

  return (
    <div>
      <Flex justify={"space-between"} p={2}>
        <Text fontWeight={"bold"} flexShrink={0}>
          Select Datapoints
        </Text>
        <Flex as={"label"} gap={3} name="all">
          {checkedItems.length === checkboxOptions.length ? (
            <MdCheckBox size={"1.5rem"} />
          ) : (
            <MdCheckBoxOutlineBlank size={"1.5rem"} />
          )}
          <input
            type="checkbox"
            for="all"
            onChange={handleSelectAll}
            style={{ position: "absolute", opacity: 0 }}
          />
          Select All
        </Flex>
      </Flex>
      <Divider />

      <Flex
        wrap={"wrap"}
        maxW={"50rem"}
        sx={{
          "& > div": {
            flexBasis: ["100%", "100%", "calc(100% /2)"],
          },
          "& svg": { fill: "brand.primary" },
        }}
      >
        {checkboxOptions.map((option) => (
          <Flex p={2}>
            <Flex
              as={"label"}
              name="option"
              key={option}
              border={"1px solid #C4C4C4"}
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
          </Flex>
        ))}
      </Flex>

      <Button
        borderRadius={"5px"}
        bg={"brand.primary"}
        color={"white"}
        mt="2rem"
        w={["full", "25rem"]}
        onClick={() => navigate("/reports/standard-reports")}
      >
        Generate Custom Report
      </Button>
    </div>
  );
};

export default DatapointCheckList;
