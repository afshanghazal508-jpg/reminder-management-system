

import { useEffect, useState } from "react";
import { useNetwork } from "../../common/useNetwork";
import useRemindar from "../../crud/remindarCrud"
import moment from "moment";
import { useToast } from "../../toast/ToastProvider";
import { MdDelete, MdErrorOutline, MdForum } from "react-icons/md";
import Container from "../../base/Container";
import Card from "../../base/Card";
import Button from "../../base/Button";
import { IoAdd, IoReload } from "react-icons/io5";
import Search from "../../base/Search";
import Loading from "../../base/Loading";
import { EPriorityGetBg, EPriorityGetName, EPriorityGetText } from "../../enum/EPriority";
import { FcEditImage, FcHighPriority, FcLowPriority } from "react-icons/fc";
import Status from "../../base/Status";
import { TiStopwatch } from "react-icons/ti";
import { SiTimescale } from "react-icons/si";
import UpdateRemindar from "./UpdateRemindar";
import DeleteRemindar from "./DeleteRemindar";
import { TfiTimer } from "react-icons/tfi";
import { RxLapTimer } from "react-icons/rx";
import { RiImageEditFill } from "react-icons/ri";
import { ERemindarCategoryBg, ERemindarCategoryGetName, ERemindarCategoryText } from "../../enum/ERemindarCategory";
import { ERemindarStatusBg, ERemindarStatusGetName, ERemindarStatusText } from "../../enum/ERemindarStatus";
import { TbCategoryFilled } from "react-icons/tb";
const NEXT_MONTH = new Date();
NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() - 1);

export default function GetByHighPriority() {
  const { remindarGetByHighPriority } = useRemindar()
  const { isInternet } = useNetwork()
  const [isLoading, setIsLoading] = useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState({
    data: [],
  })
  const [search, setSearch] = useState({

  })
  const [dateRange, setDateRange] = useState({
    start: moment(NEXT_MONTH).format("YYYY-MM-DD"),
    end: moment(new Date()).format("YYYY-MM-DD")
  })
  const toast = useToast()
  useEffect(() => {
    setSearch(pre => ({ ...pre, searchTerm: searchTerm }))
  }, [searchTerm])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    setIsLoading(true)
    remindarGetByHighPriority({ to: dateRange.end, from: dateRange.start })
      .then(res => {
        let result = res.data.result
        if (result.succedded) {
          setData({
            data: res.data.data,
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

  return (
    <Container>
      <Card bgColor="bg-[#0b0f17]/80" borderColor="border-white/10" title={
        <div className="flex items-center justify-between w-full">

          <div className="flex items-center gap-4 bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-lg">

            <div className="w-11 h-11 rounded-full bg-sky-500/20 flex items-center justify-center shadow-inner shadow-sky-500/20">
              <FcHighPriority className="text-sky-400 w-6 h-6" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white tracking-wide">
                Manage Normal Priority
              </h2>
              {/* <p className="text-xs text-gray-400">
                Manage Your Remindar Normal Priority
              </p> */}
            </div>
          </div>
        </div>
      }
      >

        <div className="mt-5">
          <div className="bg-[#0b0f17]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
            <Search value={searchTerm} setValue={setSearchTerm} handleSearch={getData} text="Reminder" />
          </div>
        </div>
        <div className="mt-6">
          {isLoading ? (
            <div className="py-10">
              <Loading />
            </div>
          ) : isInternet ? (
            data.data.length > 0 ? (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {data.data.map((item, index) => (
                  <div key={index} className="relative bg-[#0b0f17]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg hover:shadow-sky-500/20 hover:border-sky-500/30 transition-all duration-300 ">
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-500/10 blur-3xl rounded-full"></div>
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
                    {item.title && (
                      <p className="text-white font-semibold">
                        <span className="text-sky-400">Title:</span> {item.title}
                      </p>
                    )}

                    <p className="text-gray-300 text-sm mt-2">
                      <span className="text-sky-400 font-medium">Note:</span> {item.note}
                    </p>

                    {item.description && (
                      <p className="text-gray-400 text-sm mt-2">
                        <span className="text-sky-400 font-medium">Description:</span> {item.description}
                      </p>
                    )}

                    <div className="mt-3 text-xs text-sky-300 font-medium">
                      {moment(item.date).format("DD MMM YYYY")}
                    </div>
                    {/* Status */}
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

                  </div>

                ))}

              </div>

            ) : (
              <div className="text-center text-gray-400 py-10">
                No data found
              </div>
            )
          ) : (
            <div className="text-center py-10">
              <button onClick={getData} className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <IoReload className="text-sky-400 text-2xl" />
              </button>
              <h1 className="text-gray-400 mt-3">No Internet</h1>
            </div>
          )}

        </div>

      </Card>

      <UpdateRemindar title="Edit Remindar" isOpen={isEditOpen} setIsOpen={setIsEditOpen} handleRefresh={getData} item={selectedItem} />

      <DeleteRemindar title="Delete Remindar" isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} handleRefresh={getData} item={selectedItem} />

    </Container>
  );
}