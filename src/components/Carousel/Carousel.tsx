import { useEffect, useState } from "react";
import { Button, Image, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState<number | null>(null);

    useEffect(() => {
        const startTimer = () => {
            return setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 15000);
        };

        const intervalId = startTimer();
        setTimer(intervalId);

        return () => clearInterval(intervalId);
    }, [images.length]);

    useEffect(() => {
        if (timer) {
            clearInterval(timer);
            const newTimer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 15000);
            setTimer(newTimer);
        }
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <Box
            width={"100%"}
            minWidth={{ base: "auto", md: "40vw" }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Button
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex="2"
                onClick={prevSlide}
                bg="transparent"
                color="white"
                border="none"
                fontSize="2rem"
                _hover={{ bg: "transparent" }}
            >
                &#10094;
            </Button>

            <Box
                width="100%"
                height="500px"
                position="relative"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={images[currentIndex]}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="carousel image"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                        />
                    </motion.div>
                </AnimatePresence>
            </Box>

            <Button
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex="2"
                onClick={nextSlide}
                bg="transparent"
                color="white"
                border="none"
                fontSize="2rem"
                _hover={{ bg: "transparent" }}
            >
                &#10095;
            </Button>
        </Box>
    );
};

export default Carousel;
