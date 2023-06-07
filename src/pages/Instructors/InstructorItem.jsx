/* eslint-disable react/prop-types */


const InstructorItem = ({item}) => {
    const {name, image}=item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img className="p-4 rounded-xl" src={image} alt="Shoes" />
           
            <div className="card-body flex flex-1 items-center">
                <h2 className="card-title">{name}</h2>
        
            </div>
        </div>
    );
};

export default InstructorItem;