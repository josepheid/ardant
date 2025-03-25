import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
    brand: {
        teal: "#9bebcc",
        turquoise: "#009da7",
    },
};

const theme = extendTheme({
    colors,
    fonts: {
        body: "Renner, sans-serif",
        heading: "Renner, sans-serif",
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </StrictMode>
);
