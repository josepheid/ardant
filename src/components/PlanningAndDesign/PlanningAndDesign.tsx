import { Text } from "@chakra-ui/react";

import Layout from "../Layout/Layout";

export default function PlanningAndDesign() {
    const images = ["drawing.jpg", "sketch.jpg"];
    return (
        <Layout
            textColour="white"
            backgroundColour="black"
            images={images}
            id="planning-and-design"
        >
            <Text as="h1" fontSize={"2rem"} pb="1rem">
                PLANNING AND DESIGN
            </Text>
            <Text fontSize={"1rem"}>
                Our dedicated design managers lead a team of skilled architects
                and designers who masterfully balance design precision with
                build feasibility—all while keeping costs in line—to craft
                functional, coherent spaces that truly reflect your personal
                style. Whether you’re looking to enhance a single room,
                completely transform your property or commercial space, you can
                trust our designers to fully understand your needs and involve
                you throughout the process, ensuring the final result is
                perfectly aligned with your vision. From initial hand-drawn
                sketches to CAD drawings, complete 3D renders, and BIM models,
                we’re ready to bring your project to life and elevate it to the
                next level. Additionally, our services extend to refining
                existing plans for build stage, offering support in project
                feasibility, value engineering, upfront pricing advice, and
                procurement assistance right through to tender and construction.
            </Text>
        </Layout>
    );
}
