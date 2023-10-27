import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const LogOut = () => {
        localStorage.removeItem("user");
        window.location.pathname = "/login"
    }
    return (
        <>
            <nav className="bg-blue-950 py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className=" text-center ml-10">
                        <img src="./logo.png" />
                    </div>
                    {localStorage.getItem('user') ? 
                    <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <Link className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300" onClick={LogOut} >
                            LogOut
                        </Link>
                    </div> :
                    <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <Link to="/login" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300" >
                            Login
                        </Link>
                        <Link to="/signup" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Signup
                        </Link>
                        {/* <Link to="/pincode" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Pincode
                        </Link>
                        <Link to="/qrcode" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            QR Code
                        </Link> */}
                    </div>}

                </div>
            </nav>
        </>
    )
}
export default Header;