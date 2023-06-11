/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClass from "../../hooks/useSelectClass";


const ClassesPageItem = ({ item }) => {
    const { name, image, email, InstructorName,price, seats,_id } = item;

    const [, refetch]=useClass();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location= useLocation();

    const handleAddToClass = item => {
        console.log(item);
        if (user && user.email) {
            const selectItem={selectId: _id, name, image, price, seats, email: user.email}
            fetch('https://summer-camp-server-tawny.vercel.app/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The Class Add to Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Pleace Login to Selected Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login new'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state: {from:location}})
                }
            })
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            {/* <p className="bg-slate-900 mt-4 mr-8 rounded-md p-2 absolute right-0 text-white" >Seats: {seats}</p> */}
            <div className="card-body flex flex-1 items-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Seats: {seats}</p>
                <p>Email: {email}</p>
                <p >Instructor Name : {InstructorName}</p>
                <p >Price : {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToClass(item)} className="btn btn-outline  border-0 border-b-4 bg-slate-200 ">Select  Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPageItem;