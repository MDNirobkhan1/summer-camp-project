import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import SectionPart from "./SectonPart/SectionPart";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
            <SectionPart></SectionPart>
        </div>
    );
};

export default Home;