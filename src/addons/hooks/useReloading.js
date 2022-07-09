import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { authOk , activate} from "../../app/auth";
import { setUser } from "../../app/user";

export const useReloading = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                // function will be use to Refreshing the user
                const response = await axios.get("http://localhost:9999/user/refresh" , {
                    withCredentials:true
                });

                const {flag} = await response.data;

                if (flag) {
                    dispatch(authOk());
                    dispatch(setUser(response.data.user));
                    dispatch(activate(response.data.user.activated));
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        })();
    }, [dispatch]);
    return loading;
}