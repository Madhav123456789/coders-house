import Topbaar from "./components/Topbaar/Topbaar";
import Welcome from "./pages/Guest/Welcome/Welcome";
import Login from "./pages/Guest/Login/Login";
import Activation from "./pages/SemiProtected/Activation";
import { ToastContainer } from "react-toastify";
import {useSelector} from "react-redux";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from "./pages/Protected/Home";
import useProtectedRoutes from "./addons/hooks/useProtectedRoutes";


function App() {
  // auth state
  const {isAuth , activated} = useSelector(s=>s.auth);
  // protected routes
  const {Guest , SemiProtected , Protected} = useProtectedRoutes;
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

      
        <Topbaar />
        <Router>
          <Routes>
            {/* Welcome */}
            <Route path="/" exact element={<Guest isAuth={isAuth}>
              <Welcome />
            </Guest>} />
            {/* Login */}
            <Route path="/login" exact element={<Guest isAuth={isAuth}>
              <Login />
            </Guest>} />
            {/* Activation */}
            <Route path="/activation" exact element={<SemiProtected activated={activated} isAuth={isAuth}>
              <Activation />
            </SemiProtected>} />
            {/* Home */}
            <Route path="/home" exact element={<Protected isAuth={isAuth} activated={activated}>
              <Home />
            </Protected>} />
          </Routes>
        </Router>
      </>

  );
}

export default App;
