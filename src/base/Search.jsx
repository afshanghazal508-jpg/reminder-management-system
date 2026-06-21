import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineDateRange } from 'react-icons/md';
import Input from './Input';
import moment from 'moment';
const NEXT_MONTH = new Date();
NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() - 1);

function Search({ value = "", setValue, handleSearch, text = "Search", isDate = false, setDate, isButton = true }) {
    const [dateVal, setDateVal] = useState({
        start: moment(NEXT_MONTH).format("YYYY-MM-DD"),
        end: moment(new Date()).format("YYYY-MM-DD")
    });

    useEffect(() => {
        if (isDate)
            setDate(dateVal)
    }, [dateVal])
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); handleSearch() }} class="flex flex-col md:flex-row items-center mb-2 gap-3 w-full">
                {isDate &&
                    <div className='w-full flex md:flex-row flex-col items-center justify-center gap-2'>
                        <div className='w-full'>
                            <Input Icon={<MdOutlineDateRange className='text-green-400' />} value={dateVal.start} onChange={(e) => setDateVal(pre => ({ ...pre, start: e.target.value }))} type="date" />
                        </div>
                        <div className='hidden md:block'>to</div>
                        <div className='w-full'>
                            <Input Icon={<MdOutlineDateRange className='text-blue-400' />} value={dateVal.end} onChange={(e) => setDateVal(pre => ({ ...pre, end: e.target.value }))} type="date" />
                        </div>
                    </div>
                }
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <CiSearch className='w-6 h-6 text-sky-500' />
                    </div>
                    <input value={value} onChange={(e) => setValue(e.target.value)} class="outline-none bg-gray-50 border border-sky-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder={text + "..."} />
                </div>
                {isButton &&
                    <button
                        type="submit"
                        className="
    hidden md:flex
    items-center
    justify-center
    p-2.5
    ms-2
    text-sm
    font-medium
    text-white
    bg-sky-500
    rounded-lg
    border
    border-sky-600
    hover:bg-sky-700
    focus:ring-4
    focus:outline-none
    focus:ring-blue-300
    "
                    >
                        <CiSearch className='w-5 h-5 text-white' />
                        <span class="sr-only">Search</span>
                    </button>
                }
            </form>
        </>
    )
}

export default Search