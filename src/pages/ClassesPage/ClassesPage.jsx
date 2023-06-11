/* eslint-disable react-hooks/rules-of-hooks */

import usePopularClasses from '../../hooks/usePopularClasses';
import ClassesPageItem from './classesPageItem';


const ClassesPage = () => {
    const[classItem]=usePopularClasses();
    return (
        <div className=" p-4 ">
            <div className="grid  md:grid-cols-3 gap-10">
                {
                classItem.map(item =><ClassesPageItem
                key={item._id}
                item={item}
                ></ClassesPageItem> )
                }
            </div>
        </div>
    );
};

export default ClassesPage;