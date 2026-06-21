import { useEffect, useState } from "react";
import * as yup from 'yup'
import { useFormik } from "formik";
import { useToast } from "../../toast/ToastProvider";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdAutoFixHigh, MdDescription, MdErrorOutline, MdOutlineAutoFixHigh, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { EPriorityGetAll } from "../../enum/EPriority";
import Button from "../../base/Button";
import Input from "../../base/Input";
import Modal from "../../base/Modal";
import Select from "../../base/Select";
import moment from "moment";
import useRemindar from "../../crud/remindarCrud";
import { LuNotebookPen } from "react-icons/lu";
import { ERemindarStatusGetAll } from "../../enum/ERemindarStatus";
import { ERemindarCategoryGetAll } from "../../enum/ERemindarCategory";


export default function UpdateRemindar({ isOpen, setIsOpen, handleRefresh, title, item }) {
  const { remindarUpdate } = useRemindar()
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const schema = yup.object().shape({
    note: yup.string().required("note is required"),
    description: yup.string().required("description is required"),
    title: yup.string().required("title is required"),
    date: yup.string().required("date is required"),
    priority: yup.string().required("priority is required"),
    status: yup.string().required("priority is required"),
    category: yup.string().required("priority is required"),
  });
  const init = {
    id: 0,
    note: "",
    description: "",
    title: "",
    date: moment(Date.now()).format("YYYY-MM-DD"),
    priority: 0,
    status: 0,
    category: 0
  }
  useEffect(() => {
    if (item) {
      setValues({
        id: item.id,
        note: item.note,
        description: item.description,
        title: item.title,
        date: moment(item.date).format("YYYY-MM-DD"),
        priority: item.priority,
        status: item.status,
        category: item.category
      })
    }
  }, [item])

  const { handleBlur, handleChange, handleSubmit, errors, values, touched, setValues, isValid } = useFormik({
    initialValues: init,
    validationSchema: schema,
    onSubmit(val) {
      handleEdit(val)
    }
  })
  const handleEdit = (val) => {
    setIsLoading(true)
    let newVal = {
      ...val,
      note: val.note,
      description: val.description,
      title: val.title,
      date: val.date,
      priority: parseInt(val.priority),
      status: parseInt(val.status),
      category: parseInt(val.category),
    }
    remindarUpdate(newVal)
      .then(res => {
        let result = res.data
        if (result.succedded) {
          handleRefresh()
          setIsOpen(false)
          setValues({ ...init })
          toast.open("Updated successfully.", "text-green-400", <IoCheckmarkDoneCircle />)
        }
        else {
          toast.open("Server Error.", "text-red-400", <MdErrorOutline />)
        }
        setIsLoading(false)
      })
      .catch(err => {
        toast.open("Network Error.", "text-red-400", <MdErrorOutline />)
        setIsLoading(false)
      })
  }
  //   return (
  //     <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen} >
  //       <form onSubmit={handleSubmit} className='px-4 py-4 flex flex-col gap-2'>
  //          <h2 className="text-2xl font-bold text-green-800 text-center">Edit Reminder</h2>
  //          <div>
  //           <label htmlFor='title'> Title</label>
  //           <div>
  //             <Input
  //               placeholder="Enter title" IsError={touched.title && errors.title}
  //               Icon={<MdOutlineDriveFileRenameOutline className='w-4 h-4 text-blue-500' />} id='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
  //             {touched.title && errors.title && <span className='text-red-600 text-sm'>{errors.title}</span>}
  //           </div>
  //         </div>
  //         <div>
  //           <label htmlFor='note'> Note</label>
  //           <div>
  //             <Input
  //               placeholder="Enter note" IsError={touched.note && errors.note}
  //               Icon={<LuNotebookPen className='w-4 h-4 text-blue-500' />} id='note' value={values.note} onChange={handleChange} onBlur={handleBlur} />
  //             {touched.note && errors.note && <span className='text-red-600 text-sm'>{errors.note}</span>}
  //           </div>
  //         </div>
  //         <div>
  //           <label htmlFor='description'> Description</label>
  //           <div>
  //             <Input
  //               placeholder="Enter description" IsError={touched.description && errors.description}
  //               Icon={<MdDescription className='w-4 h-4 text-blue-500' />} id='description' value={values.description} onChange={handleChange} onBlur={handleBlur} />
  //             {touched.description && errors.description && <span className='text-red-600 text-sm'>{errors.description}</span>}
  //           </div>
  //         </div>

  //         <div>
  //           <label htmlFor='date'> Date</label>
  //           <div>
  //             <Input
  //               type="date"
  //               IsError={touched.date && errors.date}
  //               Icon={<BsCalendar2Date className='w-4 h-4 text-blue-500' />} id='date' value={values.date} onChange={handleChange} onBlur={handleBlur} />
  //             {touched.date && errors.date && <span className='text-red-600 text-sm'>{errors.date}</span>}
  //           </div>
  //         </div>
  //         <div>
  //           <label htmlFor='priority'>Priority</label>
  //           <div>
  //             <Select
  //               id="priority"
  //               Icon={<MdAutoFixHigh className='w-4 h-4 text-blue-500' />}
  //               value={values.priority}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //               className="border p-2 w-full rounded-md"
  //             >
  //               {EPriorityGetAll.map(item =>
  //                 <option key={item.id} value={parseInt(item.id)}>{item.name}</option>
  //               )}
  //             </Select>
  //             {touched.priority && errors.priority && <span className='text-red-600 text-sm'>{errors.priority}</span>}
  //           </div>
  //         </div>
  //         <div className='mt-4 flex items-center justify-center gap-2'>
  //           <Button type="submit" color="green" isDisabled={!isValid} isLoading={isLoading} loadingText="Adding...">Save</Button>
  //           <Button color="default" onClick={() => setIsOpen(false)}>Cancel</Button>
  //         </div>
  //       </form>
  //     </Modal>
  //   )
  // }
  return (
    <Modal title="Update Reminder" isOpen={isOpen} setIsOpen={setIsOpen}>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Title
          </label>

          <Input
            placeholder="Enter reminder title"
            IsError={touched.title && errors.title}
            Icon={<MdOutlineDriveFileRenameOutline className="w-4 h-4 text-sky-400" />}
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.title && errors.title && (
            <span className="text-red-400 text-xs">
              {errors.title}
            </span>
          )}
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Note
          </label>

          <Input
            placeholder="Write short note..."
            IsError={touched.note && errors.note}
            Icon={<LuNotebookPen className="w-4 h-4 text-sky-400" />}
            id="note"
            value={values.note}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.note && errors.note && (
            <span className="text-red-400 text-xs">
              {errors.note}
            </span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Description
          </label>

          <Input
            placeholder="Describe your reminder..."
            IsError={touched.description && errors.description}
            Icon={<MdDescription className="w-4 h-4 text-sky-400" />}
            id="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.description && errors.description && (
            <span className="text-red-400 text-xs">
              {errors.description}
            </span>
          )}
        </div>

        {/* Date + Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Date
            </label>

            <Input
              type="date"
              IsError={touched.date && errors.date}
              Icon={
                <BsCalendar2Date
                  className="w-4 h-4 text-sky-400"
                />
              }
              id="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.date && errors.date && (
              <span className="text-red-400 text-xs">
                {errors.date}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Priority
            </label>

            <Select
              id="priority"
              value={values.priority}
              onChange={handleChange}
              onBlur={handleBlur}
              Icon={
                <MdAutoFixHigh
                  className="w-4 h-4 text-sky-400"
                />
              }
            >
              <option value="">
                Select Priority
              </option>

              {EPriorityGetAll.map((item) => (
                <option
                  key={item.id}
                  value={parseInt(item.id)}
                >
                  {item.name}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* Status + Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Status
            </label>

            <Select
              id="status"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              Icon={
                <MdAutoFixHigh
                  className="w-4 h-4 text-sky-400"
                />
              }
            >
              <option value="">
                Select Status
              </option>

              {ERemindarStatusGetAll.map((item) => (
                <option
                  key={item.id}
                  value={parseInt(item.id)}
                >
                  {item.name}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Category
            </label>

            <Select
              id="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              Icon={
                <MdAutoFixHigh
                  className="w-4 h-4 text-sky-400"
                />
              }
            >
              <option value="">
                Select Category
              </option>

              {ERemindarCategoryGetAll.map((item) => (
                <option
                  key={item.id}
                  value={parseInt(item.id)}
                >
                  {item.name}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-4">

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className=" h-11 px-5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-all" >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className=" h-11 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 disabled:opacity-50 transition-all  " >
            {isLoading
              ? "Saving..."
              : "Upadte Reminder"}
          </button>

        </div>

      </form>

    </Modal>

  )
}