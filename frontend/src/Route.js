import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Signup from "./component/App/User/Signup";
import Login from "./component/App/User/Login";

const ARoute = () => {

    return (
        <>
            <Header />
            <Routes >
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </>
    )
}
export default ARoute;