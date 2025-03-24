import { Text } from "@chakra-ui/react";

import Layout from "../Layout/Layout";

export default function Bespoke() {
    const images = [
        "woodwork2.jpg",
        "woodwork.jpg",
        "lobby.jpg",
        "homeoffice.jpg",
        "b2.jpg",
        "bespoke.jpg",
    ];
    return (
        <Layout
            textColour="black"
            backgroundColour="white"
            images={images}
            id="bespoke"
            title="BESPOKE"
        >
            <Text fontSize={"1rem"}>
                Bespoke finishes bring an unparalleled level of craftsmanship
                and attention to detail, transforming everyday spaces into
                curated works of art.
            </Text>

            <Text fontSize={"1rem"}>
                Handcrafted shop displays are thoughtfully designed to capture
                the essence of your brand, using materials and techniques that
                highlight the natural beauty of each element.
            </Text>

            <Text fontSize={"1rem"}>
                Pop-up displays extend this personalized approach to temporary
                installations, offering a dynamic and adaptable presence that
                can invigorate any environment.
            </Text>

            <Text fontSize={"1rem"}>
                Meanwhile, bespoke floor and wall finishes are carefully
                engineered to combine both function and form. Whether through
                intricate patterns, textured overlays, or custom color palettes,
                every surface tells its own unique story.
            </Text>

            <Text fontSize={"1rem"}>
                This attention to detail not only ensures a visually striking
                result but also creates a lasting impression that resonates with
                both customers and visitors alike.
            </Text>
        </Layout>
    );
}
