import useAuth from "../auth/useAuth"
import { useNetwork } from "../common/useNetwork"
import { createAxios, createAxiosWithToken } from "./createAxios"

const useRemindar = () => {
    const { axiosError, authentication } = useAuth()
    const { setAvailable } = useNetwork()

    const remindarGetByHighPriority = (async () => {
        try {
             if (authentication.isLogin) {
            let res = await createAxiosWithToken(authentication.token).get(`/Remindars/GetByHighPriority`)
            setAvailable()
            return res
             }
        } catch (err) {
            axiosError(err)
        }
    })
    const remindarGetByNormalPriority = (async () => {
        try {
             if (authentication.isLogin) {
            let res = await createAxiosWithToken(authentication.token).get(`/Remindars/GetByNormalPriority`)
            setAvailable()
            return res
             }
        } catch (err) {
            axiosError(err)
        }
    })
    // const remindarGetByCategory = (async () => {
    //     try {
    //         if (authentication.isLogin) {
    //             let res = await createAxiosWithToken(authentication.token).get(`/Remindars/GetByCategoryRemindar?category=${category}`)
    //             setAvailable()
    //             return res
    //         }
    //     } catch (err) {
    //         axiosError(err)
    //     }
    // })
    const remindarGetByCategory = async (category) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).get(`/Remindars/GetByCategoryRemindar?category=${category}`)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    }
    const remindarGetByStatus = async (status) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).get(`/Remindars/GetByStatusRemindar?status=${status}`)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    }
    const remindarGetAll = (async (param) => {
        try {
             if (authentication.isLogin) {
            let res = await createAxiosWithToken(authentication.token).get(`/Remindars/GetAll?PageNo=${param.pageNo}&PageSize=${param.pageSize}&SearchTerm=${param.searchTerm}`)
            setAvailable()
            return res
             }
        } catch (err) {
            axiosError(err)
        }
    })

    const remindarAdd = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`/Remindars/Add`, param)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })

    const remindarUpdate = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`/Remindars/Update`, param)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })

    const remindarDelete = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`/Remindars/Delete?Id=${param.id}`)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })
    return {
        remindarGetAll,
        remindarAdd,
        remindarUpdate,
        remindarDelete,
        remindarGetByHighPriority,
        remindarGetByNormalPriority,
        remindarGetByCategory,
        remindarGetByStatus
    }
}
export default useRemindar