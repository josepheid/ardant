import { Text, Center, VStack, Stack } from "@chakra-ui/react";

import ardentLogo from "../../assets/ardent.png";
import livingroomImage from "../../assets/livingroom.jpg";
import Carousel from "../Carousel/Carousel";

export default function Residential() {
    const images = [ardentLogo, livingroomImage];

    return (
        <Center
            id="residential"
            backgroundColor="black"
            py={{ base: "6rem", md: "8rem" }}
            px={{ base: "4rem", md: "2rem" }}
            minHeight={"100vh"}
        >
            <Stack direction={{ base: "column", md: "row" }} gap="10">
                <VStack color={"white"} alignItems={"start"} width={"100%"}>
                    <Text as="h1" fontSize={"2rem"} pb="1rem">
                        RESIDENTIAL
                    </Text>
                    <Text fontSize={"1rem"}>
                        As a specialist in residential construction in London,
                        our process begins with comprehensive planning and
                        pre-construction stages. This approach not only provides
                        peace of mind but also guarantees that you receive
                        precisely what you want when you choose us as your
                        construction partner. Whether it&apos;s handling
                        planning permissions or advising on procurement
                        strategies, our expert team meticulously ensures every
                        detail is accounted for.
                    </Text>
                    <Text fontSize={"1rem"}>
                        Our pre-construction services and systems are designed
                        to eliminate potential future time and cost challenges —
                        a key component for successful project delivery and
                        managing expectations in luxury property developments.
                    </Text>
                    <Text fontSize={"1rem"}>
                        Once construction commences, our skilled in-house
                        tradesmen, supported by a select group of
                        subcontractors, take charge of the build. Dedicated
                        Project and Site Managers oversee the progress and stay
                        in constant contact with your Business Relationship
                        Manager and our Cost Control Managers, ensuring you are
                        consistently updated. We are committed to your
                        satisfaction at every phase, with the option for
                        face-to-face meetings or project walkthroughs,
                        complemented by an online project management system
                        offering access to live project data at any time.
                    </Text>
                </VStack>
                <Carousel images={images} />
            </Stack>
        </Center>
    );
}
