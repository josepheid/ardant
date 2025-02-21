import {
    Box,
    Card,
    CardBody,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import Layout from "../Layout/Layout";

export default function Accreditations() {
    const accreditations = [
        {
            title: "Constructionline",
            description:
                "Our Constructionline accreditation showcases our proven track record and compliance with industry standards, ensuring reliable service delivery to our clients.",
            image: "/constructionline.jpg",
            link: "https://www.constructionline.co.uk/",
        },
        {
            title: "Social Value",
            description:
                "The Social Value accreditation reflects our dedication to generating positive outcomes for society, embedding social and environmental benefits in every project.",
            image: "/socialvalue.png",
            link: "https://www.constructionline.co.uk/",
        },
        {
            title: "SSIP Acclaim",
            description:
                "SSIP Acclaim accreditation highlights our continuous focus on safety management and risk reduction throughout our operations.",
            image: "/acclaim.png",
            link: "https://www.constructionline.co.uk/",
        },
    ];

    return (
        <Layout backgroundColour="black" textColour="white" id="accreditations">
            <>
                <Text as="h1" fontSize={"2rem"} pb="1rem">
                    ACCREDITATIONS
                </Text>
                <Text fontSize={"1rem"}>
                    We are proud to be accredited with Constructionline, Social
                    Value, and SSIP Acclaim. These qualifications underline our
                    strong commitment to quality, safety, and community impact.
                </Text>
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={8}
                    my={"1rem"}
                >
                    {accreditations.map((accreditation, index) => (
                        <Card
                            key={index}
                            bg={"white"}
                            shadow="md"
                            transition="all 0.3s"
                            _hover={{
                                transform: "translateY(-4px)",
                                shadow: "lg",
                            }}
                        >
                            <CardBody>
                                <Link
                                    href={accreditation.link}
                                    isExternal
                                    _hover={{ textDecoration: "none" }}
                                >
                                    <VStack spacing={6}>
                                        <Box
                                            h="32"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Image
                                                src={accreditation.image}
                                                alt={accreditation.title}
                                                maxH="full"
                                                objectFit="contain"
                                            />
                                        </Box>
                                        <Heading
                                            size="md"
                                            fontWeight="semibold"
                                        >
                                            {accreditation.title}
                                        </Heading>
                                        <Text>{accreditation.description}</Text>
                                    </VStack>
                                </Link>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
                <Text fontSize={"1rem"}>
                    Together, these credentials not only strengthen our
                    reputation but also affirm our commitment to excellence and
                    responsible business practices.
                </Text>
            </>
        </Layout>
    );
}
