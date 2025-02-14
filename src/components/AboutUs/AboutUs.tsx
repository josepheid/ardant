import { Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import ardantLogo from "../../assets/ardant.png";

export default function AboutUs() {
    return (
        <Layout
            backgroundColour="white"
            textColour="black"
            images={[ardantLogo]}
            id="about-us"
        >
            <>
                <Text as="h1" fontSize={"2rem"} pb="1rem">
                    ABOUT US
                </Text>
                <Text fontSize={"1rem"}>
                    At Ardant Group LTD, we are more than just a construction
                    company—we are your dedicated partners in transforming
                    visionary ideas into reality. With a rich history in the
                    industry, our expertise spans residential, commercial,
                    planning and design, and bespoke craftsmanship, ensuring we
                    cover every dimension of your project.
                </Text>
                <Text fontSize={"1rem"}>
                    We work closely with our clients from the very first
                    concept, meticulously planning each detail, to the final
                    build, wherein we transform your dreams into tangible,
                    lasting spaces. Our approach is rooted in collaboration and
                    innovation, fostering open communication and trust every
                    step of the way.
                </Text>
                <Text fontSize={"1rem"}>
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
