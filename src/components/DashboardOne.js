import { Flex } from "@chakra-ui/react";
import React from "react";
import CardTitle from "./CardTitle";
import CustomPieChart from "./CustomPieChart";
import HorizontalBarChart from "./HorizontalBarChart";
import ProfileCasesBarChart from "./ProfileCasesBarChart";
import CustomCalendar from "./CustomCalendar";

const DashboardOne = () => {
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
            <CardTitle title={"Filed Case Categorization"} />
            <CustomPieChart
              data={[
                {
                  name: "On-going Cases",
                  value: 35,
                },
                {
                  name: "Closed-cases",
                  value: 65,
                },
              ]}
            />
          </Flex>
        </Flex>
        <Flex>
          <Flex>
            <CardTitle title={"Annual percentage of cases"} />
            <CustomPieChart
              data={[
                {
                  name: "Cases Won",
                  value: 50,
                },
                {
                  name: "Cases Lost",
                  value: 50,
                },
              ]}
              colors={["#78FC72", "#18A0FB"]}
            />
          </Flex>
        </Flex>
        <Flex grow={1}>
          <Flex>
            <CardTitle title={"Calendar"} />
            <CustomCalendar />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        wrap={"wrap"}
        sx={{
          "& > div": {
            flexBasis: ["100% ", "100% ", "100%", "calc(100% / 2.005)"],
            h: "30rem",
            px: 2,
            maxW: "100%",
            "& > div": {
              pt: 4,
              flexGrow: 1,
              bg: "white",
              flexDir: "column",
              overflow: "auto",
              maxW: "100%",
            },
          },
        }}
      >
        <Flex>
          <Flex>
            <CardTitle title="Cases" />
            <HorizontalBarChart />
          </Flex>
        </Flex>
        <Flex>
          <Flex>
            <CardTitle title="High Profile Cases/Low Profile Cases" />
            <ProfileCasesBarChart />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardOne;
