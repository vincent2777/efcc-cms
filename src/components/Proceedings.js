import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { MdCalendarMonth } from "react-icons/md";
import { PiCaretDown } from "react-icons/pi";
import { BiFontSize } from "react-icons/bi";

const Proceeding = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCalendar, setShowCalendar] = useState(false);
  const date = new Date(Date.now()); // Replace this with your date

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  return (
    <>
      <Flex
        cursor={"pointer"}
        direction={"column"}
        p={4}
        borderBottom={"1px solid #898989"}
        onClick={onOpen}
      >
        <Text color="#1E1E1E" fontWeight={"bold"} fontSize={"1.25rem"}>
          22/02/2019
        </Text>
        <Text color={"#898989"} fontSize={"0.8rem"}>
          Recorded by Samuel Anieke{" "}
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent pb={4}>
          <Flex justify={"space-between"} px={6}>
            <ModalHeader px={0}>{formattedDate}</ModalHeader>
            <Flex gap={4} align={"center"}>
              <Text fontWeight={"bold"}>Next adjourned date:</Text>
              <Flex position={"relative"}>
                <Flex
                  gap={4}
                  alignItems={"center"}
                  color={"#B5B5B5"}
                  border={"1px solid #B5B5B5"}
                  p={2}
                  justify={"space-around"}
                  onClick={() => setShowCalendar(true)}
                  cursor={"pointer"}
                  width={["full", "15rem", "15rem", "15rem"]}
                >
                  <MdCalendarMonth size={"1.5rem"} /> dd/mm/yy{" "}
                  <PiCaretDown size={"1.5rem"} />
                </Flex>

                <Flex
                  position={"absolute"}
                  top={0}
                  zIndex={200}
                  right={["-20%", 0, 0]}
                  width={"20rem"}
                >
                  {showCalendar && (
                    <CustomCalendar
                      showCloseButton={true}
                      setShowCalendar={setShowCalendar}
                      monthAndYearWrapperMargin="0"
                    />
                  )}
                </Flex>
              </Flex>
              <Center height={"40px"} ml={4}>
                <Divider opacity={1} orientation="vertical" />
              </Center>
              <ModalCloseButton position={"static"} color={"red"}>
                Close
              </ModalCloseButton>
            </Flex>
          </Flex>
          <ModalBody>
            <Flex justify="space-between" alignItems={"center"} py={2}>
              <Text fontWeight={"bold"}>Remark</Text>
              <Flex gap="2" alignItems={"center"}>
                <Text>Change Font Size</Text>
                <IconButton
                  bg="none"
                  aria-label="Search database"
                  icon={<BiFontSize />}
                />
              </Flex>
            </Flex>
            <Flex maxH={"32rem"} overflowY={"auto"} bg="#F3F3F3" p={4}>
              <Text color={"#5C5C5C"}>
                After the legal proceeding in court, a typical remark from a
                lawyer involved in a money embezzlement case might be as
                follows: "Your Honor, today's proceedings have been instrumental
                in shedding light on the intricate details of the alleged money
                embezzlement case. We diligently presented evidence and
                testimonies that strongly support our hypothesis and demonstrate
                our client's innocence. The defense firmly maintains that the
                prosecution's claims lack substantial merit and fail to
                establish any direct link between our client and the embezzled
                funds. Throughout this trial, we have rigorously adhered to the
                principles of justice, ensuring that every piece of evidence and
                witness testimony was thoroughly examined. The intricacies of
                financial transactions were analyzed in-depth, and we have
                exposed several discrepancies in the prosecution's case. Based
                on our thorough analysis, we hypothesize that our client was not
                involved in any intentional misappropriation of funds. Instead,
                the evidence points towards possible errors in accounting or
                other unrelated factors that might have contributed to the
                situation. We trust that the court will objectively assess the
                evidence presented and deliver a fair and just verdict. We
                remain steadfast in our dedication to defending our client's
                rights and will continue to pursue all avenues available to
                ensure the truth prevails. As the trial concludes, we express
                our gratitude to the court for providing a fair and impartial
                platform for justice to be served." Please note that this is a
                generic example, and the actual remarks may vary depending on
                the specific details and arguments presented in the case.
                Additionally, this is a fictional scenario, and any resemblance
                to real cases or individuals is purely coincidental. After the
                legal proceeding in court, a typical remark from a lawyer
                involved in a money embezzlement case might be as follows: "Your
                Honor, today's proceedings have been instrumental in shedding
                light on the intricate details of the alleged money embezzlement
                case. We diligently presented evidence and testimonies that
                strongly support our hypothesis and demonstrate our client's
                innocence. The defense firmly maintains that the prosecution's
                claims lack substantial merit and fail to establish any direct
                link between our client and the embezzled funds. Throughout this
                trial, we have rigorously adhered to the principles of justice,
                ensuring that every piece of evidence and witness testimony was
                thoroughly examined. The intricacies of financial transactions
                were analyzed in-depth, and we have exposed several
                discrepancies in the prosecution's case. Based on our thorough
                analysis, we hypothesize that our client was not involved in any
                intentional misappropriation of funds. Instead, the evidence
                points towards possible errors in accounting or other unrelated
                factors that might have contributed to the situation. We trust
                that the court will objectively assess the evidence presented
                and deliver a fair and just verdict. We remain steadfast in our
                dedication to defending our client's rights and will continue to
                pursue all avenues available to ensure the truth prevails. As
                the trial concludes, we express our gratitude to the court for
                providing a fair and impartial platform for justice to be
                served." Please note that this is a generic example, and the
                actual remarks may vary depending on the specific details and
                arguments presented in the case. Additionally, this is a
                fictional scenario, and any resemblance to real cases or
                individuals is purely coincidental.
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Proceedings = () => {
  return (
    <Flex direction={"column"} bg="white" w="full">
      <Flex
        justifyContent="space-between"
        borderBottom={"2px  solid red"}
        p={4}
      >
        <Text fontWeight={"bold"} fontSize={".9rem"}>
          Proceedings
        </Text>
        <Text fontSize={".8rem"}>See All</Text>
      </Flex>

      {[...Array(5)].map((_, i) => (
        <Proceeding key={i} />
      ))}
    </Flex>
  );
};

export default Proceedings;
