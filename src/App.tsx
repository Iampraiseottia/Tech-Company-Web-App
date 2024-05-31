import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import SignIn from "./pages/login"
import SignUp from "./pages/register"
import Dashboard from "./pages/dashboard"
import NoPage from "./pages/NoPage"
import Home from "./pages/home"


function App() {

  return (
    <>
      
      <Router>
         

        <Routes>


          <Route index element={ <Home />  } path="/home" />

          <Route element={ <SignIn />  } path="/login" />

          <Route element={ <SignUp />  } path="/register" />

          <Route element={ <Dashboard />  } path="/dashboard" />

          <Route element={ <NoPage />  } path="*" />

        </Routes>
      </Router>

      {/* <Login /> */}
    </>
  )
}

export default App
