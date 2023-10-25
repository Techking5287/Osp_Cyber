import { Link } from "react-router-dom";
import Videodown from "../App/Videodown";

const Header = () => {
    return (
        <>
            <nav className="bg-blue-950 py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className=" text-center">
                        <h4 className="text-white">
                            OSPCYBER
                        </h4>
                    </div>
                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <Link to="/login" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300" >
                            Login
                        </Link>
                        <Link to="/signup" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Signup
                        </Link>
                        <Link to="/pincode" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Pincode
                        </Link>
                        <Link to="/email" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                            Email
                        </Link>
                    </div>
                    <Videodown />
                </div>
            </nav>
        </>
    )
}
export default Header;