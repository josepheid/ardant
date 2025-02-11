import { Text } from "@chakra-ui/react";

import wardrobe from "../../assets/wardrobe.jpg";
import bathroom2 from "../../assets/bathroom2.jpg";
import livingroomImage from "../../assets/livingroom.jpg";
import res1 from "../../assets/res1.jpg";
import res2 from "../../assets/res2.jpg";
import res3 from "../../assets/res3.jpg";
import res4 from "../../assets/res4.jpg";
import res5 from "../../assets/res5.jpg";
import residential from "../../assets/residential.jpg";

import Layout from "../Layout/Layout";

export default function Residential() {
    const images = [
        livingroomImage,
        bathroom2,
        wardrobe,
        res1,
        res2,
        res3,
        res4,
        res5,
        residential,
    ];

    return (
        <Layout
            textColour="white"
            backgroundColour="black"
            images={images}
            id="residential"
        >
            <Text as="h1" fontSize={"2rem"} pb="1rem">
                RESIDENTIAL
            </Text>
            <Text fontSize={"1rem"}>
                As a specialist in residential construction in London, our
                process begins with comprehensive planning and pre-construction
                stages. This approach not only provides peace of mind but also
                guarantees that you receive precisely what you want when you
                choose us as your construction partner. Whether it&apos;s
                handling planning permissions or advising on procurement
                strategies, our expert team meticulously ensures every detail is
                accounted for.
            </Text>
            <Text fontSize={"1rem"}>
                Our pre-construction services and systems are designed to
                eliminate potential future time and cost challenges — a key
                component for successful project delivery and managing
                expectations in luxury property developments.
            </Text>
            <Text fontSize={"1rem"}>
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
