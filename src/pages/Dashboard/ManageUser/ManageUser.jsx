/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaUserGraduate, FaUserShield } from 'react-icons/fa'
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: user = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleAdmin = user => {
        fetch(`https://summer-camp-server-tawny.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin new!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleInstructor = user => {
        fetch(`https://summer-camp-server-tawny.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor new!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <h2 className="text-center font-semibold text-2xl mb-4">Manage User: {user.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-lime-500 text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-10 rounded-xl" src={user.photoURL} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleAdmin(user)} className="btn btn-active bg-green-600"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.inst === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleInstructor(user)} className="btn btn-active btn-success"><FaUserGraduate></FaUserGraduate></button>

                                }</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;