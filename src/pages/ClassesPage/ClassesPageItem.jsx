/* eslint-disable react/prop-types */


const ClassesPageItem = ({item}) => {
    const {name, image, email, InstructorName,seats}=item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            {/* <p className="bg-slate-900 mt-4 mr-8 rounded-md p-2 absolute right-0 text-white" >Seats: {seats}</p> */}
            <div className="card-body flex flex-1 items-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Seats: {seats}</p>
                <p>Email: {email}</p>
                <p >Instructor Name : {InstructorName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline  border-0 border-b-4 bg-slate-200 ">Select  Card</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPageItem;