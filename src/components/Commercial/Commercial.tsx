import { Text } from "@chakra-ui/react";

import Layout from "../Layout/Layout";

export default function Commercial() {
    const images = ["office.jpg", "bathroom.jpg", "office2.jpg", "chairs.jpg"];
    return (
        <Layout
            textColour="black"
            backgroundColour="white"
            images={images}
            id="commercial"
            title="COMMERCIAL"
        >
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                We have completed numerous office and industrial refurbishments
                using a specialist approach tailored to every project,
                regardless of size or complexity. Beyond simply updating your
                space, our refurbishments create a more efficient working
                environment that inspires staff to reach their full potential
                and boost productivity—without the expense and disruption of
                relocating.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                We begin by closely examining your current fit-out to discover
                what truly satisfies your team. We then align these insights
                with your project goals to craft a solution that enhances your
                organization’s performance and ultimately delivers the best
                return on your investment.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Once we understand your work style, we transform your needs into
                a dynamic and inspiring workspace design that reflects your
                brand identity while ensuring a more enjoyable and productive
                environment for your staff.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Our effective delivery of office and industrial refurbishments
                starts with strong management. Your designated Ardant project
                manager serves as your single point of contact for every
                requirement, keeping all stakeholders updated, overseeing health
                and safety, and ensuring your refurbishment is delivered on time
                and without issue.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                We are experts at working in occupied spaces, scheduling any
                disruptive activities outside of normal hours or during weekends
                to keep noise and disturbance to a minimum. Understanding that
                your team cannot pause their work, we devise a strategy to
                progressively hand back areas—or even whole floors—as they are
                completed. This includes arranging temporary IT connections and
                workstations while we execute your workspace transformation.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                This approach depends on robust project management across our
                supply chain, and we only engage top-tier subcontractors who
                have passed stringent vetting to meet our quality, safety, and
                environmental standards.
            </Text>
        </Layout>
    );
}
