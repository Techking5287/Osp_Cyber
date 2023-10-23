import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <nav class="bg-blue-950 py-2 md:py-4">
                {/* <div className=" text-center">
                    <h4 className="">
                        OSPCYBER
                    </h4>
                </div> */}
                <div class="container px-4 mx-auto md:flex md:items-center">
                    <div className=" text-center">
                        <h4 className="text-white">
                            OSPCYBER
                        </h4>
                    </div>
                    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        {/* <a href="#" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a> */}
                        {/* <Link to="/login" >
                            <a href="#" class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300">Login</a>
                        </Link>
                        <Link to="signup">
                            <a href="#" class="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
                        </Link> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Footer;