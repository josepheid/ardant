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
            title="PLANNING AND DESIGN"
        >
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Our dedicated design managers lead a team of skilled architects
                and designers who masterfully balance design precision with
                build feasibility— all while keeping costs in line— to craft
                functional, coherent spaces that truly reflect your personal
                style.
            </Text>

            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Whether you’re looking to enhance a single room, completely
                transform your property or commercial space, you can trust our
                designers to fully understand your needs and involve you
                throughout the process, ensuring the final result is perfectly
                aligned with your vision.
            </Text>

            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                From initial hand-drawn sketches to CAD drawings, complete 3D
                renders, and BIM models, we’re ready to bring your project to
                life and elevate it to the next level.
            </Text>

            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Additionally, our services extend to refining existing plans for
                the build stage, offering support in project feasibility, value
                engineering, upfront pricing advice, and procurement assistance
                right through to tender and construction.
            </Text>
        </Layout>
    );
}
