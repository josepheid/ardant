import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Image,
    BoxProps,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import logo from "../../assets/ardent.png";

export default function Header(props: BoxProps) {
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    return (
        <Box
            ref={ref}
            backgroundColor={{ base: "#000000b0", md: "transparent" }}
            {...props}
            position={"fixed"}
            width={"100%"}
        >
            <Flex>
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    justifyContent={"space-between"}
                >
                    <Image
                        src={logo}
                        height={"6rem"}
                        padding={"1rem"}
                        backgroundColor={{
                            md: "#000000b0",
                            base: "transparent",
                        }}
                    />
                    <IconButton
                        onClick={() => setShow(!show)}
                        padding={"1rem"}
                        height={"6rem"}
                        icon={
                            show ? (
                                <CloseIcon
                                    w={10}
                                    h={10}
                                    transition={"all .2s ease-in-out"}
                                    _hover={{
                                        color: "white",
                                        transform: "scale(1.1)",
                                    }}
                                />
                            ) : (
                                <HamburgerIcon
                                    w={10}
                                    h={10}
                                    transition={"all .2s ease-in-out"}
                                    _hover={{
                                        color: "white",
                                        transform: "scale(1.1)",
                                    }}
                                />
                            )
                        }
                        backgroundColor={{
                            base: "transparent",
                            md: "#000000b0",
                        }}
                        variant={"ghost"}
                        border={"none"}
                        borderRadius={0}
                        _hover={{
                            xs: {
                                backgroundColor: "transparent",
                            },
                            sm: {
                                backgroundColor: "#000000b0",
                            },
                        }}
                        _active={{
                            xs: {
                                backgroundColor: "transparent",
                            },
                            sm: {
                                backgroundColor: "#000000b0",
                            },
                        }}
                        color={"white"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
            </Flex>

            <Box
                right={"0%"}
                position={"absolute"}
                zIndex={99}
                width={{ base: "100%", md: "20%" }}
                bg={"#000000b0"}
                color={"white"}
            >
                <Collapse in={show}>
                    <MobileNav />
                </Collapse>
            </Box>
        </Box>
    );
}

function scroll(id: string) {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const MobileNav = () => {
    return (
        <Stack p={4}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href }: NavItem) => {
    return (
        <Stack spacing={4}>
            <Box
                py={2}
                as="button"
                onClick={() => scroll(href ?? "#")}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text fontWeight={500}>{label}</Text>
            </Box>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "HOME",
        href: "#home",
    },
    {
        label: "ABOUT US",
        href: "#aboutus",
    },
    {
        label: "GALLERY",
        href: "#gallery",
    },
    {
        label: "CONTACT",
        href: "#contact",
    },
];
