"use client";

import React from "react";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
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
    const top = useBreakpointValue({ base: "40%", md: "25%" });
    const side = useBreakpointValue({ base: "30%", md: "40px" });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: "Residential.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: livingroomImage,
        },
        {
            title: "Commercial.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: officeImage,
        },
        {
            title: "Planning and design.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: drawingImage,
        },
        {
            title: "Bespoke.",
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: woodwork2Image,
        },
    ];

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
                                position="relative"
                                zIndex={2}
                            >
                                <Stack
                                    spacing={6}
                                    maxW={"lg"}
                                    position="absolute"
                                    top="50%"
                                    transform="translate(0, -50%)"
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
                                </Stack>
                            </Container>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </>
    );
}
