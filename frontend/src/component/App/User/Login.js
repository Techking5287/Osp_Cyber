
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


const Login = () => {

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
            alert("Invaild your eMail")
        }
        else if (!pAssword) {
            alert("Invaild dont match")
        }
        else if (eMail && pAssword) {
            const data = { eMail, pAssword }
            axios.post("/api/users/signin", data).then(res => {
                console.log(res.data);
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
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className="cursor-pointer">Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder="  Enter your email" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className="cursor-pointer">Password</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder="  Enter your password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center underline'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p className="cursor-pointer underline">Forgot Password</p>
                        <Link to="/signup" className="cursor-pointer underline">Create account</Link>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                </div>
            </div>
        </div>
    )
}
export default Login;