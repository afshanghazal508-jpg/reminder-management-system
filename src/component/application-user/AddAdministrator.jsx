import { useState } from "react";
import useApplicationUser from "../../crud/applicationUserCrud";
import { useToast } from "../../toast/ToastProvider";
import * as yup from 'yup'
import { useFormik } from "formik";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdAutoFixHigh, MdErrorOutline } from "react-icons/md";
import Modal from "../../base/Modal";
import Input from "../../base/Input";
import Button from "../../base/Button";
import { SlUserFollow } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { CiShoppingTag } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import Select from "../../base/Select";
import { EStatusGetAll } from "../../enum/EStatus";
import { RiAdminFill } from "react-icons/ri";

export default function AddAddministrator({ isOpen, setIsOpen, handleRefresh, title }) {
    const { applicationUserAddAdministrator } = useApplicationUser()
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const schema = yup.object().shape({
        userName: yup.string().required("User name is required"),
        address: yup.string().required("Address is required"),
        fullName: yup.string().min(3, "Full name at least 3 character").max(500, "Full name should under 500 character").required("Full name is required"),
        password: yup.string().required("Password is required"),
        status: yup.string().required("Status is required"),

    });
    const init = {
        userName: "",
        address: "",
        fullName: "",
        password: "",
        status: "",
    }

    const { handleBlur, handleChange, handleSubmit, errors, values, touched, setValues, isValid } = useFormik({
        initialValues: init,
        validationSchema: schema,
        onSubmit(val) {
            handleAdd(val)
        }
    })

    const handleAdd = (val) => {
        let newVal = {
            userName: val.userName,
            fullName: val.fullName,
            address: val.address,
            status: parseInt(val.status),
            security: {
                password: val.password,
                confirmPassword: val.password
            }
        }
        setIsLoading(true)
        applicationUserAddAdministrator(newVal)
            .then(res => {
                let result = res.data;

                if (result.succedded) {
                    handleRefresh();
                    setIsOpen(false);
                    setValues({ ...init });

                    toast.open(
                        "Added successfully.",
                        "text-green-400",
                        <IoCheckmarkDoneCircle />
                    );
                }
                else {
                    toast.open(
                        result.message || "Server Error.",
                        "text-red-400",
                        <MdErrorOutline />
                    );
                }

                setIsLoading(false);
            })
    }
    // return (
    //     <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen} >
    //         <form onSubmit={handleSubmit} className='px-4 py-4 flex flex-col gap-2'>
    //             <div>
    //                 <label htmlFor='userName'> User Name</label>
    //                 <div>
    //                     <Input
    //                         IsError={touched.userName && errors.userName}
    //                         Icon={<SlUserFollow className='w-4 h-4 text-green-500' />} id='userName' value={values.userName} onChange={handleChange} onBlur={handleBlur} />
    //                     {touched.userName && errors.userName && <span className='text-red-600 text-sm'>{errors.userName}</span>}
    //                 </div>
    //             </div>

    //             <div>
    //                 <label htmlFor='phoneNumber'>Phone Number</label>
    //                 <div>
    //                     <Input
    //                         IsError={touched.phoneNumber && errors.phoneNumber}
    //                         Icon={< FaPhone className='w-4 h-4 text-blue-500' />} id='phoneNumber' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
    //                     {touched.phoneNumber && errors.phoneNumber && <span className='text-red-600 text-sm'>{errors.phoneNumber}</span>}
    //                 </div>
    //             </div>


    //             <div>
    //                 <label htmlFor='fullName'>Full Name</label>
    //                 <div>
    //                     <Input
    //                         IsError={touched.fullName && errors.fullName}
    //                         Icon={<CiShoppingTag className='w-4 h-4 text-green-950' />} id='fullName' value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
    //                     {touched.fullName && errors.fullName && <span className='text-red-600 text-sm'>{errors.fullName}</span>}
    //                 </div>
    //             </div>
    //             <div>
    //                 <label htmlFor='password'>Password </label>
    //                 <div>
    //                     <Input
    //                         isPassword={true}
    //                         IsError={touched.password && errors.password}
    //                         Icon={<SiGnuprivacyguard className='w-4 h-4 text-orange-800' />} id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
    //                     {touched.password && errors.password && <span className='text-red-600 text-sm'>{errors.password}</span>}
    //                 </div>
    //             </div>
    //             <div className='mt-4 flex items-center justify-center gap-2'>
    //                 <Button type="submit" color="green" isDisabled={!isValid} isLoading={isLoading} loadingText="Adding...">Save</Button>
    //                 <Button color="default" onClick={() => setIsOpen(false)}>Cancel</Button>
    //             </div>
    //         </form>
    //     </Modal >
    // ) 

    return (
        <Modal title={
            <div className="flex items-center gap-2">
                <RiAdminFill className="text-sky-400 text-lg" />
                <span>Add Administrator</span>
            </div>
        } isOpen={isOpen} setIsOpen={setIsOpen}>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Name */}
                <div>

                    <label htmlFor="userName" className="block mb-2 font-semibold text-slate-200">
                        User Name
                    </label>

                    <div className="rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-sm">
                        <Input
                            placeholder=" Enter user name..."
                            IsError={touched.userName && errors.userName}
                            Icon={
                                <SlUserFollow className="w-4 h-4 text-cyan-400" />
                            }
                            id="userName"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    {touched.userName && errors.userName && (
                        <span className="text-red-400 text-sm">
                            {errors.userName}
                        </span>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="address" className="block mb-2 font-semibold text-slate-200">
                        Address
                    </label>

                    <div className="rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-sm">
                        <Input
                            placeholder="Enter address..."
                            IsError={touched.address && errors.address}
                            Icon={<FaPhone className="w-4 h-4 text-emerald-400" />}
                            id="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    {touched.address && errors.address && (
                        <span className="text-red-400 text-sm">
                            {errors.address}
                        </span>
                    )}
                </div>

                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block mb-2 font-semibold text-slate-200">
                        Full Name
                    </label>

                    <div className="rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-sm">
                        <Input
                            placeholder="Enter full name..."
                            IsError={touched.fullName && errors.fullName}
                            Icon={
                                <CiShoppingTag className="w-5 h-5 text-purple-400" />
                            }
                            id="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    {touched.fullName && errors.fullName && (
                        <span className="text-red-400 text-sm">
                            {errors.fullName}
                        </span>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block mb-2 font-semibold text-slate-200" >
                        Password
                    </label>

                    <div className="rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-sm">
                        <Input
                            placeholder="Enter password..."
                            isPassword={true}
                            IsError={touched.password && errors.password}
                            Icon={<SiGnuprivacyguard className="w-4 h-4 text-amber-400" />}
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    {touched.password && errors.password && (
                        <span className="text-red-400 text-sm">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div>
                    <label className="text-sm text-gray-300 mb-1 block">
                        Status
                    </label>

                    <Select id="status" Icon={<MdAutoFixHigh className="w-4 h-4 text-pink-400" />} value={values.status} onChange={handleChange} onBlur={handleBlur}>
                        <option value="">
                            Select Status
                        </option>
                        {EStatusGetAll.map((item) => (
                            <option key={item.id} value={parseInt(item.id)} >{item.name}</option>))}
                    </Select>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-5 w-full">

                    <button type="submit" disabled={!isValid || isLoading} className=" w-full sm:w-auto min-w-[220px] h-12 flex items-center justify-center gap-2 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-900/40 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 " >
                        <RiAdminFill className="text-lg" />
                        {isLoading
                            ? "Creating Admin..."
                            : "Create Admin"}
                    </button>

                    <button type="button" onClick={() => setIsOpen(false)} className=" w-full sm:w-auto min-w-[140px] h-12 px-6 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 transition-all duration-300 " >
                        Cancel
                    </button>

                </div>
            </form>
        </Modal>
    );
}
