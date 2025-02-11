import { Link, Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import ardentLogo from "../../assets/ardent.png";

export default function ContactUs() {
    return (
        <Layout
            backgroundColour="black"
            textColour="white"
            images={[ardentLogo]}
            id="contact-us"
        >
            <>
                <Text as="h1" fontSize={"2rem"} pb="1rem">
                    CONTACT US
                </Text>
                <Text fontSize={"1rem"}>
                    We'd love to hear from you! Whether you have questions about
                    our services, need support, or just want to share your
                    feedback, our dedicated team is here to help.
                </Text>
                <Text fontSize={"1rem"}>
                    <strong>Email:</strong>{" "}
                    <Link href={"mailto:info@ardantgroup.co.uk"}>
                        info@ardantgroup.co.uk
                    </Link>
                </Text>
                <Text>
                    <strong>Address: </strong> 1 Sopwith Crescent, Wickford,
                    Essex, United Kingdom, SS11 8YU
                </Text>
                <Text fontSize={"1rem"}>
                    Feel free to reach out anytime—our team typically responds
                    within 24 hours.
                </Text>
            </>
        </Layout>
    );
}
