import { Button, Modal, Input, Space, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const B3 = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(-1); // This will go back to the previous page in the history
    };

    return (
        <>
            <div className="pin-pad-main-container">
                <Link to="/openrunusb">
                    <Button type="primary">Open and run USB</Button>
                </Link>
                <Link to="/explore">
                    <Button type="primary">Explore files</Button>
                </Link>
                <Button onClick={handleButtonClick} type="primary">Close and continue</Button>

            </div>
        </>
    )
}
export default B3;