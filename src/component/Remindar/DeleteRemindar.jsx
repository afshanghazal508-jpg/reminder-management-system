

import { useEffect, useState } from 'react'
import useRemindar from '../../crud/remindarCrud'
import { useToast } from '../../toast/ToastProvider'
import { useFormik } from 'formik'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { MdErrorOutline } from 'react-icons/md'
import Modal from '../../base/Modal'
import Button from '../../base/Button'

export default function DeleteRemindar({ isOpen, setIsOpen, handleRefresh, title, item }) {
    const { remindarDelete } = useRemindar()
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const init = {
        id: 0,
    }
    useEffect(() => {
        if (item) {
            setValues({
                id: item.id,
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
        remindarDelete(val)
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
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        <form
            onSubmit={handleSubmit}
            className="px-3 py-3 flex flex-col gap-2 max-w-sm mx-auto"
        >
            <h1 className="text-lg font-medium text-center text-white">
                Are you sure to delete {item?.title}?
            </h1>

            <div className="mt-3 flex items-center justify-center gap-2">
                <Button
                    type="submit"
                    color="red"
                    isDisabled={!isValid}
                    isLoading={isLoading}
                    loadingText="Deleting..."
                >
                    Delete
                </Button>

                <Button
                    color="default"
                    onClick={() => setIsOpen(false)}
                >
                    Cancel
                </Button>
            </div>
        </form>
    </Modal>
)
}
//     return (
//     <Modal title="Delete Reminder" isOpen={isOpen} setIsOpen={setIsOpen}>
//         <form onSubmit={handleSubmit} className="p-4">

//             <h2 className="text-lg font-semibold text-center">
//                 Delete Reminder
//             </h2>

//             <p className="text-center mt-3">
//                 Are you sure you want to delete
//                 <span className="font-semibold text-red-500">
//                     {" "}{item?.title}
//                 </span>
//                 ?
//             </p>

//             <div className="flex justify-center gap-2 mt-5">

//                 <button
//                     type="button"
//                     onClick={() => setIsOpen(false)}
//                     className="px-4 py-2 border rounded-md"
//                 >
//                     Cancel
//                 </button>

//                 <button
//                     type="submit"
//                     disabled={!isValid || isLoading}
//                     className="px-4 py-2 bg-red-500 text-white rounded-md disabled:opacity-50"
//                 >
//                     {isLoading ? "Deleting..." : "Delete"}
//                 </button>

//             </div>

//         </form>
//     </Modal>
// )
// }