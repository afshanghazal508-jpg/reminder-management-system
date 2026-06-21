import { useEffect, useState } from "react"
import { useNetwork } from "../../common/useNetwork"
import useApplicationUser from "../../crud/applicationUserCrud"
import AddAddministrator from "./AddAdministrator"
import { useToast } from "../../toast/ToastProvider"
import { MdDateRange, MdDelete, MdErrorOutline, MdPhone } from "react-icons/md"
import Container from "../../base/Container"
import Card from "../../base/Card"
import { PiUsersThin } from "react-icons/pi"
import Button from "../../base/Button"
import { IoAdd, IoCheckmarkDoneCircle, IoReload } from "react-icons/io5"
import Search from "../../base/Search"
import PagingGlobal from "../../base/PagingGlobal"
import { PAGE_SIZE } from "../../configuration/GlobalConfig"
import TableHead from "../../base/tmstable/TableHead"
import TableTr from "../../base/tmstable/TableTr"
import TableTh from "../../base/tmstable/TableTh"
import TableBody from "../../base/tmstable/TableBody"
import TableTd from "../../base/tmstable/TableTd"
import Status from "../../base/Status"
import Table from "../../base/tmstable/Table"
import Loading from "../../base/Loading"
import { ERoleBg, ERoleGetName, ERoleText } from "../../enum/ERole"
import { EStatusBg, EStatusGetName, EStatusText } from "../../enum/EStatus"
import moment from "moment"
import { FaUser } from "react-icons/fa6"
import { RiShieldUserFill } from "react-icons/ri"
import DeleteUser from "./DeleteUser"

