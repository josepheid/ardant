import { Text, Center, VStack, Stack, Image } from "@chakra-ui/react";
import ardentLogo from "../../assets/ardent.png";

export default function Bespoke() {
    return (
        <Center
            id="bespoke"
            backgroundColor="white"
            py={{ base: "6rem", md: "8rem" }}
            px={{ base: "4rem", md: "2rem" }}
            minHeight={"100vh"}
        >
            <Stack direction={{ base: "column", md: "row" }} gap="10">
                <VStack color={"black"} alignItems={"start"}>
                    <Text as="h1" fontSize={"2rem"} pb="1rem">
                        ABOUT US
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
                <Center>
                    <Image src={ardentLogo} />
                </Center>
            </Stack>
        </Center>
    );
}
