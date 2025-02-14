import { Center, Image, Stack, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import Carousel from "../Carousel/Carousel";
import { PixelColourContext } from "../../App";

export default function Layout({
    textColour,
    backgroundColour,
    images,
    id,
    children,
}: {
    textColour: "black" | "white";
    backgroundColour: "black" | "white";
    images: string[];
    id: string;
    children: JSX.Element[] | JSX.Element;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const state = useContext(PixelColourContext);

    return (
        <Center
            id={id}
            backgroundColor={backgroundColour}
            py={{ base: "6rem", md: "2rem" }}
            px={{ base: "1rem", md: "2rem" }}
            minHeight={"100vh"}
            onMouseEnter={() => state.setPixelColour(textColour)}
        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Stack direction={{ base: "column", md: "row" }} gap="10">
                    <VStack color={textColour} alignItems={"start"}>
                        {children}
                    </VStack>
                    {images.length === 1 ? (
                        <Center>
                            <Image src={images[0]} alt={images[0]} />
                        </Center>
                    ) : (
                        <Carousel images={images} />
                    )}
                </Stack>
            </motion.div>
        </Center>
    );
}
