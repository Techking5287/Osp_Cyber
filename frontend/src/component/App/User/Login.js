
import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { Button, message, Space } from "antd";
import { useSelector, useDispatch } from 'react-redux'
import { InputGameoverauth, InputMinute, InputSeconds } from "../../../reducers/InputSlice";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [messageApi, contextHolder] = message.useMessage();
    const [eMail, setEmail] = useState("");
    const [pAssword, setPassword] = useState("");
    const HandleChange = (param1, param2) => {
        if (param1 == "email")
            setEmail(param2)
        else if (param1 == "password")
            setPassword(param2)
    }
    const Signin = () => {
        if (!eMail) {
            message.warning("Invalid your email")
        }
        else if (!pAssword) {
            message.warning("Invalid your password")
        }
        else if (eMail && pAssword) {
            const data = { eMail, pAssword }
            axios.post("/api/users/sign_in", data).then(res => {
                if (res.data.success) {
                    message.config({
                        top: "60px",
                        duration: 2
                    })
                    localStorage.setItem('minutes', 30)
                    localStorage.setItem('seconds', 0)
                    localStorage.setItem('user', true)
                    console.log("l: ", localStorage.getItem('seconds'), localStorage.getItem('minutes'))
                    dispatch(InputMinute(localStorage.getItem("minutes")))
                    dispatch(InputSeconds(localStorage.getItem("seconds")))
                    message.success(res.data.success);
                    navigate("/pincode");
                }
                else {
                    message.error(res.data)
                }
            })
        }
        else {
            alert("Failure!")
        }
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>
            <div className='bg-gray-800 flex flex-col justify-center cursor-pointer'>
                <div className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className=" text-start cursor-pointer">Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder="  Enter your email" onChange={(event => HandleChange("email", event.target.value))} />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className=" text-start cursor-pointer">Password</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder="  Enter your password" onChange={(event => HandleChange("password", event.target.value))} />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center underline'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        {/* <p className="cursor-pointer underline">Forgot Password</p> */}
                        <Link to="/signup" className="cursor-pointer underline">Create account</Link>
                    </div>
                    <button onClick={Signin} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                </div>
            </div>
        </div>
    )
}
export default Login;