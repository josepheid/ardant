import { Text, Center, VStack, Stack } from "@chakra-ui/react";
import office from "../../assets/office.jpg";
import bathroom from "../../assets/bathroom.jpg";
import Carousel from "../Carousel/Carousel";

export default function Commercial() {
    const images = [office, bathroom];
    return (
        <Center
            id="commercial"
            backgroundColor="white"
            py={{ base: "6rem", md: "8rem" }}
            px={{ base: "2rem", md: "2rem" }}
            minHeight={"100vh"}
        >
            <Stack direction={{ base: "column", md: "row" }} gap="10">
                <VStack color={"black"} alignItems={"start"}>
                    <Text as="h1" fontSize={"2rem"} pb="1rem">
                        COMMERCIAL
                    </Text>
                    <Text fontSize={"1rem"}>
                        We have completed numerous office and industrial
                        refurbishments using a specialist approach tailored to
                        every project, regardless of size or complexity. Beyond
                        simply updating your space, our refurbishments create a
                        more efficient working environment that inspires staff
                        to reach their full potential and boost
                        productivity—without the expense and disruption of
                        relocating.
                    </Text>
                    <Text fontSize={"1rem"}>
                        We begin by closely examining your current fit-out to
                        discover what truly satisfies your team. We then align
                        these insights with your project goals to craft a
                        solution that enhances your organization’s performance
                        and ultimately delivers the best return on your
                        investment.
                    </Text>
                    <Text fontSize={"1rem"}>
                        Once we understand your work style, we transform your
                        needs into a dynamic and inspiring workspace design that
                        reflects your brand identity while ensuring a more
                        enjoyable and productive environment for your staff.
                    </Text>
                    <Text fontSize={"1rem"}>
                        Our effective delivery of office and industrial
                        refurbishments starts with strong management. Your
                        designated Ardant project manager serves as your single
                        point of contact for every requirement, keeping all
                        stakeholders updated, overseeing health and safety, and
                        ensuring your refurbishment is delivered on time and
                        without issue.
                    </Text>
                    <Text fontSize={"1rem"}>
                        We are experts at working in occupied spaces, scheduling
                        any disruptive activities outside of normal hours or
                        during weekends to keep noise and disturbance to a
                        minimum. Understanding that your team cannot pause their
                        work, we devise a strategy to progressively hand back
                        areas—or even whole floors—as they are completed. This
                        includes arranging temporary IT connections and
                        workstations while we execute your workspace
                        transformation.
                    </Text>
                    <Text fontSize={"1rem"}>
                        This approach depends on robust project management
                        across our supply chain, and we only engage top-tier
                        subcontractors who have passed stringent vetting to meet
                        our quality, safety, and environmental standards.
                    </Text>
                </VStack>
                <Carousel images={images} />
            </Stack>
        </Center>
    );
}
