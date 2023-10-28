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
import Timer from "./component/App/Timer";
import Risk from "./component/App/Risk";
import { useSelector, useDispatch } from 'react-redux'

const ARoute = () => {
    const { Gameover } = useSelector((state) => state.InputValue);

    return (
        <>
            {Gameover ? <>
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
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/risk" element={<Risk />} />
                </Routes>
                <Footer />
            </> : <>
                <Routes >
                    <Route path="/" element={<Login />} />
                    <Route path="/risk" element={<Risk />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </>}


        </>
    )
}
export default ARoute;