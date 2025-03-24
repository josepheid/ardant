import { Image, Link, Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";

export default function ContactUs() {
    return (
        <Layout
            backgroundColour="white"
            textColour="black"
            image={<Image src="logofull.svg" />}
            id="contact-us"
            title="CONTACT US"
        >
            <>
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
                <Text fontSize={"1rem"}>
                    <strong>Telephone:</strong>{" "}
                    <Link href={"tel:02080874206"}>020 8087 4206</Link>
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
