import { Text, Center, VStack, Stack } from "@chakra-ui/react";
import woodwork2 from "../../assets/woodwork2.jpg";
import woodwork from "../../assets/woodwork.jpg";
import lobby from "../../assets/lobby.jpg";

import Carousel from "../Carousel/Carousel";

export default function Bespoke() {
    const images = [woodwork2, woodwork, lobby];
    return (
        <Center
            id="bespoke"
            backgroundColor="white"
            py={{ base: "6rem", md: "8rem" }}
            px={{ base: "2rem", md: "2rem" }}
            minHeight={"100vh"}
        >
            <Stack direction={{ base: "column", md: "row" }} gap="10">
                <VStack color={"black"} alignItems={"start"}>
                    <Text as="h1" fontSize={"2rem"} pb="1rem">
                        BESPOKE
                    </Text>
                    <Text fontSize={"1rem"}>
                        Bespoke finishes bring an unparalleled level of
                        craftsmanship and attention to detail, transforming
                        everyday spaces into curated works of art. Hand crafted
                        shop displays are thoughtfully designed to capture the
                        essence of your brand, using materials and techniques
                        that highlight the natural beauty of each element. Pop
                        up displays extend this personalized approach to
                        temporary installations, offering a dynamic and
                        adaptable presence that can invigorate any environment.
                        Meanwhile, bespoke floor and wall finishes are carefully
                        engineered to combine both function and form, whether
                        through intricate patterns, textured overlays, or custom
                        colour palettes, every surface tells its own unique
                        story. This attention to detail not only ensures a
                        visually striking result but also creates a lasting
                        impression that resonates with both customers and
                        visitors alike.
                    </Text>
                </VStack>
                <Carousel images={images} />
            </Stack>
        </Center>
    );
}
