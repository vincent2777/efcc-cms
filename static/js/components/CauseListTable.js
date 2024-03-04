import {
    Badge,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";

const rows = [
    {
        chargeTitle: "Toby Jast vs Taxpayers",
        date: "06/04/2023",
        trialCourt: "Benin CT",
        status: "Legal Advice",
        suitNumber: "tCopXL3xs3QJM_m",
        chargeNumber: "LgSlVzSA6hcHqZ2",
        command: "Silashaven",
    },
    {
        chargeTitle: "Mario MacGyver vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Legal Advice",
        suitNumber: "HJbqQO0KFUTDHwC",
        chargeNumber: "MR_kMmrbPn6E1Cf",
        command: "South Marguerite",
    },
    {
        chargeTitle: "Rowland Quitzon vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Legal Advice",
        suitNumber: "4vjmJrJ2oTVGdy2",
        chargeNumber: "ea99u9LcOlmnp1H",
        command: "Port Jovanimouth",
    },
    {
        chargeTitle: "Loy MacGyver vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Legal Advice",
        suitNumber: "Y1hQl2NPK4Bn3Qg",
        chargeNumber: "7ONGTWxVuGrgTF8",
        command: "Lake Jordonmouth",
    },
    {
        chargeTitle: "Bruce Hintz vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Case open",
        suitNumber: "7_D_eoGFJnYkpSD",
        chargeNumber: "vWiUl0rytRufMYM",
        command: "North Alberta",
    },
    {
        chargeTitle: "Eloy Smitham vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Judgement",
        suitNumber: "KsGxfu4YFBLRozj",
        chargeNumber: "Q2rO05oAr5j6pu5",
        command: "Champaign",
    },
    {
        chargeTitle: "Kennedy Rath vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Legal Advice",
        suitNumber: "Qzl1FWHDzYig85D",
        chargeNumber: "rwksVGcoRZcE9Jp",
        command: "Hirtheshire",
    },
    {
        chargeTitle: "Jordane Bergnaum vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Case in Appeal Court",
        suitNumber: "DTbbcAQDio5bQcj",
        chargeNumber: "a2MHAxJZbyxRuco",
        command: "New Paris",
    },
    {
        chargeTitle: "Jadyn Zulauf vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Case Open",
        suitNumber: "6j9v1_4klAGUdvy",
        chargeNumber: "7gzzsrTE0ZgR6zY",
        command: "New Daisy",
    },
    {
        chargeTitle: "Marlin Bosco vs Taxpayers",
        trialCourt: "Benin CT",
        date: "06/04/2023",
        status: "Legal Advice",
        suitNumber: "UGp9I2YFvTDMchT",
        chargeNumber: "cfLX8E7ZzMQimJf",
        command: "Richmond",
    },
];

function getColor(status) {
    if (status.toLowerCase() === "legal advice") return "purple";
    if (status.toLowerCase() === "case open") return "green";
    if (status.toLowerCase() === "case in appeal court") return "yellow";
    if (status.toLowerCase() === "judgement") return "cyan";
}

const CauseListTable = () => {
    return (
        <TableContainer>
            <Table
                variant="striped"
            // style={{ borderCollapse: "inherit", borderSpacing: "0 .5rem" }}
            >
                <Thead>
                    <Tr>
                        {[
                            "S/N",
                            "Date",
                            "Command",
                            "Charge Title",
                            "Trial Court",
                            "Suit Number",
                            "Charge Number",
                            "Status",
                        ]?.map((item) => {
                            return (
                                <Th py="10px" key={nanoid()}>
                                    {item}
                                </Th>
                            );
                        })}
                    </Tr>
                </Thead>
                <Tbody position="relative" fontSize=".8em">
                    {rows.map((row, index) => (
                        <Tr bg={"white"} my={3} key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{row.date}</Td>
                            <Td>{row.command}</Td>
                            <Td>{row.chargeTitle}</Td>
                            <Td>{row.trialCourt}</Td>
                            <Td>{row.suitNumber}</Td>
                            <Td>{row.chargeNumber}</Td>
                            <Td>
                                <Badge
                                    fontWeight={"medium"}
                                    textTransform={"none"}
                                    colorScheme={getColor(row.status.trim())}
                                    p={1.5}
                                >
                                    {row.status}
                                </Badge>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default CauseListTable;
