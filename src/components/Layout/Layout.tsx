import { Box, Center, Stack, Text, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Carousel from "../Carousel/Carousel";

export default function Layout({
    title,
    textColour,
    backgroundColour,
    images,
    image,
    id,
    children,
}: {
    title: string;
    textColour: "black" | "white";
    backgroundColour: "black" | "white";
    images?: string[];
    image?: JSX.Element;
    id: string;
    children: JSX.Element[] | JSX.Element;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <Center
            id={id}
            backgroundColor={backgroundColour}
            py={{ base: "6rem", md: "2rem" }}
            px={{ base: "1rem", md: "2rem" }}
            minHeight={"100vh"}
        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Text as="h2" fontSize={"2.5rem"} pb="1rem" color={textColour}>
                    {title}
                </Text>

                <Stack direction={{ base: "column", md: "row" }} gap="10">
                    {(images || image) && backgroundColour === "black" && (
                        <Box width={{ base: "100%", md: "50%" }}>
                            {images && <Carousel images={images} />}
                            {image && image}
                        </Box>
                    )}
                    <VStack
                        color={textColour}
                        alignItems={"start"}
                        width={{
                            base: "100%",
                            md: images || image ? "50%" : "100%",
                        }}
                    >
                        {children}
                    </VStack>
                    {(images || image) && backgroundColour === "white" && (
                        <Box
                            width={{ base: "100%", md: "50%" }}
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            {images && <Carousel images={images} />}
                            {image && image}
                        </Box>
                    )}
                </Stack>
            </motion.div>
        </Center>
    );
}
