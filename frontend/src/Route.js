import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Signup from "./component/App/User/Signup";
import Login from "./component/App/User/Login";
import Pincode from "./component/App/User/Pincode";

const ARoute = () => {

    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pincode" element={<Pincode />} />
            </Routes>
            <Footer />
        </>
    )
}
export default ARoute;