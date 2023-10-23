
import { Link, redirect } from "react-router-dom";
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import { useState } from "react";
import axios from "axios"

const Signup = () => {
    const [lRedirect, setLredirect] = useState(false);
    const [nAme, setName] = useState("");
    const [eMail, setEmail] = useState("");
    const [pAssword, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");
    const HandleChange = (param1, param2) => {
        if (param1 == 'name')
            setName(param2)
        else if (param1 == "email")
            setEmail(param2)
        else if (param1 == "password")
            setPassword(param2)
        else if (param1 == "cpassword")
            setCpassword(param2)
        // console.log(param1, param2);
    }
    const Signup = () => {
        if (!nAme) {
            alert("Invaild your full name")
        }
        else if (!eMail) {
            alert("Invaild your eMail")
        }
        else if (!pAssword) {
            alert("Invaild password")
        }
        else if (!cPassword) {
            alert("Invaild confirm password")
        }
        else if (pAssword !== cPassword) {
            alert("Password dont match")
        }
        else if (nAme && eMail && pAssword && cPassword && pAssword === cPassword) {
            const data = { nAme, eMail, pAssword }
            axios.post("/api/users/signup", data).then(res => {
                console.log(res.data);
                setLredirect(true);
                window.location.pathname = "login";
            })
        }
        else {
            alert("Failure!")
        }
    }
    // if (lRedirect) {
    //     return <Link to="/login" />;
    // }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>
            <div className='bg-gray-800 flex flex-col justify-center cursor-pointer'>
                <div className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className="cursor-pointer">Name</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' onChange={(event) => HandleChange('name', event.target.value)} type="text" placeholder="  Enter your full name" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className="cursor-pointer">Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' onChange={(event) => HandleChange('email', event.target.value)} type="email" placeholder="  Enter your email" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className="cursor-pointer">Password</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' onChange={(event) => HandleChange('password', event.target.value)} type="password" placeholder="  Enter your password" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className="cursor-pointer">Confirm Password</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' value={cPassword} onChange={(event) => HandleChange('cpassword', event.target.value)} type="password" placeholder="  Confirm your password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center underline'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <Link to='/login' className="cursor-pointer underline">Already have a account?</Link>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={Signup}>SIGNUP</button>
                </div>
            </div>
        </div>

    )
}
export default Signup;