
// import { useEffect, useState } from "react";
// import { useNetwork } from "../../common/useNetwork";
// import useRemindar from "../../crud/remindarCrud"
// import moment from "moment";
// import { useToast } from "../../toast/ToastProvider";
// import { MdDelete, MdErrorOutline, MdForum } from "react-icons/md";
// import Container from "../../base/Container";
// import Card from "../../base/Card";
// import { FaPeopleGroup } from "react-icons/fa6";
// import Button from "../../base/Button";
// import { IoAdd, IoReload } from "react-icons/io5";
// import Search from "../../base/Search";
// import Loading from "../../base/Loading";
// import { EPriorityGetBg, EPriorityGetName, EPriorityGetText } from "../../enum/EPriority";
// import { FcEditImage } from "react-icons/fc";
// import AddRemindar from "./AddRemindar";
// import UpdateRemindar from "./UpdateRemindar";
// import DeleteRemindar from "./DeleteRemindar";
// import Status from "../../base/Status";
// import { TiStopwatch } from "react-icons/ti";
// import { SiTimescale } from "react-icons/si";
// import { RxLapTimer } from "react-icons/rx";
// import { CiEdit } from "react-icons/ci";
// import { FaEdit } from "react-icons/fa";
// import { RiImageEditFill } from "react-icons/ri";
// const NEXT_MONTH = new Date();
// NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() - 1);

// export default function ViewRemindar() {
//     const { remindarGetAll } = useRemindar()
//     const { isInternet } = useNetwork()
//     const [isLoading, setIsLoading] = useState(false)
//     const [isAddOpen, setIsAddOpen] = useState(false)
//     const [selectedItem, setSelectedItem] = useState()
//     const [isEditOpen, setIsEditOpen] = useState(false)
//     const [isDeleteOpen, setIsDeleteOpen] = useState(false)
//     const [searchTerm, setSearchTerm] = useState("")
//     const [data, setData] = useState({
//         data: [],
//     })
//     const [search, setSearch] = useState({

//     })
//     const [dateRange, setDateRange] = useState({
//         start: moment(NEXT_MONTH).format("YYYY-MM-DD"),
//         end: moment(new Date()).format("YYYY-MM-DD")
//     })
//     const toast = useToast()
//     useEffect(() => {
//         setSearch(pre => ({ ...pre, searchTerm: searchTerm }))
//     }, [searchTerm])
//     useEffect(() => {
//         getData()
//     }, [])
//     const getData = async () => {
//         setIsLoading(true)
//         remindarGetAll({ to: dateRange.end, from: dateRange.start })
//             .then(res => {
//                 let result = res.data.result
//                 if (result.succedded) {
//                     setData({
//                         data: res.data.data,
//                     })
//                 }
//                 else {
//                     toast.open("Network Error.", "text-red-400", <MdErrorOutline />)
//                 }
//                 setIsLoading(false)
//             }).catch(err => {
//                 setIsLoading(false)
//             })
//     };

//     return (
//         <Container>
//             <Card title={
//                 <div className='flex items-center justify-between w-full'>
//                     <div className=" gap-1 flex items-center justify-between bg-white shadow-sm rounded-xl px-4 py-3 border border-gray-100">
//                         <TiStopwatch GiStopwatch className="text-blue-500 w-7 h-7" />
//                         <span>
//                             Manage Reminedr
//                         </span>
//                     </div>
//                     <span className='text-sm'>
//                         <Button onClick={() => setIsAddOpen(true)} Icon={<IoAdd className="text-xl" />} color={"green"}>Add</Button>
//                     </span>
//                 </div>}>

//                 <div className='mt-4 gap-2'>
//                     <Search value={searchTerm} setValue={setSearchTerm} handleSearch={getData} text="Reminder" />
//                     {
//                         isLoading ?
//                             <div className='py-8'>
//                                 <Loading />
//                             </div>
//                             :
//                             isInternet ?
//                                 data.data.length > 0 ?
//                                     <div className='flex items-center justify-center py-4  bg-white shadow-sm rounded-xl px-5 border border-gray-200'>
//                                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
//                                             {data.data.map((item, index) =>
//                                                 <>
//                                                     <div className="w-full bg-pink-50 border border-pink-100 rounded-3xl p-3 shadow-pink-sm flex flex-col justify-between gap-3 hover:shadow-md transition">
//                                                         <button className="rounded-full cursor-pointe">

