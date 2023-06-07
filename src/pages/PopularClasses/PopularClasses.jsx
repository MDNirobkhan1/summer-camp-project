import SectionTitle from "../../component/SectionTitle";
import usePopularClasses from "../../hooks/usePopularClasses";
import PopulerItem from "../PopularCart/PopulerItem";
// import PopularCart from "../PopularCart/PopularCart";


const PopularClasses = () => {
    const[menu] =usePopularClasses();
    const student= menu.filter(item=> item.category === 'student')

    return (
        <div>
            <SectionTitle
                subHeading={"From Classes"}
                heading={"Popular Classes"}>

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
               {
                student.map(item=> <PopulerItem
                key={item._id}
                item={item}
                ></PopulerItem>)
               }
            </div>

        </div>
    );
};

export default PopularClasses;