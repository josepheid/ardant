import { Text } from "@chakra-ui/react";

import Layout from "../Layout/Layout";

export default function Residential() {
    const images = [
        "livingroom.jpg",
        "bathroom2.jpg",
        "wardrobe.jpg",
        "res1.jpg",
        "res2.jpg",
        "res3.jpg",
        "res4.jpg",
        "res5.jpg",
        "residential.jpg",
    ];

    return (
        <Layout
            textColour="white"
            backgroundColour="black"
            images={images}
            id="residential"
            title="RESIDENTIAL"
        >
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                As a specialist in residential construction in London, our
                process begins with comprehensive planning and pre-construction
                stages. This approach not only provides peace of mind but also
                guarantees that you receive precisely what you want when you
                choose us as your construction partner. Whether it&apos;s
                handling planning permissions or advising on procurement
                strategies, our expert team meticulously ensures every detail is
                accounted for.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Our pre-construction services and systems are designed to
                eliminate potential future time and cost challenges — a key
                component for successful project delivery and managing
                expectations in luxury property developments.
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.25rem" }}>
                Once construction commences, our skilled in-house tradesmen,
                supported by a select group of subcontractors, take charge of
                the build. Dedicated Project and Site Managers oversee the
                progress and stay in constant contact with your Business
                Relationship Manager and our Cost Control Managers, ensuring you
                are consistently updated. We are committed to your satisfaction
                at every phase, with the option for face-to-face meetings or
                project walkthroughs, complemented by an online project
                management system offering access to live project data at any
                time.
            </Text>
        </Layout>
    );
}