//                                                             <h2 className="text-sm font-medium text-sky-800 flex items-center gap-3 italic">
//                                                                 <span className="flex items-center">
//                                                                     <span className="font-semibold text-sky-700 not-italic flex items-center gap-2">
//                                                                         <RxLapTimer GiStopwatch className='w-10 h-10 text-gray-600' />
//                                                                         Priority: <Status
//                                                                             text={EPriorityGetName(item.priority)}
//                                                                             bgColor={EPriorityGetBg(item.priority)}
//                                                                             textColor={EPriorityGetText(item.priority)} />
//                                                                     </span>
//                                                                 </span>
//                                                             </h2>
//                                                         </button>
//                                                         <div className="flex-1 w-full gap">

//                                                             {item.title && <p className="text-sm-200 font-medium text-green-800 leading-relaxed flex items-start gap-1">
//                                                                 <span className="font-bold text-sky-800">Title:</span> {item.title}
//                                                             </p>}
//                                                             <p className="text-sm text-blue-950 leading-relaxed flex items-start gap-1">
//                                                                 <span className="font-bold text-sky-800">Note:</span> {item.note}
//                                                             </p>
//                                                             {item.description && <p className="text-sm">
//                                                                 <span className="font-bold text-sky-800 ">Description:</span> {item.description}
//                                                             </p>}
//                                                             {/* <br/> */}
//                                                             <div className="text-sm font-extrabold text-sky-900 flex gap-2">
//                                                                 <span>On date: {moment(item.date).format('DD, MMM YYYY')}</span>
//                                                             </div>
//                                                         </div>
//                                                         {/* <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
//                                                             <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" /><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
//                                                             View more
//                                                         </button> */}
//                                                         {<div className="flex w-full items-center justify-between text-sm">
//                                                             <button onClick={() => { setSelectedItem(item); setIsEditOpen(true) }} className="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 hover:text-sky-400">
//                                                                 <RiImageEditFill    className='text-sky-500 w-4 h-4' />
//                                                                 <span>Edit</span>
//                                                             </button>

//                                                             {<button onClick={() => { setSelectedItem(item); setIsDeleteOpen(true) }} className="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 hover:text-red-400">
//                                                                 <MdDelete className='text-red-400 w-4 h-4' />
//                                                                 <span>Delete</span>
//                                                             </button>}
//                                                         </div>}
//                                                     </div>
//                                                 </>
//                                             )}
//                                         </div>
//                                     </div>
//                                     :
//                                     <div className='py-8 text-2xl text-gray-300 text-center'>
//                                         No data found
//                                     </div>
//                                 :
//                                 <div className='py-8 text-lg text-center'>
//                                     <button onClick={getData} className='p-2 cursor-pointer hover:bg-gray-200 rounded-md active:bg-gray-300'><IoReload className="text-2xl text-green-400" /></button>
//                                     <h1 className='text-2xl text-gray-300'> No Internet </h1>
//                                 </div>
//                     }
//                 </div>
//             </Card>
//             <AddRemindar  isOpen={isAddOpen} setIsOpen={setIsAddOpen} handleRefresh={getData} />
//             <UpdateRemindar isOpen={isEditOpen} setIsOpen={setIsEditOpen} handleRefresh={getData} item={selectedItem} />
//             <DeleteRemindar title={`Delete Reminder`} isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} handleRefresh={getData} item={selectedItem} />

//         </Container >
//     )
// }

// import { useEffect, useState } from "react";import { useEffect, useState } from "react";
// import { useNetwork } from "../../common/useNetwork";
// import useRemindar from "../../crud/remindarCrud";
// import moment from "moment";
// import { useToast } from "../../toast/ToastProvider";

// import {
//     MdDelete,
//     MdErrorOutline,
// } from "react-icons/md";

// import {
//     FiBell,
//     FiTrendingUp,
//     FiCheckCircle,
//     FiClock,
//     FiAlertCircle,
//     FiPlus,
// } from "react-icons/fi";

// import { IoReload } from "react-icons/io5";
// import { RiImageEditFill } from "react-icons/ri";

// import AddRemindar from "./AddRemindar";
// import UpdateRemindar from "./UpdateRemindar";
// import DeleteRemindar from "./DeleteRemindar";

// import Search from "../../base/Search";
// import Loading from "../../base/Loading";

// import {
//     EPriorityGetBg,
//     EPriorityGetName,
//     EPriorityGetText,
// } from "../../enum/EPriority";

