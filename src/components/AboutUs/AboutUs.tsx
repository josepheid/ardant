import { Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import ardentLogo from "../../assets/ardent.png";

export default function AboutUs() {
    return (
        <Layout
            backgroundColour="white"
            textColour="black"
            images={[ardentLogo]}
            id="#about-us"
        >
            <>
                <Text as="h1" fontSize={"2rem"} pb="1rem">
                    ABOUT US
                </Text>
                <Text fontSize={"1rem"}>
                    Here at Ardant Group, we specialise in the development and
                    renovation of homes and properties to the highest standard.
                    Founded in 2016, we are a dynamic, family-run company based
                    in the North London and Hertfordshire area with over 50
                    years worth of knowledge and experience in the industry.
                </Text>
                <Text fontSize={"1rem"}>
                    We pride ourselves on having established a culture based on
                    honesty, reliability and trust. We continuously strive to
                    deliver an unrivalled quality of service and workmanship in
                    all that we do. We offer a variety of bespoke, on-trend,
                    creative solutions to suit any style of home or project and
                    pride ourselves on our ability to cater to any requirement.
                </Text>
            </>
        </Layout>
    );
}
