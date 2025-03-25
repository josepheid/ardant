import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import * as EmailValidator from "email-validator";
import phone from "phone";

export const ContactUsForm = () => {
    const [emailInput, setEmailInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [msgInput, setMsgInput] = useState("");
    const [contactLoading, setContactLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const emailError =
        emailInput !== "" && !EmailValidator.validate(emailInput);
    const nameError = nameInput === "";
    const msgError = msgInput === "";
    const phoneError =
        phoneInput !== "" &&
        phone(phoneInput, { country: "GB" }).isValid === false;
    const disableButton = emailError || nameError || msgError;

    const apiKey = import.meta.env.VITE_API_KEY;

    const trySend = async () => {
        if (!disableButton) {
            setContactLoading(true);
            try {
                await fetch(`${import.meta.env.VITE_API_URL}/contact-us`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailInput,
                        phone: phoneInput,
                        name: nameInput,
                        msg: msgInput,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": apiKey as string,
                    },
                });
            } catch (error) {
                console.log("failed to send email", error);
            } finally {
                setContactLoading(false);
                setMessageSent(true);
            }
        }
    };
    return (
        <Box bg="brand.light" borderRadius="lg" width="300px">
            <Box p={5}>
                <VStack spacing={5}>
                    {messageSent ? (
                        <Text color={"brand.navy"}>
                            Thanks for getting in contact, we'll get back to you
                            as soon as possible!
                        </Text>
                    ) : (
                        <>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    borderColor="brand.navy"
                                    type="text"
                                    value={nameInput}
                                    onChange={(e) =>
                                        setNameInput(e.target.value)
                                    }
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    borderColor="brand.navy"
                                    type="email"
                                    value={emailInput}
                                    onChange={(e) =>
                                        setEmailInput(e.target.value)
                                    }
                                />
                                {emailError && (
                                    <Text color="red">
                                        Please enter a valid email address
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input
                                    borderColor="brand.navy"
                                    type="phone"
                                    value={phoneInput}
                                    onChange={(e) =>
                                        setPhoneInput(e.target.value)
                                    }
                                />
                                {phoneError && (
                                    <Text color="red">
                                        Please enter a valid UK phone number
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    borderColor="brand.navy"
                                    _hover={{
                                        borderRadius: "brand.navy",
                                    }}
                                    placeholder="message"
                                    value={msgInput}
                                    onChange={(e) =>
                                        setMsgInput(e.target.value)
                                    }
                                />
                            </FormControl>
                            <Center>
                                <FormControl>
                                    <Button
                                        isDisabled={disableButton}
                                        variant="solid"
                                        bg="brand.navy"
                                        color="brand.gold"
                                        _hover={{
                                            color: "brand.light",
                                        }}
                                        isLoading={contactLoading}
                                        onClick={() => trySend()}
                                    >
                                        Send Message
                                    </Button>
                                </FormControl>
                            </Center>
                        </>
                    )}
                </VStack>
            </Box>
        </Box>
    );
};
