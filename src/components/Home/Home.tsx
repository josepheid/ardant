"use client";

import React, { useState } from "react";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Header from "../Header/Header";
import officeImage from "../../assets/office.jpg";
import drawingImage from "../../assets/drawing.jpg";
import livingroomImage from "../../assets/livingroom.jpg";
import woodwork2Image from "../../assets/woodwork2.jpg";
import { TransparentOverlay } from "../TransparentOverlay/TransparentOverlay";
import { scroll } from "../../lib/helpers";
// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Home() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "10%", md: "8.5%" });
    const side = useBreakpointValue({ base: "30%", md: "40px" });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: "Residential.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: livingroomImage,
            id: "#residential",
        },
        {
            title: "Commercial.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: officeImage,
            id: "#commercial",
        },
        {
            title: "Planning and design.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: drawingImage,
            id: "#planning-and-design",
        },
        {
            title: "Bespoke.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: woodwork2Image,
            id: "#bespoke",
        },
    ];

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Header zIndex={99} position={"absolute"} />
            <Box height={"100vh"} width={"full"} overflow={"hidden"} id="home">
                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    variant="ghost"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}
                    _hover={{ background: "transparent" }}
                >
                    <BiLeftArrowAlt size="40px" color="white" />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}
                    _hover={{ background: "transparent" }}
                >
                    <BiRightArrowAlt size="40px" color="white" />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((card, index) => (
                        <Box
                            key={index}
                            height={"6xl"}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={card.image}
                            backgroundColor={"black"}
                        >
                            <TransparentOverlay />
                            <Container
                                size="container.lg"
                                height="100vh"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                position="relative"
                                zIndex={2}
                            >
                                <Stack
                                    spacing={6}
                                    maxW={"lg"}
                                    width="100%"
                                    position="relative"
                                    zIndex={3}
                                >
                                    <Heading
                                        fontSize={{
                                            base: "3xl",
                                            md: "4xl",
                                            lg: "5xl",
                                        }}
                                        color={"white"}
                                    >
                                        {card.title}
                                    </Heading>
                                    <Text
                                        fontSize={{ base: "md", lg: "lg" }}
                                        color="white"
                                    >
                                        {card.text}
                                    </Text>
                                    <Button
                                        backgroundColor="transparent"
                                        onClick={() => scroll(card.id)}
                                        borderRadius="1px"
                                        borderColor="white"
                                        borderStyle="solid"
                                        borderWidth="1px"
                                        color="white"
                                        width={{ base: "100%", md: "40%" }}
                                        position="relative"
                                        overflow="hidden"
                                        _hover={{
                                            backgroundColor: "transparent",
                                        }}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <Box
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            right="0"
                                            bottom="0"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            transform={`perspective(400px) rotateX(${
                                                isHovered ? "90deg" : "0deg"
                                            })`}
                                            transformOrigin="center bottom"
                                            transition="transform 0.4s ease"
                                            opacity={isHovered ? 0 : 1}
                                        >
                                            FIND OUT MORE
                                        </Box>
                                        <Box
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            right="0"
                                            bottom="0"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            transform={`perspective(400px) rotateX(${
                                                isHovered ? "0deg" : "-90deg"
                                            })`}
                                            transformOrigin="center top"
                                            transition="transform 0.4s ease"
                                            opacity={isHovered ? 1 : 0}
                                        >
                                            TAKE ME THERE
                                        </Box>
                                    </Button>
                                </Stack>
                            </Container>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </>
    );
}
