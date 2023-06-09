import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaWallet, FaCalendarAlt, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'
import useClass from "../hooks/useSelectClass";
import{ GrSelect, GrUserAdmin} from 'react-icons/gr'



const Dashboard = () => {
    const [cart]=useClass();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#da8ef8]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    <li><a className="bg-blue-200">Student DashBoard</a></li>
                    <li>
                        <NavLink to="/dashboard/selectcLass"><GrSelect></GrSelect> My Selected Classes
                        <span className="badge inl bg-fuchsia-800 text-white">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/dashboard/history"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                    <br />
                    <li><a className="bg-blue-200">Instructor Dashboard</a></li>
                    <li><NavLink to="/dashboard/history"><FaBook></FaBook> Add a Class</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> My Classes</NavLink></li>
                    <br />
                    <li><a className="bg-blue-200"><GrUserAdmin></GrUserAdmin> Admin Dashboard</a></li>
                    <li><NavLink to="/dashboard/history"><FaUtensils></FaUtensils> Manage Class</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaUsers></FaUsers> Manage User</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;