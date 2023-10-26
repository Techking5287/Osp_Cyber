import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Signup from "./component/App/User/Signup";
import Login from "./component/App/User/Login";
import Pincode from "./component/App/User/Pincode";
import Email from "./component/App/Email";
import PassCode from "./component/App/PassCode";
import Explore from "./component/App/Option/Explore"
import ORusb from "./component/App/Option/ORusb"
import B3 from "./component/App/Option/B3";
import Down from "./component/App/Down";
import QRCode from "./component/App/QRCode";


const ARoute = () => {

    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pincode" element={<Pincode />} />
                <Route path="/email" element={<Email />} />
                <Route path="/passcode" element={<PassCode />} />
                <Route path="/b3" element={<B3 />} />
                <Route path="/openrunusb" element={<ORusb />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/down" element={<Down />} />
                <Route path="/qrcode" element={<QRCode />} />

            </Routes>
            <Footer />
        </>
    )
}
export default ARoute;