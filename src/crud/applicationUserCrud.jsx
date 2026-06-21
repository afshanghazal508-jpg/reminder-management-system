import useAuth from "../auth/useAuth"
import { useNetwork } from "../common/useNetwork"
import { createAxios, createAxiosWithToken } from "./createAxios"

const useApplicationUser = () => {
    const { axiosError, authentication } = useAuth()
    const { setAvailable } = useNetwork()

    const applicationUserGetAll = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).get(`/ApplicationUser/GetAll?PageNo=${param.pageNo}&PageSize=${param.pageSize}&SearchTerm=${param.searchTerm}`)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })

    const applicationUserGetByRole = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).get(`/ApplicationUser/GetByRole?PageNo=${param.pageNo}&PageSize=${param.pageSize}&SearchTerm=${param.searchTerm}&role=${param.role}`)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })
    const applicationUserAddAdministrator = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`ApplicationUser/AddAdministrator`, param)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })

    const applicationUserAuthenticate = (async (param) => {
        try {
            let res = await createAxios().post(`/ApplicationUser/Authenticate`, param)
            setAvailable()
            return res
        } catch (err) {
            axiosError(err)
        }
    })
    const applicationUserChangePassword = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`/ApplicationUser/ChangePassword`, param)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })
    const ApplicationUserUpdateUser = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`/ApplicationUser/UpdateUser`, param)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })
    const DeleteApplicationUser = (async (param) => {
        try {
            if (authentication.isLogin) {
                let res = await createAxiosWithToken(authentication.token).post(`/ApplicationUser/Delete?Id=${param.id}`)
                setAvailable()
                return res
            }
        } catch (err) {
            axiosError(err)
        }
    })

    return {
        ApplicationUserUpdateUser,
        applicationUserChangePassword,
        applicationUserAuthenticate,
        applicationUserAddAdministrator,
        applicationUserGetByRole,
        applicationUserGetAll,
        DeleteApplicationUser
    }
}

export default useApplicationUser