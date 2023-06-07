/* eslint-disable no-undef */
import usePopularClasses from "../../hooks/usePopularClasses";
import InstructorPageItem from "./InstructorPageItem";


const InstructorPage = () => {
    const [classItem] = usePopularClasses();
    const teacherItem = classItem.filter(cart => cart.category === 'Teacher')
    return (
        <div className=" p-4 ">
            <div className="grid  md:grid-cols-3 gap-10">
                {
                   teacherItem.map(item => <InstructorPageItem 
                   key={item._id}
                   item={item}
                   ></InstructorPageItem>)
                }
            </div>
        </div>
    );
};

export default InstructorPage;