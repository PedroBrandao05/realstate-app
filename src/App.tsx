import AuthGateway from "./infra/gateways/auth/AuthGatewayHTTP"
import AxiosAdapter from "./infra/http/AxiosAdapter"
import { GlobalStyles } from "./ui/global/styles"
import Signup from "./ui/pages/Signup"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const authGateway = new AuthGateway(new AxiosAdapter())

function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Signup authGateway={authGateway}/>}/>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