export default function ApplicationUserView() {
    const { applicationUserGetAll } = useApplicationUser()
    const { isInternet } = useNetwork()
    const [isLoading, setIsLoading] = useState(false)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [isAddAdminOpen, setIsAddAdminOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData] = useState({
        data: [],
        paging: undefined
    })
    const [search, setSearch] = useState({
        pageSize: PAGE_SIZE,
        pageNo: 1,
        searchTerm: ""
    })
    const toast = useToast()
    useEffect(() => {
        setSearch(pre => ({ ...pre, searchTerm: searchTerm }))
    }, [searchTerm])

    useEffect(() => {
        getData()
    }, [search.pageNo])
    const getData = async () => {
        setIsLoading(true)
        applicationUserGetAll({ ...search })
            .then(res => {
                let result = res.data.result
                if (result.succedded) {
                    setData({
                        data: res.data.data,
                        paging: res.data.paging
                    })
                }
                else {
                    toast.open("Network Error.", "text-red-400", <MdErrorOutline />)
                }
                setIsLoading(false)
            }).catch(err => {
                setIsLoading(false)
            })
    };

    const handlePageChange = (e) => {
        setSearch(pre => ({ ...pre, pageNo: e }))
    }
    // return (
    //     <Container>
    //         <Card title={
    //             <div className='flex items-center justify-between w-full'>
    //                 <div className='flex items-center justify-center gap-1'>
    //                     <PiUsersThin className="text-red-700" />
    //                     <span>
    //                         Users
    //                     </span>
    //                 </div>
    //                 <div className="flex justify-end items-center gap-2 ps-1">
    //                     <div>
    //                         <span className='text-xs'>
    //                             <Button onClick={() => setIsAddAdminOpen(true)} Icon={<IoAdd className="text-xl" />} color={"orange"}>Admin</Button>
    //                         </span>
    //                     </div>
    //                     {/* <span className='text-xs'>
    //                         <Button onClick={() => setIsAddOpen(true)} Icon={<IoAdd className="text-xl" />} color={"green"}>Opration</Button>
    //                     </span> */}
    //                 </div>
    //             </div>}>

    //             <div className='mt-4'>
    //                 <Search value={searchTerm} setValue={setSearchTerm} handleSearch={getData} text="Users" />
    //                 <PagingGlobal OnPageChange={handlePageChange} pagingData={data.paging} text="ApplicationUser" loading={isLoading} >
    //                     <Table>
    //                         {!isLoading && isInternet &&
    //                             <TableHead>
    //                                 <TableTr>
    //                                     <TableTh>UserName</TableTh>
    //                                     <TableTh>Phone No</TableTh>
    //                                     <TableTh>FullName</TableTh>
    //                                     <TableTh>Role</TableTh>
    //                                     <TableTh>Status</TableTh>
    //                                     <TableTh>Created On</TableTh>
    //                                 </TableTr>
    //                             </TableHead>
    //                         }
    //                         <TableBody>
    //                             {
    //                                 isLoading ?
    //                                     <TableTr>
    //                                         <TableTd>
    //                                             <div className='py-8'>
    //                                                 <Loading />
    //                                             </div>
    //                                         </TableTd>
    //                                     </TableTr>
    //                                     :
    //                                     isInternet ?
    //                                         data.data.length > 0 ?
    //                                             data.data.map((item, index) =>
    //                                                 <TableTr key={index}>
    //                                                     <TableTd>{item.userName}</TableTd>
    //                                                     <TableTd><div className='text-center'>{item.phoneNumber}</div></TableTd>
    //                                                     <TableTd><div className='text-center'>{item.fullName}</div></TableTd>
    //                                                     <TableTd>
    //                                                         <div className='text-center'>
    //                                                             <Status
    //                                                                 text={ERoleGetName(item.role)}
    //                                                                 bgColor={ERoleBg(item.role)}
    //                                                                 textColor={ERoleText(item.role)} />
    //                                                         </div>
    //                                                     </TableTd>
    //                                                     <TableTd>
    //                                                         <div className='text-center'>
    //                                                             <Status
    //                                                                 text={EStatusGetName(item.status)}
    //                                                                 bgColor={EStatusBg(item.status)}
    //                                                                 textColor={EStatusText(item.status)} />
    //                                                         </div>
    //                                                     </TableTd>
    //                                                     <TableTd><div className='text-center'>{moment(item.createdOn).format('lll')}</div></TableTd>
    //                                                 </TableTr>)
    //                                             :
    //                                             <TableTr>
    //                                                 <TableTd colSpan={6}>
    //                                                     <div className='py-8 text-2xl text-gray-300 text-center'>
    //                                                         No data found
    //                                                     </div>
    //                                                 </TableTd>
    //                                             </TableTr>
    //                                         :
    //                                         <TableTr>
    //                                             <TableTd>
    //                                                 <div className='py-8 text-lg text-center'>
    //                                                     <button onClick={getData} className='p-2 cursor-pointer hover:bg-gray-200 rounded-md active:bg-gray-300'><IoReload className="text-2xl text-green-400" /></button>
    //                                                     <h1 className='text-2xl text-gray-300'> No Internet </h1>
    //                                                 </div>
    //                                             </TableTd>
    //                                         </TableTr>
    //                             }
    //                         </TableBody>
    //                     </Table>
    //                 </PagingGlobal>
    //             </div>
    //         </Card>
    //         <AddAddministrator title={`Add Admin`} isOpen={isAddAdminOpen} setIsOpen={setIsAddAdminOpen} handleRefresh={getData} />
    //     </Container >
    // )

    return (
        <Container>
            <Card
                className="bg-[#071220]/80 backdrop-blur-md border border-sky-500/20 rounded-3xl shadow-2xl text-white"
                title={
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full py-2">

                        <div className="flex items-center gap-3 md:gap-4">

                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                                <PiUsersThin className="text-white text-3xl" />
                            </div>

                            <div>
                                <h1 className="text-xl md:text-3xl font-bold text-white">
                                    User Management
                                </h1>

                                <p className="text-sky-300 text-sm">
                                    Manage application users and administrators
                                </p>
                            </div>

                        </div>

                        <div className="w-full md:w-auto">
                            <Button
                                onClick={() => setIsAddAdminOpen(true)}
                                Icon={<IoAdd className="text-xl" />}
                                color={"blue"}
                            >
                                Admin
                            </Button>
                        </div>

                    </div>
                }
            >

                <div className="mt-6">

                    <Search
                        value={searchTerm}
                        setValue={setSearchTerm}
                        handleSearch={getData}
                        text="Search Users..."
                    />

                    <PagingGlobal
                        OnPageChange={handlePageChange}
                        pagingData={data.paging}
                        text="ApplicationUser"
                        loading={isLoading}
                    >
                        <div className="block lg:hidden mt-6">
                            {data.data.map((item, index) => (
                                <div
                                    key={index}
                                    className="
            mb-4
            rounded-2xl
            bg-slate-900/60
            border border-slate-700/50
            p-4
            shadow-lg
            "
                                >

                                    {/* Header */}
                                    <div className="flex items-start justify-between">

                                        <div className="flex items-center gap-3">

                                            <div className="w-11 h-11 rounded-full bg-sky-500/15 flex items-center justify-center">
                                                <FaUser className="text-sky-400 text-lg" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-white">
                                                    {item.userName}
                                                </h3>

                                                <p className="text-slate-400 text-sm">
                                                    {item.fullName}
                                                </p>
                                            </div>

                                        </div>

                                        <button
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsDeleteOpen(true);
                                            }}
                                            className="
                    w-9 h-9
                    rounded-full
                    flex items-center justify-center
                    bg-red-500/10
                    text-red-300
                    hover:bg-red-500/20
                    transition-all
                    "
                                        >
                                            <MdDelete className="text-lg" />
                                        </button>

                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-300">
                                        <MdDateRange className="text-orange-400" />
                                        <span>{moment(item.createdOn).format("DD MMM YYYY")}</span>
                                    </div>

                                    {/* Status */}
                                    <div className="flex flex-wrap gap-2 mt-4">

                                        <Status
                                            text={ERoleGetName(item.role)}
                                            bgColor={ERoleBg(item.role)}
                                            textColor={ERoleText(item.role)}
                                        />

                                        <Status
                                            text={EStatusGetName(item.status)}
                                            bgColor={EStatusBg(item.status)}
                                            textColor={EStatusText(item.status)}
                                        />

                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:block mt-6 rounded-2xl overflow-hidden border border-sky-500/20 shadow-lg">

                            <Table>

                                {!isLoading && isInternet &&

                                    <TableHead>
                                        <TableTr>

                                            <TableTh>
                                                <div className="flex items-center gap-2">
                                                    <FaUser className="text-sky-400" />
                                                    User Name
                                                </div>
                                            </TableTh>

                                            {/* <TableTh>
                                                <div className="flex items-center justify-center gap-2">
                                                    <MdPhone className="text-green-400" />
                                                    Phone No
                                                </div>
                                            </TableTh> */}

                                            <TableTh>
                                                <div className="flex items-center justify-center gap-2">
                                                    <FaUser className="text-cyan-400" />
                                                    Full Name
                                                </div>
                                            </TableTh>

                                            <TableTh>
                                                <div className="flex items-center justify-center gap-2">
                                                    <RiShieldUserFill className="text-purple-400" />
                                                    Role
                                                </div>
                                            </TableTh>

                                            <TableTh>
                                                <div className="flex items-center justify-center gap-2">
                                                    <IoCheckmarkDoneCircle className="text-green-400" />
                                                    Status
                                                </div>
                                            </TableTh>

                                            <TableTh>
                                                <div className="flex items-center justify-center gap-2">
                                                    <MdDateRange className="text-orange-400" />
                                                    Created On
                                                </div>
                                            </TableTh>

                                            <TableTh>
                                                <div className="flex items-center justify-center gap-2">
                                                    ⚙️ Actions
                                                </div>
                                            </TableTh>

                                        </TableTr>
                                    </TableHead>

                                }

                                <TableBody>

                                    {
                                        isLoading ?

                                            <TableTr>
                                                <TableTd colSpan={7}>
                                                    <div className="py-12 flex justify-center">
                                                        <Loading />
                                                    </div>
                                                </TableTd>
                                            </TableTr>

                                            :

                                            isInternet ?

                                                data.data.length > 0 ?

                                                    data.data.map((item, index) => (

                                                        <TableTr key={index}>

                                                            {/* User Name */}
                                                            <TableTd>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-9 h-9 rounded-full bg-sky-500/20 flex items-center justify-center">
                                                                        <FaUser className="text-sky-400 text-sm" />
                                                                    </div>

                                                                    <span className="font-bold text-white">
                                                                        {item.userName}
                                                                    </span>
                                                                </div>
                                                            </TableTd>

                                                            {/* Phone */}
                                                            {/* <TableTd>
                                                                <div className="flex items-center justify-center gap-2 text-white font-semibold">
                                                                    <MdPhone className="text-green-400" />
                                                                    {item.phoneNumber || "-"}
                                                                </div>
                                                            </TableTd> */}

                                                            {/* Full Name */}
                                                            <TableTd>
                                                                <div className="flex items-center justify-center gap-2 text-white font-semibold">
                                                                    <FaUser className="text-cyan-400" />
                                                                    {item.fullName}
                                                                </div>
                                                            </TableTd>

                                                            {/* Role */}
                                                            <TableTd>
                                                                <div className="flex justify-center">
                                                                    <Status
                                                                        text={ERoleGetName(item.role)}
                                                                        bgColor={ERoleBg(item.role)}
                                                                        textColor={ERoleText(item.role)}
                                                                    />
                                                                </div>
                                                            </TableTd>

                                                            {/* Status */}
                                                            <TableTd>
                                                                <div className="flex justify-center">
                                                                    <Status
                                                                        text={EStatusGetName(item.status)}
                                                                        bgColor={EStatusBg(item.status)}
                                                                        textColor={EStatusText(item.status)}
                                                                    />
                                                                </div>
                                                            </TableTd>

                                                            {/* Created Date */}
                                                            <TableTd>
                                                                <div className="flex items-center justify-center gap-2 text-white font-medium">
                                                                    <MdDateRange className="text-orange-400" />
                                                                    {moment(item.createdOn).format("DD MMM YYYY")}
                                                                </div>
                                                            </TableTd>

                                                            {/* Actions */}
                                                            <TableTd>
                                                                <div className="flex items-center justify-center gap-3">

                                                                    <button
                                                                        onClick={() => {
                                                                            setSelectedItem(item);
                                                                            setIsDeleteOpen(true);
                                                                        }}
                                                                        className="
                px-4 py-2
                rounded-xl
                bg-red-500/10
                border border-red-500/20
                text-red-300
                font-semibold
                hover:bg-red-500/20
                hover:border-red-500/40
                hover:scale-105
                transition-all duration-300
                shadow-lg shadow-red-900/20
                "
                                                                    >
                                                                        Delete
                                                                    </button>

                                                                </div>
                                                            </TableTd>

                                                        </TableTr>

                                                    ))


                                                    :

                                                    <TableTr>

                                                        <TableTd colSpan={7}>

                                                            <div className="py-16 text-center">

                                                                <PiUsersThin className="mx-auto text-6xl text-sky-500/40 mb-4" />

                                                                <h2 className="text-2xl font-bold text-white">
                                                                    No Users Found
                                                                </h2>

                                                                <p className="text-sky-300 mt-2">
                                                                    There are no users available right now.
                                                                </p>

                                                            </div>

                                                        </TableTd>

                                                    </TableTr>

                                                :

                                                <TableTr>

                                                    <TableTd colSpan={7}>

                                                        <div className="py-16 text-center">

                                                            <button
                                                                onClick={getData}
                                                                className="p-4 rounded-2xl bg-sky-500/20 hover:bg-sky-500/30 transition-all"
                                                            >
                                                                <IoReload className="text-4xl text-sky-400" />
                                                            </button>

                                                            <h1 className="text-2xl font-bold text-white mt-4">
                                                                No Internet Connection
                                                            </h1>

                                                            <p className="text-sky-300 mt-2">
                                                                Please check your network and try again.
                                                            </p>

                                                        </div>

                                                    </TableTd>

                                                </TableTr>
                                    }

                                </TableBody>

                            </Table>

                        </div>

                    </PagingGlobal>

                </div>

            </Card>

            <AddAddministrator title="Add Admin" isOpen={isAddAdminOpen} setIsOpen={setIsAddAdminOpen} handleRefresh={getData} />
            <DeleteUser title="Delete User" isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} handleRefresh={getData} item={selectedItem} />


        </Container>
    )
}
