import { useState } from "react"
import useApplicationUser from "../crud/applicationUserCrud"
import useAuth from "./useAuth"
import * as yup from 'yup'
import { useToast } from "../toast/ToastProvider"
import { useFormik } from "formik"
import { MdErrorOutline, MdLock } from "react-icons/md"
import Card from "../base/Card"
import { Link, useNavigate } from "react-router-dom"
import Input from "../base/Input"
import { FaUser } from "react-icons/fa6"
import Button from "../base/Button"
import { RiLoginCircleLine } from "react-icons/ri"

export default function Login() {
    const { applicationUserAuthenticate } = useApplicationUser()
    const { logedIn } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()

    const schema = yup.object().shape({
        userName: yup.string().required("Mobile No. is required."),
        password: yup.string().required("Password is required.")
    })
    const { handleBlur, handleSubmit, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        validationSchema: schema,
        onSubmit(val) {
            handleLogin(val)
        }
    })

    const handleLogin = async (val) => {
        setIsLoading(true)
        applicationUserAuthenticate(val)
            .then(res => {
                let result = res.data.result
                if (result.succedded) {
                    let data = res.data.data
                    let token = res.data.token
                    logedIn({
                        isLogin: true,
                        data: { ...data },
                        token: token
                    })
                    navigate("/remindars")
                }
                else {
                    toast.open("Login Failed: Incorrect user/ password.", "text-red-400", <MdErrorOutline />)
                }
                setIsLoading(false)
            }).catch(err => {
                setIsLoading(false)
            })

    };
    // return (
    //     <div className="w-screen bg-slate-100 bg-no-repeat flex flex-col items-center justify-center h-screen  px-4 py-4">
    //         <div className="w-full sm:w-2/3 lg:w-1/3">
    //             <Card isBack={true}>
    //                 <form onSubmit={handleSubmit} className='p-4'>
    //                     <div className='flex flex-col gap-4'>
    //                         <Link to={"/"} className="flex flex-col items-center justify-center">
                                
    //                         </Link>
    //                         <div>
    //                             <label htmlFor="username" className="block mb-2 text-sm font-semibold ml-2 text-gray-700">
    //                                 Mobile No.
    //                             </label>
    //                             <Input Icon={<FaUser className='text-gray-400' />} placeholder="Enter Mobile No."
    //                                 id="userName"
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 IsError={touched.userName && errors.userName}
    //                             />
    //                         </div>
    //                         <div>
    //                             <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
    //                                 Password
    //                             </label>

    //                             <Input Icon={<MdLock className='text-gray-400' />} type='Password' placeholder="Enter Password"
    //                                 id="password"
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 IsError={touched.password && errors.password}
    //                             />
    //                         </div>
    //                         <div>
    //                             {isValid ?
    //                                 <Button type='submit' color={"blue"} isLoading={isLoading} loadingText="Logging In..." Icon={<RiLoginCircleLine />} >Login</Button>
    //                                 :
    //                                 <Button color={"disabled"} Icon={<RiLoginCircleLine />} disabled >Login</Button>
    //                             }
    //                         </div>
    //                     </div>
    //                 </form>
    //             </Card>
    //         </div>

    //     </div>

    // );
    return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 py-6">

        {/* Background */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center scale-110 blur-sm"></div>

        <div className="absolute inset-0 bg-black/60"></div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg">

            <div className="
                bg-black/50
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                shadow-2xl
                p-5 sm:p-8
            ">

                {/* Header */}
                <div className="text-center mb-6">

                    <div className="flex justify-center mb-3">
                        <div className="
                            h-12 w-12
                            sm:h-14 sm:w-14
                            rounded-full
                            bg-sky-500
                            flex items-center justify-center
                            shadow-md
                        ">
                            <RiLoginCircleLine className="text-white text-2xl sm:text-3xl" />
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        Reminder Login
                    </h1>

                    <p className="text-white/70 text-xs sm:text-sm mt-2">
                        Manage your tasks efficiently
                    </p>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                    <div>
                        <label className="text-white/70 text-sm">
                            User Name
                        </label>

                        <Input
                            Icon={<FaUser className="text-sky-500" />}
                            placeholder="Enter User Name"
                            id="userName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            IsError={touched.userName && errors.userName}
                        />

                        {touched.userName && errors.userName && (
                            <span className="text-red-400 text-xs">
                                {errors.userName}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className="text-white/70 text-sm">
                            Password
                        </label>

                        <Input
                            Icon={<MdLock className="text-sky-500" />}
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            IsError={touched.password && errors.password}
                        />

                        {touched.password && errors.password && (
                            <span className="text-red-400 text-xs">
                                {errors.password}
                            </span>
                        )}
                    </div>

                    <Button
                        type="submit"
                        color={isValid ? "blue" : "disabled"}
                        disabled={!isValid}
                        isLoading={isLoading}
                        loadingText="Logging In..."
                        Icon={<RiLoginCircleLine />}
                    >
                        Login
                    </Button>

                </form>

                {/* Footer */}
                <div className="text-center mt-6 text-white/60 text-xs">
                    Coders Academy • Reminder System
                </div>

            </div>

        </div>

    </div>
);
}
