import AboutUs from "./components/AboutUs/AboutUs";
import Bespoke from "./components/Bespoke/Bespoke";
import Commercial from "./components/Commercial/Commercial";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import PlanningAndDesign from "./components/PlanningAndDesign/PlanningAndDesign";
import Residential from "./components/Residential/Residential";
import Accreditations from "./components/Accreditations/Accreditations";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <AboutUs />
                            <Residential />
                            <Commercial />
                            <PlanningAndDesign />
                            <Bespoke />
                            <Accreditations />
                            <ContactUs />
                        </>
                    }
                />

                {/* Redirect all other routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
