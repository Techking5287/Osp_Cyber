import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Test1 from "./component/App/test1";
import Test2 from "./component/App/test2";

const ARoute = () => {

    return (
        <>
            <Header />
            <Routes >
                <Route path="/test1" element={<Test1 />} />
                <Route path="/test2" element={<Test2 />} />
            </Routes>

        </>
    )
}
export default ARoute;