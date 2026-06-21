import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

export default function Card({ isOpen, setIsOpen, handleRefresh }) {
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        name: yup.string().min(3, "Name must be at least 3 characters").max(500, "Max 500 characters allowed").required("Name is required"),
        population: yup.number().required("Population is required"),
        voters: yup.number().required("Voters count is required"),
        detail: yup.string().max(500, "Max 500 characters allowed"),
        priority: yup.number().required("Priority is required"),
    });

    const init = {
        name: "",
        population: "",
        voters: "",
        detail: "",
        priority: "",
    };

    const { handleBlur, handleChange, handleSubmit, errors, values, touched, isValid, } = useFormik({
        initialValues: init,
        validationSchema: schema,
        onSubmit(val) {
            console.log("Form Submitted:", val);
        },
    });

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md w-full max-w-lg mx-auto space-y-4">
            <h2 className="text-xl font-bold text-green-800 text-center mb-2">Add New Record</h2>
            <div>
                <label className="text-sm font-semibold text-gray-800" htmlFor="name"> Name</label>
                <input
                    id="name"
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.name && errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor="population"> Population</label>
                <input
                    type="number"
                    id="population"
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    value={values.population}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.population && errors.population && (
                    <p className="text-red-600 text-sm mt-1">{errors.population}</p>
                )}
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor="voters">Voters</label>
                <input
                    type="number"
                    id="voters"
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    value={values.voters}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.voters && errors.voters && (
                    <p className="text-red-600 text-sm mt-1">{errors.voters}</p>
                )}
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor="detail">Detail</label>
                <textarea
                    id="detail"
                    className="w-full mt-1 p-2 border rounded-lg h-20 focus:ring-2 focus:ring-green-500 outline-none"
                    value={values.detail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.detail && errors.detail && (
                    <p className="text-red-600 text-sm mt-1">{errors.detail}</p>
                )}
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor="priority">Priority</label>
                <input
                    type="number"
                    id="priority"
                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    value={values.priority}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.priority && errors.priority && (
                    <p className="text-red-600 text-sm mt-1">{errors.priority}</p>
                )}
            </div>
            <div className="flex justify-center gap-3 pt-3">
                <button type="submit" disabled={!isValid || isLoading} className={`px-6 py-2 rounded-lg text-white font-semibold transition ${isValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}
             `}
                >
                    {isLoading ? "Saving..." : "Save"}
                </button>

                <button type="button"onClick={() => setIsOpen(false)} className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-semibold">
                    Cancel
                </button>
            </div>
        </form>
    );
}
