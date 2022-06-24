import Topbaar from "./components/Topbaar/Topbaar";
import Welcome from "./pages/Guest/Welcome/Welcome";
import Login from "./pages/Guest/Login/Login";
import Activation from "./pages/SemiProtected/Activation";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from "./pages/Protected/Home";


function App() {

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="bg-background w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto app">
        <Topbaar />
        <Router>
          <Routes>
            {/* Welcome */}
            <Route path="/" exact element={<Welcome />} />
            {/* Login */}
            <Route path="/login" exact element={<Login />} />
            {/* Activation */}
            <Route path="/activation" exact element={<Activation />} />
            {/* Home */}
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
