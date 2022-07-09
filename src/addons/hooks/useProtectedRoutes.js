import { Navigate /*,useLocation*/ } from "react-router-dom";

class ProtectedRotes {

    Guest({ isAuth , children }) {
        return isAuth ? <Navigate to="/home" /> : children;
    }

    SemiProtected({ isAuth , activated , children }) {
        return !isAuth ? <Navigate to="/login" /> : isAuth && !activated ? children : <Navigate to="/home" />;
    }

    Protected({isAuth , activated , children }) {
        return !isAuth ? <Navigate to="/login" /> : isAuth && !activated ? <Navigate to="/activation" />:children
        ;
    }
}

export default new ProtectedRotes();