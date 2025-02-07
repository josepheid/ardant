import { Text, Center, VStack, Stack } from "@chakra-ui/react";
import drawing from "../../assets/drawing.jpg";
import sketch from "../../assets/sketch.jpg";

import Carousel from "../Carousel/Carousel";

export default function PlanningAndDesign() {
    const images = [drawing, sketch];
    return (
        <Center
            id="planning-and-design"
            backgroundColor="black"
            py={{ base: "6rem", md: "8rem" }}
            px={{ base: "2rem", md: "2rem" }}
            minHeight={"100vh"}
        >
            <Stack direction={{ base: "column", md: "row" }} gap="10">
                <VStack color={"white"} alignItems={"start"}>
                    <Text as="h1" fontSize={"2rem"} pb="1rem">
                        PLANNING AND DESIGN
                    </Text>
                    <Text fontSize={"1rem"}>
                        Our dedicated design managers lead a team of skilled
                        architects and designers who masterfully balance design
                        precision with build feasibility—all while keeping costs
                        in line—to craft functional, coherent spaces that truly
                        reflect your personal style. Whether you’re looking to
                        enhance a single room, completely transform your
                        property or commercial space, you can trust our
                        designers to fully understand your needs and involve you
                        throughout the process, ensuring the final result is
                        perfectly aligned with your vision. From initial
                        hand-drawn sketches to CAD drawings, complete 3D
                        renders, and BIM models, we’re ready to bring your
                        project to life and elevate it to the next level.
                        Additionally, our services extend to refining existing
                        plans for build stage, offering support in project
                        feasibility, value engineering, upfront pricing advice,
                        and procurement assistance right through to tender and
                        construction.
                    </Text>
                </VStack>
                <Carousel images={images} />
            </Stack>
        </Center>
    );
}
