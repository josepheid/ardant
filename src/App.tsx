import AboutUs from "./components/AboutUs/AboutUs";
import Bespoke from "./components/Bespoke/Bespoke";
import Commercial from "./components/Commercial/Commercial";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import PlanningAndDesign from "./components/PlanningAndDesign/PlanningAndDesign";
import Residential from "./components/Residential/Residential";

function App() {
    return (
        <>
            <Home />
            <AboutUs />
            <Residential />
            <Commercial />
            <PlanningAndDesign />
            <Bespoke />
            <ContactUs />
        </>
    );
}

export default App;
