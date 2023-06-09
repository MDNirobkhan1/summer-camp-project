import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/55102_1477681363.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your are LogOut Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        {
            user ? <>
                 
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/instructor'>Instructors</NavLink></li>
                <li><NavLink to='/classes'>Classes</NavLink></li>
                <li><NavLink to='/dashboard'>Deashboard</NavLink></li>
            </> : <>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/instructor'>Instructors</NavLink></li>
                <li><NavLink to='/classes'>Classes</NavLink></li>
            </>
        }


    </>
    return (
        <>
            <div className="navbar z-10 fixed  bg-opacity-50 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-emerald-400 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </a>
                    <a className="btn btn-ghost normal-case text-2xl">Photography School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-active bg-teal-600 text-white">LogOut</button>
                            <span className="ml-1">{user?.email}</span>
                        </> : <>
                            <Link to='/login'><button className="btn bg-purple-700 text-white ml-2">Login</button></Link>
                        </>
                    }


                </div>
            </div >
        </>
    );
};

export default Navbar;