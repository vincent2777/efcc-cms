import React from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import DetailsCard from "../components/DetailsCard";
import DashboardOne from "../components/DashboardOne";
import DashboardTwo from "../components/DashboardTwo";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { role: userRole } = useSelector((state) => state.auth?.user);

  const detailsCard = [
    { name: "Legal Officers", number: 100, borderColor: "#6e0d13", bgColor: 'white' },
    { name: "Admin Officers", number: 50, borderColor: "#0c5460", bgColor: '#d1ecf1' },
    { name: "Commands", number: 15, borderColor: "#155724", bgColor: '#d4edda' },
    { name: "Total Convictions", number: 1450, borderColor: "#CD73D1", bgColor: 'white' },
  ];

  const dashboardOne = ["superAdmin", "chairman", "zonalCommandant"].some(
    (role, index) => {
      return role === userRole;
    }
  );

  return (
    <>
      <Text fontSize={"1.2rem"}>Dashboard</Text>
      <Divider my={4} />

      <Flex wrap={"wrap"}>
        {detailsCard.map(({ name, number, borderColor, bgColor }, index) => (
          <DetailsCard
            name={name}
            number={number}
            key={name}
            borderColor={borderColor}
            bgColor={bgColor}
          />
        ))}
      </Flex>

      {dashboardOne ? <DashboardOne /> : <DashboardTwo />}
    </>
  );
};

export default Dashboard;
