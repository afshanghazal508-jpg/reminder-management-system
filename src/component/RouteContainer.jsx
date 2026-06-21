import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ViewRemindar from "./Remindar/ViewRemindar";
import Sidebar from "../base/Sidebar";
import HomeRemindar from "./Remindar/HomeRemindar";
import useAuth from "../auth/useAuth";
import Login from "../auth/Login";
import AddRemindar from "./Remindar/AddRemindar";
import GetByHighPriority from "./Remindar/GetByHighPriority";
import GetByNormalPriority from "./Remindar/GetByNormalPriority";
import ApplicationUserView from "./application-user/ApplicationUserView";
import GetByCategory from "./Remindar/GetByCategory";
import GetByStatus from "./Remindar/GetByStatus";

export default function RouteContainer() {
    const { authentication } = useAuth()
    return (
        <HashRouter>

            {authentication.isLogin && <Sidebar />}
            {authentication.isLogin ?
                <Routes>
                    <Route path='/' element={<HomeRemindar />} />
                    <Route path='/user' element={<ApplicationUserView />} />

                    <Route path='/remindars' element={<ViewRemindar />} />
                    <Route path='/normalPriority' element={<GetByHighPriority />} />
                    <Route path='/highPriority' element={<GetByNormalPriority />} />
                    <Route path="/category/:category" element={<GetByCategory />} />
                    <Route path="/status/:status" element={<GetByStatus />} />
                    <Route path="*" element={<Navigate to="/" replace />} />

                </Routes>
                :
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />

                </Routes>
            }
        </HashRouter>
    )
}

