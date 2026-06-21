import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle, FaHeartbeat, FaShoppingCart, FaTachometerAlt, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { RiAlarmWarningLine } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { FcHighPriority, FcLowPriority } from "react-icons/fc";
import { HiUsers } from "react-icons/hi";
import { MdCancel, MdPendingActions, MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { SiStatuspage } from "react-icons/si";



const links = [{ label: "Dashboard", icon: <FaTachometerAlt className="text-blue-500" />, to: "/Remindar" },
{
    label: "Gentle Reminder", icon: <RiAlarmWarningLine className="text-orange-400" />, to: "/remindars",
    subLinks: [
        { label: "Reminder", icon: <GoGoal className="text-blue-600" />, to: "/remindars" },
        { label: "NormalPriority", icon: < FcHighPriority />, to: "/normalPriority" },
        { label: "HighPriority", icon: <FcLowPriority />, to: "/highPriority" },
    ]
},
{
    label: "Categories", icon: <GoGoal className="text-green-500" />,
    subLinks: [
        { label: "Work", icon: <MdWork className="text-blue-400" />, to: "/category/Work" },
        { label: "Personal", icon: <FaUser className="text-pink-400" />, to: "/category/Personal" },
        { label: "Study", icon: <PiStudentFill className="text-yellow-400" />, to: "/category/Study" },
        { label: "Health", icon: <FaHeartbeat className="text-red-400" />, to: "/category/Health" },
        { label: "Shopping", icon: <FaShoppingCart className="text-purple-400" />, to: "/category/Shopping" },
        { label: "Meeting", icon: <FaUsers className="text-cyan-400" />, to: "/category/Meeting" }
    ]
},
{
    label: "Status", icon: <SiStatuspage className="text-blue-500" />,
    subLinks: [
        { label: "Pending", icon: <MdPendingActions className="text-yellow-400" />, to: "/status/Pending" },
        { label: "Completed", icon: <FaCheckCircle className="text-green-400" />, to: "/status/Completed" },
        { label: "Cancelled", icon: <MdCancel className="text-red-400" />, to: "/status/Cancelled" },

    ]
},
{
    label: "Users", icon: <HiUsers className="text-red-500" />, to: "/user",
},
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState("");

    function toggleSidebar() { setIsOpen(!isOpen); }

    function closeSidebar() { setIsOpen(false); setOpenDropdown(""); }

    function toggleDropdown(label) { setOpenDropdown((prev) => (prev === label ? "" : label)); }

    // return (
    //     <>
    //         <TopBar toggleSidebar={toggleSidebar} hellow />

    //         {isOpen && (
    //             <div
    //                 className="fixed inset-0 bg-gray-900/50 z-20"
    //                 onClick={closeSidebar}
    //             ></div>
    //         )}

    //         <div
    //             className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-30 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
    //                 }`}
    //         >
    //             <nav className="mt-14 p-3 pt-5 h-full overflow-y-auto bg-white">
    //                 <ul className="space-y-3">
    //                     {links.map((item, idx) => (
    //                         <li key={idx}>
    //                             {item.subLinks ? (
    //                                 <div>
    //                                     <div
    //                                         onClick={() => toggleDropdown(item.label)}
    //                                         className="flex items-center justify-between gap-3 text-md text-gray-900 hover:text-white hover:bg-sky-400 cursor-pointer p-2 rounded"
    //                                     >
    //                                         <div className="flex items-center gap-3">
    //                                             <div className="text-xl">{item.icon}</div>
    //                                             <span>{item.label}</span>
    //                                         </div>
    //                                         <span className="text-sm">
    //                                             {openDropdown === item.label ? "▲" : "▼"}
    //                                         </span>
    //                                     </div>
    //                                     {openDropdown === item.label && (
    //                                         <ul className="ml-6 mt-1 space-y-1">
    //                                             {item.subLinks.map((sub, subIdx) => (
    //                                                 <li key={subIdx}>
    //                                                     <Link
    //                                                         onClick={() => closeSidebar()}
    //                                                         to={sub.to}
    //                                                         className="flex items-center gap-2 text-sm text-gray-800 hover:text-white hover:bg-sky-300 cursor-pointer p-2 rounded"
    //                                                     >
    //                                                         {sub.icon && <div>{sub.icon}</div>}
    //                                                         <div>{sub.label}</div>
    //                                                     </Link>
    //                                                 </li>
    //                                             ))}
    //                                         </ul>
    //                                     )}
    //                                 </div>
    //                             ) : (
    //                                 <Link
    //                                     onClick={() => closeSidebar()}
    //                                     to={item.to}
    //                                     className="flex items-center gap-3 text-md text-gray-900 hover:text-white hover:bg-sky-400 cursor-pointer p-2 rounded"
    //                                 >
    //                                     <div className="text-xl">{item.icon}</div>
    //                                     <span>{item.label}</span>
    //                                 </Link>
    //                             )}
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </nav>
    //         </div>
    //     </>

    // );
    return (
        <>
            <TopBar toggleSidebar={toggleSidebar} hellow />

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[300px] z-30 transform transition-all duration-300
    bg-gradient-to-b from-slate-950 via-slate-900 to-black
    backdrop-blur-xl
    border-r border-cyan-500/20
    shadow-[0_0_40px_rgba(0,200,255,0.15)]
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* Header */}
                <div className="h-20 px-6 flex items-center border-b border-cyan-500/20">

                    <div className="flex items-center gap-3">

                        <div className="
            w-12 h-12
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            flex items-center justify-center
            shadow-lg
            shadow-cyan-500/30
        ">
                            <RiAlarmWarningLine className="text-white text-2xl" />
                        </div>

                        <div>
                            <h1 className="text-white font-bold text-2xl">
                                Coders Academy
                            </h1>

                            <p className="text-cyan-300 text-xs">
                                Reminder Management System
                            </p>
                        </div>

                    </div>

                </div>
                <div className="px-4 py-4">

                    <div className="
flex items-center
bg-white/5
border border-cyan-500/20
rounded-xl
px-3 py-2
transition-all
duration-300

focus-within:border-cyan-400
focus-within:shadow-lg
focus-within:shadow-cyan-500/20
">

                        <CiSearch className="text-cyan-400 text-xl" />

                        <input
                            type="text"
                            placeholder="Search Menu..."
                            className="
                bg-transparent
                outline-none
                text-white
                placeholder:text-white/40
                ml-2
                w-full
                text-sm
            "
                        />

                    </div>

                </div>

                {/* Nav */}
                <nav className="p-4 h-[calc(100vh-140px)] overflow-y-auto">

                    <ul className="space-y-2">

                        {links.map((item, idx) => (
                            <li key={idx}>

                                {item.subLinks ? (
                                    <div>

                                        {/* Parent */}
                                        <div
                                            onClick={() => toggleDropdown(item.label)}
                                            className="
flex items-center justify-between
gap-3
p-3
rounded-xl
cursor-pointer

text-white/80
hover:text-white

border border-transparent
hover:border-cyan-500/30

hover:bg-gradient-to-r
hover:from-cyan-500/10
hover:to-blue-500/10

transition-all
duration-300"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="text-xl">{item.icon}</div>
                                                <span className="font-medium">{item.label}</span>
                                            </div>

                                            <span className="text-xs text-white/60">
                                                {openDropdown === item.label ? "▲" : "▼"}
                                            </span>
                                        </div>

                                        {/* Sub Links */}
                                        {openDropdown === item.label && (
                                           <ul className="ml-6 mt-2 space-y-1 animate-pulse">

                                                {item.subLinks.map((sub, subIdx) => (
                                                    <li key={subIdx}>
                                                        <Link
                                                            onClick={() => closeSidebar()}
                                                            to={sub.to}
                                                            className="
flex items-center
gap-3
p-2.5
rounded-xl

text-white/70

hover:text-cyan-300

hover:bg-cyan-500/10

hover:translate-x-2

transition-all
duration-300
"
                                                        >
                                                            <div className="text-lg">{sub.icon}</div>
                                                            <span className="text-sm">{sub.label}</span>
                                                        </Link>
                                                    </li>
                                                ))}

                                            </ul>
                                        )}

                                    </div>
                                ) : (
                                    <Link
                                        onClick={() => closeSidebar()}
                                        to={item.to}
                                        className="
flex items-center
gap-3
p-3
rounded-xl

text-white/80

border border-transparent

hover:text-white
hover:border-cyan-500/30

hover:bg-gradient-to-r
hover:from-cyan-500/10
hover:to-blue-500/10

transition-all
duration-300
"
                                    >
                                        <div className="text-xl">{item.icon}</div>
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                )}

                            </li>
                        ))}

                    </ul>
                    <div className="px-4 pb-5 mt-4">

                        <div
                            className="
        rounded-2xl
        border border-cyan-500/20
        bg-gradient-to-r
        from-cyan-500/10
        to-blue-500/10
        p-4
        "
                        >

                            <h3 className="text-cyan-300 font-semibold">
                                Reminder Pro
                            </h3>

                            <p className="text-white/50 text-xs mt-2">
                                Organize Tasks, Meetings & Goals
                            </p>

                            <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                            </div>

                        </div>

                    </div>
                </nav>
            </div>
        </>
    );
}