import AuthGateway from "./infra/gateways/AuthGateway"
import AxiosAdapter from "./infra/http/AxiosAdapter"
import Signup from "./ui/pages/Signup"

const authGateway = new AuthGateway(new AxiosAdapter())

function App() {

  

  return (
    <Signup authGateway={authGateway}/>
  )
}

export default App
