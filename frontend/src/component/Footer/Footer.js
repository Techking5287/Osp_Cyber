import { Link } from "react-router-dom";

const Footer = () => {
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
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Footer;