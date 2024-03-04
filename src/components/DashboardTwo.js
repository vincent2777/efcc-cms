import { Flex } from "@chakra-ui/react";
import React from "react";
import CardTitle from "./CardTitle";
import CustomPieChart from "./CustomPieChart";
import CustomCalendar from "./CustomCalendar";
import VerticalBarChart from "./VerticalBarChart";

const DashboardTwo = () => {
  return (
    <>
      <Flex
        wrap="wrap"
        py={2}
        justify={"space-between"}
        sx={{
          "& > div": {
            flexBasis: [
              "100%",
              "100%",
              "calc(100% / 2.005)",
              "calc(100% / 3.005)",
            ],
            h: "30rem",
            px: 2,
            pt: 4,
            "& > div": {
              flexGrow: 1,
              bg: "white",
              flexDir: "column",
              py: 4,
            },
          },
        }}
      >
        <Flex>
          <Flex>
            <CardTitle title={"CASES ASSIGNED TO COURT"} />
            <CustomPieChart
              data={[
                {
                  name: "Trial",
                  value: 25,
                },
                {
                  name: "Supreme Court",
                  value: 25,
                },
                {
                  name: "Court Of Appeal",
                  value: 50,
                },
              ]}
              colors={["#85C950", "#FFC34F", "#6e0d13"]}
            />
          </Flex>
        </Flex>
        <Flex>
          <Flex>
            <CardTitle title={"CASE CATEGORIZATION"} />
            <VerticalBarChart />
          </Flex>
        </Flex>
        <Flex grow={1}>
          <Flex>
            <CardTitle title={"Calendar"} />
            <CustomCalendar />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardTwo;
