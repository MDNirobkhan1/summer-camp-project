/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ManageClassCart = ({item}) => {
    const { name, image,  InstructorName,price, seats,_id } = item;
    return (
        <div className="card w-40 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            {/* <p className="bg-slate-900 mt-4 mr-8 rounded-md p-2 absolute right-0 text-white" >Seats: {seats}</p> */}
            <div className="card-body flex flex-1 items-center">
                <p>Seats: {seats}</p>
                <p >Price : {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline  border-0 border-b-4 bg-slate-200 ">Add Page</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassCart;