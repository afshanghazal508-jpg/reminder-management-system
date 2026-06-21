import { useEffect, useState } from "react"
import useApplicationUser from "../../crud/applicationUserCrud"
import { useToast } from "../../toast/ToastProvider"
import { useFormik } from "formik"
import { IoCheckmarkDoneCircle } from "react-icons/io5"
import { MdErrorOutline } from "react-icons/md"
import Modal from "../../base/Modal"

export default function DeleteUser({ isOpen, setIsOpen, handleRefresh, title, item }) {
    const { DeleteApplicationUser } = useApplicationUser()
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const init = {
        id: 0,
    }
    useEffect(() => {
        if (item) {
            setValues({
                id: item.applicationUserId,
            })
        }
    }, [item])
    const { handleSubmit, setValues, isValid } = useFormik({
        initialValues: init,
        onSubmit(val) {
            handleDelete(val)
        }
    })
    const handleDelete = (val) => {
        setIsLoading(true)
        DeleteApplicationUser(val)
            .then(res => {
                let result = res.data
                if (result.succedded) {
                    handleRefresh()
                    setIsOpen(false)
                    toast.open("Deleted successfully.", "text-green-400", <IoCheckmarkDoneCircle />)
                }
                else {
                    toast.open("Please remove all lower area first.", "text-red-400", <MdErrorOutline />)
                }
                setIsLoading(false)
            })
            .catch(err => {
                toast.open("Network Error.", "text-red-400", <MdErrorOutline />)
                setIsLoading(false)
            })
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>

            <div className="flex items-center justify-center p-2">

                <form onSubmit={handleSubmit} className=" w-full max-w-md rounded-3xl border border-red-500/10 bg-[#0b1220]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(239,68,68,0.12)] overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500"></div>

                    <div className="p-6">
                        <div className="flex justify-center mb-5">

                            <div className=" w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center ">
                                <MdErrorOutline className="text-red-400 text-3xl" />
                            </div>

                        </div>
                        <div className="text-center">

                            <h2 className="text-2xl font-bold text-white">
                                Delete User
                            </h2>

                            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                Are you sure you want to delete
                            </p>

                            <div className="flex flex-col items-center gap-1">
                                <span className="text-red-300 text-lg font-bold">
                                    {item?.fullName}
                                </span>

                                <span className="text-gray-400 text-sm">
                                    @{item?.userName}
                                </span>
                            </div>

                            <p className="text-xs text-gray-500 mt-4">
                                This action cannot be undone.
                            </p>

                        </div>
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <button type="button" onClick={() => setIsOpen(false)} className=" px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition">
                                Cancel
                            </button>

                            <button type="submit" disabled={!isValid || isLoading} className=" px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50 ">
                                {isLoading ? "Deleting..." : "Delete User"}
                            </button>
                        </div>

                    </div>

                </form>

            </div>

        </Modal>
    )
}


