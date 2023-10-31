import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const LogOut = () => {
        localStorage.removeItem("user");
        window.location.pathname = "/login"
    }
    return (
        <>
            {/* <!-- navbar goes here --> */}
            <nav class="bg-blue-950 py-1 md:py-3">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">

                        <div class="flex space-x-4 py-2">
                            {/* <!-- logo --> */}
                            <div>
                                <img src="./logo.png" className=" w-11/12" />
                            </div>
                        </div>
                        {localStorage.getItem('user') ? <div class="flex items-center">
                            {/* <button class="mobile-menu-button">
                                <Link to="/email" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300" o >
                                    Email
                                </Link>
                            </button> */}
                            <button class="mobile-menu-button">
                                <Link className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300" onClick={LogOut} >
                                    LogOut
                                </Link>
                            </button>
                        </div> : <div class="flex items-center">
                            <button class="mobile-menu-button">
                                <Link to="/login" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300" >
                                    Login
                                </Link>
                            </button>
                            {/* <button class="mobile-menu-button">
                                <Link to="/signup" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                                    Signup
                                </Link>
                            </button> */}
                            {/* <Link to="/pincode" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Pincode
                        </Link>
                        <Link to="/qrcode" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            QR Code
                        </Link> */}
                        </div>}
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Header;