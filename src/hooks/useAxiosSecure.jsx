import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
    const {logOut}= useAuth();

    const navigate =  useNavigate();

    axios.interceptors.request.use(
        res=>{
            return res;
        },

        async error=>{
            console.log("Error from axios interceptors", error.response);
            if(error.response.status === 401 || error.response.status === 403){
              await logOut();
              navigate("/login");
              
            }
        }
    );

  return axiosSecure;

};

export default useAxiosSecure;
