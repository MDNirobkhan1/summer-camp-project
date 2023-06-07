import usePopularClasses from "../../hooks/usePopularClasses";
import InstructorItem from "./InstructorItem";


const Instructors = () => {
    const [classItem]=usePopularClasses();
    const teacher= classItem.filter(item=> item.category === 'Teacher')
    return (
        <div className="mt-10 p-4 ">
            <h1 className="text-center bg-red-200 p-3 font-bold text-3xl mb-10">  The Instructors List Gallery</h1>

            <div className="grid  md:grid-cols-3 gap-10">
                {
                    teacher.map(item=><InstructorItem
                    key={item._id}
                    item={item}
                    ></InstructorItem>)
                }
            </div>
        </div>
    );
};

export default Instructors;