// import Status from "../../base/Status";
// import { useEffect, useState } from "react";

// const NEXT_MONTH = new Date();
// NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() - 1);

// export default function ViewRemindar() {
//     const { remindarGetAll } = useRemindar();
//     const { isInternet } = useNetwork();

//     const [isLoading, setIsLoading] = useState(false);
//     const [isAddOpen, setIsAddOpen] = useState(false);
//     const [selectedItem, setSelectedItem] = useState();
//     const [isEditOpen, setIsEditOpen] = useState(false);
//     const [isDeleteOpen, setIsDeleteOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");

//     const [data, setData] = useState({ data: [] });

//     const [dateRange] = useState({
//         start: moment(NEXT_MONTH).format("YYYY-MM-DD"),
//         end: moment(new Date()).format("YYYY-MM-DD"),
//     });

//     const toast = useToast();

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = async () => {
//         setIsLoading(true);

//         remindarGetAll({
//             to: dateRange.end,
//             from: dateRange.start,
//         })
//             .then((res) => {
//                 let result = res.data.result;

//                 if (result.succedded) {
//                     setData({ data: res.data.data });
//                 } else {
//                     toast.open(
//                         "Network Error.",
//                         "text-red-400",
//                         <MdErrorOutline />
//                     );
//                 }

//                 setIsLoading(false);
//             })
//             .catch(() => setIsLoading(false));
//     };

//     const total = data.data.length;
//     const high = data.data.filter(x => x.priority === 1).length;
//     const low = data.data.filter(x => x.priority === 2).length;
//     const completed = data.data.filter(x => x.isCompleted).length;
//     const pending = total - completed;

//     const StatCard = ({ icon, label, value, glow }) => (
//         <div className="relative overflow-hidden rounded-2xl p-3 bg-[#0b0f1a]/90 border border-pink-500/10 shadow-[0_0_18px_rgba(236,72,153,0.10)] hover:shadow-[0_0_35px_rgba(236,72,153,0.25)] transition-all duration-300 hover:-translate-y-1">
//             <div className={`absolute -top-8 -right-8 w-24 h-24 blur-3xl opacity-30 ${glow}`}></div>

//             <div className="flex justify-between items-center">
//                 <div className="text-pink-400 text-xl">{icon}</div>
//                 <span className="text-[10px] text-gray-400">{label}</span>
//             </div>

//             <h2 className="text-2xl font-bold mt-2 text-white">{value}</h2>
//         </div>
//     );

//     return (
//         <div className="min-h-screen px-5 pt-16 pb-10 bg-gradient-to-br from-[#05060a] via-[#0b0f1a] to-[#120a18] text-white">

//             {/* HEADER */}
//             <div className="flex items-center justify-between mb-6">
//                 <div>
//                     <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text">
//                         Reminder Dashboard
//                     </h1>
//                     <p className="text-gray-500 text-sm mt-1">
//                         Soft dark + pink glow aesthetic ✨
//                     </p>
//                 </div>

//                 <button
//                     onClick={() => setIsAddOpen(true)}
//                     className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition"
//                 >
//                     <FiPlus />
//                     Add
//                 </button>
//             </div>

//             {/* SEARCH */}
//             <div className="mb-5 p-3 rounded-xl bg-[#0b0f1a]/70 border border-pink-500/10">
//                 <Search value={searchTerm} setValue={setSearchTerm} handleSearch={getData} text="Reminder" />
//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
//                 <StatCard icon={<FiTrendingUp />} label="Total" value={total} glow="bg-pink-500" />
//                 <StatCard icon={<FiAlertCircle />} label="High" value={high} glow="bg-red-500" />
//                 <StatCard icon={<FiBell />} label="Low" value={low} glow="bg-purple-500" />
//                 <StatCard icon={<FiClock />} label="Pending" value={pending} glow="bg-yellow-500" />
//                 <StatCard icon={<FiCheckCircle />} label="Done" value={completed} glow="bg-green-500" />
//             </div>

//             {/* CARDS */}
//             {isLoading ? (
//                 <Loading />
//             ) : isInternet ? (
//                 data.data.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

//                         {data.data.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative overflow-hidden rounded-2xl p-4 bg-[#0b0f1a]/85 border border-pink-500/10 shadow-[0_0_18px_rgba(236,72,153,0.10)] hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] transition-all duration-500 hover:-translate-y-2 group"
//                             >

//                                 {/* glow */}
//                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-pink-500/5 blur-2xl"></div>

//                                 <div className="relative z-10">

//                                     <div className="flex justify-between items-center">
//                                         <Status
//                                             text={EPriorityGetName(item.priority)}
//                                             bgColor={EPriorityGetBg(item.priority)}
//                                             textColor={EPriorityGetText(item.priority)}
//                                         />
//                                         <FiBell className="text-pink-400" />
//                                     </div>

//                                     <h2 className="text-lg font-semibold mt-3">
//                                         {item.title}
//                                     </h2>

//                                     <p className="text-gray-400 text-xs mt-2 line-clamp-2">
//                                         {item.note}
//                                     </p>

//                                     <div className="text-[11px] text-pink-300 mt-3">
//                                         {moment(item.date).format("DD MMM YYYY")}
//                                     </div>

//                                     <div className="flex justify-between mt-4">

//                                         <button
//                                             onClick={() => { setSelectedItem(item); setIsEditOpen(true); }}
//                                             className="px-3 py-1 text-xs rounded-lg bg-sky-500/10 text-sky-300"
//                                         >
//                                             Edit
//                                         </button>

//                                         <button
//                                             onClick={() => { setSelectedItem(item); setIsDeleteOpen(true); }}
//                                             className="px-3 py-1 text-xs rounded-lg bg-red-500/10 text-red-300"
//                                         >
//                                             Delete
//                                         </button>

//                                     </div>

//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="text-center text-gray-500 py-10">No reminders</div>
//                 )
//             ) : (
//                 <div className="text-center py-10 text-gray-500">No Internet</div>
//             )}

//             {/* MODALS */}
//             <AddRemindar isOpen={isAddOpen} setIsOpen={setIsAddOpen} handleRefresh={getData} />
//             <UpdateRemindar isOpen={isEditOpen} setIsOpen={setIsEditOpen} handleRefresh={getData} item={selectedItem} />
//             <DeleteRemindar isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} handleRefresh={getData} item={selectedItem} />

//         </div>
//     );
// }


import { useEffect, useState } from "react";
import { useNetwork } from "../../common/useNetwork";
import useRemindar from "../../crud/remindarCrud"
import moment from "moment";
import { useToast } from "../../toast/ToastProvider";
import { MdDelete, MdErrorOutline, MdForum } from "react-icons/md";
import Container from "../../base/Container";
import Card from "../../base/Card";
import { FaBook, FaBriefcase, FaClock, FaPeopleGroup, FaUser } from "react-icons/fa6";
import Button from "../../base/Button";
import { IoAdd, IoReload } from "react-icons/io5";
import Search from "../../base/Search";
import Loading from "../../base/Loading";
import { EPriorityGetBg, EPriorityGetName, EPriorityGetText } from "../../enum/EPriority";
import { FcEditImage } from "react-icons/fc";
import AddRemindar from "./AddRemindar";
import UpdateRemindar from "./UpdateRemindar";
import DeleteRemindar from "./DeleteRemindar";
import Status from "../../base/Status";
import { TiStopwatch } from "react-icons/ti";
import { SiTimescale } from "react-icons/si";
import { RxLapTimer } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle, FaEdit, FaTasks } from "react-icons/fa";
import { RiImageEditFill } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { ERemindarStatusBg, ERemindarStatusGetName, ERemindarStatusText } from "../../enum/ERemindarStatus";
import { ERemindarCategoryBg, ERemindarCategoryGetName, ERemindarCategoryText } from "../../enum/ERemindarCategory";
import { TbCategoryFilled, TbProgress } from "react-icons/tb";
import PagingGlobal from "../../base/PagingGlobal";
import { PAGE_SIZE } from "../../configuration/GlobalConfig";
import StateCard from "../../base/StateCard";
const NEXT_MONTH = new Date();
NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() - 1);

