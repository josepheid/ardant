import { Image, Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";

export default function AboutUs() {
    return (
        <Layout
            backgroundColour="white"
            textColour="black"
            image={<Image src="logofull.svg" width={"60%"} m={"auto"} />}
            id="about-us"
            title="ABOUT US"
        >
            <>
                <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                    At Ardant Group LTD, we are more than just a construction
                    company—we are your dedicated partners in transforming
                    visionary ideas into reality. With a rich history in the
                    industry, our expertise spans residential, commercial,
                    planning and design, and bespoke craftsmanship, ensuring we
                    cover every dimension of your project.
                </Text>
                <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                    We work closely with our clients from the very first
                    concept, meticulously planning each detail, to the final
                    build, wherein we transform your dreams into tangible,
                    lasting spaces. Our approach is rooted in collaboration and
                    innovation, fostering open communication and trust every
                    step of the way.
                </Text>
                <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                    By blending traditional craftsmanship with modern
                    techniques, we not only meet but often exceed our
                    clients&apos; expectations, delivering functional, stylish,
                    and sustainable environments designed to stand the test of
                    time.
                </Text>
            </>
        </Layout>
    );
}
