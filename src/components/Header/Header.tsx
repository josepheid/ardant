import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Image,
    BoxProps,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
                maxHeight={show ? "500px" : "0"}
                overflow="hidden"
                transition="max-height 0.3s ease-in-out, opacity 0.3s ease-in-out"
            >
                <MobileNav />
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

const MobileNavItem = ({ label, href, children }: NavItem) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (href) {
            scroll(href);
        }
        if (children) {
            setIsOpen(!isOpen);
        }
    };
    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as="button"
                onClick={handleClick}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text fontWeight={500}>{label}</Text>
                {children && (
                    <ChevronDownIcon
                        transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
                        transition="transform 0.2s"
                    />
                )}
            </Flex>
            {children && (
                <Box
                    maxHeight={isOpen ? "500px" : "0"}
                    overflow="hidden"
                    transition="max-height 0.3s ease-in-out, opacity 0.3s ease-in-out"
                    opacity={isOpen ? 1 : 0}
                >
                    <Stack pl={4} spacing={2}>
                        {children.map((child) => (
                            <Box
                                key={child.label}
                                py={1}
                                as="button"
                                onClick={() => scroll(child.href ?? "#")}
                                textAlign="left"
                                transform={`translateY(${
                                    isOpen ? "0" : "-10px"
                                })`}
                                opacity={isOpen ? 1 : 0}
                                transition="transform 0.3s ease, opacity 0.3s ease"
                                _hover={{
                                    color: "gray.200",
                                }}
                            >
                                <Text>{child.label}</Text>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            )}
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
        label: "SERVICES",
        children: [
            {
                label: "Commercial Fit Outs",
                href: "#commercial-fitouts",
            },
            {
                label: "Office Refurbishments",
                href: "#office-refurbishments",
            },
            {
                label: "Interior Design",
                href: "#interior-design",
            },
            {
                label: "Project Management",
                href: "#project-management",
            },
        ],
    },
    {
        label: "CONTACT",
        href: "#contact",
    },
];
