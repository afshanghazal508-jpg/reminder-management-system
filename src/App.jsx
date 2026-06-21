import { AuthProvider } from './auth/useAuth'
import NetworkProvider from './common/useNetwork'
import RouteContainer from './component/routeContainer'
import ToastProvider from './toast/ToastProvider'


function App() {

  return (
    <>
      
        <ToastProvider>
          <NetworkProvider>
          <AuthProvider>
            <RouteContainer/>
          </AuthProvider>
          </NetworkProvider>
        </ToastProvider>
    </>
  )
}
export default App