export default function ViewRemindar() {
    const { remindarGetAll } = useRemindar()
    const { isInternet } = useNetwork()
    const [isLoading, setIsLoading] = useState(false)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const { authentication } = useAuth()
    const navigate = useNavigate()
    const [data, setData] = useState({
        data: [],
        paging: undefined
    })
    const [search, setSearch] = useState({
        pageSize: PAGE_SIZE,
        pageNo: 1,
        searchTerm: ""
    })
    const upcomingReminders = [...data.data]
        .filter(x => x.status === 1)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);

    const [dateRange, setDateRange] = useState({
        start: moment(NEXT_MONTH).format("YYYY-MM-DD"),
        end: moment(new Date()).format("YYYY-MM-DD")
    })
    const toast = useToast()
    const handleAdd = () => {
        if (!authentication.isLogin) {
            navigate("/login");
            return;
        }
        setIsAddOpen(true);
    };
    // useEffect(() => {
    //     setSearch(pre => ({ ...pre, searchTerm: searchTerm }))
    // }, [searchTerm])
    // useEffect(() => {
    //     getData()
    // }, [search.pageNo])
    useEffect(() => {
        getData(search);
    }, []);
    const refreshData = () => {
        getData(search);
    };
    // const getData = async (search) => {
    //     setIsLoading(true)
    //     remindarGetAll( search)
    //         .then(res => {
    //             let result = res.data.result
    //             if (result.succedded) {
    //                 setData({
    //                     data: res.data.data,
    //                     paging: res.data.paging
    //                 })
    //             }
    //             else {
    //                 toast.open("Network Error.", "text-red-400", <MdErrorOutline />)
    //             }
    //             setIsLoading(false)
    //         }).catch(err => {
    //             setIsLoading(false)
    //         })
    // };

    const getData = async (customSearch = search) => {
        setIsLoading(true);

        remindarGetAll(customSearch)
            .then(res => {
                let result = res.data.result;

                if (result.succedded) {
                    setData({
                        data: res.data.data,
                        paging: res.data.paging
                    });
                }
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };
    const handleSearch = () => {
        const newSearch = {
            ...search,
            pageNo: 1,
            searchTerm: searchTerm
        };

        setSearch(newSearch);
        getData(newSearch);
    };
    // const handlePageChange = (e) => {
    //     setSearch(pre => ({ ...pre, pageNo: e }))
    // }

    const handlePageChange = (page) => {
        const newSearch = {
            ...search,
            pageNo: page
        };

        setSearch(newSearch);
        getData(newSearch);
    };
    const totalCount = data.data.length;

    const workCount =
        data.data.filter(x => x.category === 1).length;

    const personalCount =
        data.data.filter(x => x.category === 2).length;

    const studyCount =
        data.data.filter(x => x.category === 3).length;

    const completedCount =
        data.data.filter(x => x.status === 2).length;

    const pendingCount =
        data.data.filter(x => x.status === 1).length;
    return (
        <Container>
            <Card bgColor="bg-[#070A12]" title={
                <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                            <TiStopwatch className="text-white text-2xl" />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                Reminder Manager
                            </h2>

                            <p className="text-xs text-sky-200/80">
                                Organize your reminders & never miss anything
                            </p>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="sm:ml-auto w-full sm:w-auto">
                        <button onClick={handleAdd} className=" w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-900/40 border border-sky-500/20 text-sky-200 hover:bg-sky-800/50 transition-all " >
                            <IoAdd />
                            Add Reminder
                        </button>
                    </div>

                </div>
            }>

                <div className="mt-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-5">

                        <StateCard title="Total" value={totalCount} color="blue" icon={<FaTasks />} />

                        <StateCard title="Work" value={workCount} color="green" icon={<FaBriefcase />} />

                        <StateCard title="Personal" value={personalCount} color="pink" icon={<FaUser />} />

                        <StateCard title="Study" value={studyCount} color="yellow" icon={<FaBook />} />

                        <StateCard title="Completed" value={completedCount} color="purple" icon={<FaCheckCircle />} />
                        
                        <StateCard title="Pending" value={pendingCount} color="orange" icon={<FaClock />} />

                    </div>
                    <div
    className="
    w-full
    mt-4
    bg-slate-900/40
    backdrop-blur-xl
    border border-slate-700/50
    rounded-2xl
    p-3
    shadow-inner
    "
>
    <Search
        value={searchTerm}
        setValue={setSearchTerm}
        handleSearch={handleSearch}
        text="Search Reminder..."
    />
</div>
                </div>

                <div className="mt-6">
                    {isLoading ? (
                        <div className="py-12">
                            <Loading />
                        </div>
                    )
                        : isInternet ? (
                            data.data.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                                    {data.data.map((item, index) => (
                                        <div key={index} className=" relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-5 shadow-xl hover:shadow-sky-500/30 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 " >
                                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 blur-[80px] rounded-full"></div>

                                            <div className="relative z-10">

                                                {/* <div className="flex items-center justify-between mb-4"> */}

                                                {/* <div className="flex items-center gap-2 bg-slate-700/50 border border-slate-600 px-3 py-1.5 rounded-xl">
                                                        <RxLapTimer className="text-sky-400" />
                                                        <span className="text-xs text-slate-300 uppercase tracking-widest">
                                                            Priority
                                                        </span>
                                                    </div> */}
                                                <div className="flex items-center justify-between mt-2 mb-2">
                                                    <Status
                                                        text={EPriorityGetName(item.priority)}
                                                        bgColor={EPriorityGetBg(item.priority)}
                                                        textColor={EPriorityGetText(item.priority)}
                                                    />

                                                    <Status
                                                        text={ERemindarCategoryGetName(item.category)}
                                                        bgColor={ERemindarCategoryBg(item.category)}
                                                        textColor={ERemindarCategoryText(item.category)}
                                                    />
                                                </div>

                                                {/* </div> */}

                                                {item.title && (
                                                    <h3 className="text-white text-lg font-semibold break-words">
                                                        {item.title}
                                                    </h3>
                                                )}

                                                <p className="text-slate-200 text-sm mt-3">
                                                    <span className="text-sky-400 font-semibold">
                                                        Note:
                                                    </span>{" "}
                                                    {item.note}
                                                </p>

                                                {item.description && (
                                                    <p className="text-slate-400 text-sm mt-3">
                                                        {item.description}
                                                    </p>
                                                )}

                                                <div className="mt-4 space-y-2">

                                                    <div className="flex items-center gap-2 text-sky-300 text-xs">
                                                        <SiTimescale />
                                                        {moment(item.date).format("DD MMM YYYY")}
                                                    </div>

                                                </div>

                                                <div className="flex items-center justify-between mt-2">

                                                    <Status
                                                        text={ERemindarStatusGetName(item.status)}
                                                        bgColor={ERemindarStatusBg(item.status)}
                                                        textColor={ERemindarStatusText(item.status)}
                                                    />

                                                    <div className="flex items-center gap-2">

                                                        <button onClick={() => { setSelectedItem(item); setIsEditOpen(true); }}
                                                            className=" w-9 h-9 rounded-full flex items-center justify-center bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 hover:scale-110 transition-all duration-200 " >
                                                            <RiImageEditFill className="text-lg" />
                                                        </button>

                                                        <button onClick={() => { setSelectedItem(item); setIsDeleteOpen(true); }}
                                                            className=" w-9 h-9 rounded-full flex items-center justify-center bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:scale-110 transition-all duration-200 " >
                                                            <MdDelete className="text-lg" />
                                                        </button>

                                                    </div>

                                                </div>
                                                {/* <div className="flex items-center justify-end gap-3 mt-5 pt-4 border-t border-slate-700"> */}
                                                {/* <button
                                                        onClick={() => { setSelectedItem(item); setIsEditOpen(true); }}
                                                        className=" w-10 h-10 flex items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 hover:bg-sky-500/25 border border-sky-500/20 transition-all " >
                                                        <RiImageEditFill className="text-lg" />
                                                    </button>

                                                    <button
                                                        onClick={() => { setSelectedItem(item); setIsDeleteOpen(true);}}
                                                        className=" w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/15 text-red-300 hover:bg-red-500/25 border border-red-500/20 transition-all ">
                                                        <MdDelete className="text-lg" />
                                                    </button> */}

                                                {/* </div> */}

                                            </div>
                                        </div>
                                    ))}

                                </div>

                            ) :
                                (
                                    <div className="text-center text-gray-500 py-12">
                                        No Reminder Found
                                    </div>
                                )
                        ) :
                            (
                                <div className="text-center text-gray-500 py-12">
                                    No Internet
                                </div>
                            )}

                </div>
                <div className="mt-6 md:mt-8 flex justify-center overflow-x-auto">
                    <PagingGlobal OnPageChange={handlePageChange} pagingData={data.paging} text="ApplicationUser" loading={isLoading} />
                </div>
            </Card>

            <AddRemindar isOpen={isAddOpen} setIsOpen={setIsAddOpen} handleRefresh={refreshData} />
            <UpdateRemindar isOpen={isEditOpen} setIsOpen={setIsEditOpen} handleRefresh={getData} item={selectedItem} />
            <DeleteRemindar title="Delete Reminder" isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} handleRefresh={getData} item={selectedItem} />

        </Container>
    )
}