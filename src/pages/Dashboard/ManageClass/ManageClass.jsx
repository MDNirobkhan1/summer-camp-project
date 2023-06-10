import usePopularClasses from "../../../hooks/usePopularClasses";
import ManageClassCart from "./ManageClassCart";



const ManageClass = () => {
    const[classItem]=usePopularClasses();
    return (
        <div className=" ">
            <div className="grid md:grid-cols-4 gap-10">
                {
                classItem.map(item =><ManageClassCart
                key={item._id}
                item={item}
                ></ManageClassCart> )
                }
            </div>
        </div>
    );
};

export default ManageClass;