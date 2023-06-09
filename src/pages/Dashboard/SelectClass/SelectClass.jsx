/* eslint-disable no-undef */
import { FaTrashAlt } from "react-icons/fa";
import useClass from "../../../hooks/useSelectClass";
import Swal from "sweetalert2";

const SelectClass = () => {
    const [cart, refetch] = useClass();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className="mb-10 text-center font-semibold text-2xl ">My Select Class : {cart?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-cyan-600 text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-20 rounded-xl" src={user.image} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.price}</td>
                                <td>{user.seats}</td>
                                <td><button className="btn btn-xl bg-green-300">Pay</button></td>
                                <td><button onClick={() => { handleDelete(user) }} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt> </button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectClass;