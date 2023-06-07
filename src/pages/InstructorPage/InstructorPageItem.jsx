/* eslint-disable react/prop-types */


const InstructorPageItem = ({item}) => {
   const {InstructorName,image, email}=item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" />
            
            <div className="card-body flex flex-1 items-center">
                <h2 className="card-title">Name: {InstructorName}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default InstructorPageItem;