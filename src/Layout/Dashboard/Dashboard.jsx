import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { IoHome, IoWallet } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { FaBagShopping, FaRankingStar } from "react-icons/fa6";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="w-72 min-h-screen bg-[#D1A054] p-16">
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard/userhome"
                            className="flex gap-3 items-center"
                        >
                            <IoHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/reservation"
                            className="flex gap-3 items-center"
                        >
                            <FaCalendarAlt />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/payment"
                            className="flex gap-3 items-center"
                        >
                            <IoWallet />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/cart"
                            className="flex gap-3 items-center"
                        >
                            <FaShoppingCart />
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/reviews"
                            className="flex gap-3 items-center"
                        >
                            <FaRankingStar />
                            Add Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/mybooking"
                            className="flex gap-3 items-center"
                        >
                            <BiSolidCalendarCheck />
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink
                            to="/"
                            className="flex gap-3 items-center"
                        >
                            <IoHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/menu"
                            className="flex gap-3 items-center"
                        >
                            <GiHamburgerMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/order/dessert"
                            className="flex gap-3 items-center"
                        >
                            <FaBagShopping />
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
