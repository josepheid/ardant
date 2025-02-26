import { createContext, FC, ReactNode, useState } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Bespoke from "./components/Bespoke/Bespoke";
import Commercial from "./components/Commercial/Commercial";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import PixelTrail from "./components/PixelTrail/PixelTrail";
import PlanningAndDesign from "./components/PlanningAndDesign/PlanningAndDesign";
import Residential from "./components/Residential/Residential";
import Accreditations from "./components/Accreditations/Accreditations";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

interface PixelColourContextType {
    pixelColour: string;
    setPixelColour: (pixelColour: string) => void;
}

export const PixelColourContext = createContext<PixelColourContextType>({
    pixelColour: "black",
    setPixelColour: () => {},
});

interface PixelColourContextProviderProps {
    children: ReactNode;
}

export const PixelColourContextProvider: FC<
    PixelColourContextProviderProps
> = ({ children }) => {
    const setPixelColour = (pixelColour: string) => {
        setState({ ...state, pixelColour: pixelColour });
    };

    const initState = {
        pixelColour: "black",
        setPixelColour: setPixelColour,
    };

    const [state, setState] = useState(initState);

    return (
        <PixelColourContext.Provider value={state}>
            {children}
        </PixelColourContext.Provider>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PixelColourContextProvider>
                            <PixelTrail />
                            <Home />
                            <AboutUs />
                            <Residential />
                            <Commercial />
                            <PlanningAndDesign />
                            <Bespoke />
                            <Accreditations />
                            <ContactUs />
                        </PixelColourContextProvider>
                    }
                />

                {/* Redirect all other routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
