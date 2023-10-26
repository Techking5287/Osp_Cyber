import { Button, message, Space, Modal } from "antd";
import { Link } from "react-router-dom";


const QRCode = () => {
    const LinkEmail = () => {
        window.location.pathname = "email";
    }
    return (
        <>
            <div className="pin-pad-main-container ">
                <div className="pin-pad-container">
                    {/* <div className=" bg-slate-100 text-center "> */}
                    <svg className="bg-white text-center -ml-3 mb-5" xmlns="http://www.w3.org/2000/svg" width="300px" height="300px" viewBox="0 0 24 24"><path d="M3 9h6V3H3zm1-5h4v4H4zm1 1h2v2H5zm10 4h6V3h-6zm1-5h4v4h-4zm1 1h2v2h-2zM3 21h6v-6H3zm1-5h4v4H4zm1 1h2v2H5zm15 2h1v2h-2v-3h1zm0-3h1v1h-1zm0-1v1h-1v-1zm-10 2h1v4h-1v-4zm-4-7v2H4v-1H3v-1h3zm4-3h1v1h-1zm3-3v2h-1V3h2v1zm-3 0h1v1h-1zm10 8h1v2h-2v-1h1zm-1-2v1h-2v2h-2v-1h1v-2h3zm-7 4h-1v-1h-1v-1h2v2zm6 2h1v1h-1zm2-5v1h-1v-1zm-9 3v1h-1v-1zm6 5h1v2h-2v-2zm-3 0h1v1h-1v1h-2v-1h1v-1zm0-1v-1h2v1zm0-5h1v3h-1v1h-1v1h-1v-2h-1v-1h3v-1h-1v-1zm-9 0v1H4v-1zm12 4h-1v-1h1zm1-2h-2v-1h2zM8 10h1v1H8v1h1v2H8v-1H7v1H6v-2h1v-2zm3 0V8h3v3h-2v-1h1V9h-1v1zm0-4h1v1h-1zm-1 4h1v1h-1zm3-3V6h1v1z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
                    <Button type="primary" onClick={LinkEmail}>Next</Button>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QRCode;