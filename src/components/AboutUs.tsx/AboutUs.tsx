import { Text, Center, VStack, Stack, Image } from "@chakra-ui/react";
import ardentLogo from "../../assets/ardent.png";
import drawingImage from "../../assets/drawing.jpg";

export default function AboutUs() {
    return (
        <Center
            id="aboutus"
            background="brand.navy"
            py="2rem"
            px="1rem"
            height={{ base: "auto", md: "100vh" }}
        >
            <Stack direction={{ base: "column", md: "row" }} gap="10">
                <VStack>
                    <Image src={ardentLogo} />
                    <Image src={drawingImage} />
                </VStack>
                <VStack>
                    <Text as="h1" fontSize={"2rem"} pb="1rem">
                        ABOUT US
                    </Text>
                    <Text color="brand.light" fontSize={"1.25rem"}>
                        Here at Ardant Group, we specialise in the development
                        and renovation of homes and properties to the highest
                        standard. Founded in 2016, we are a dynamic, family-run
                        company based in the North London and Hertfordshire area
                        with over 50 years worth of knowledge and experience in
                        the industry.
                    </Text>
                    <Text color="brand.light" fontSize={"1.25rem"}>
                        We pride ourselves on having established a culture based
                        on honesty, reliability and trust. We continuously
                        strive to deliver an unrivalled quality of service and
                        workmanship in all that we do. We offer a variety of
                        bespoke, on-trend, creative solutions to suit any style
                        of home or project and pride ourselves on our ability to
                        cater to any requirement.
                    </Text>
                </VStack>
            </Stack>
        </Center>
    );
}
