import { Button, Modal, Input, Space, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const Email = () => {
    const [rEply, setReply] = useState("");
    const [rEplyflag, setReplyflag] = useState(false);
    const HandleChange = (event) => {
        setReply(event);
    }
    const LinkB3 = (param) => {
        if (param === "reply") {
            setReplyflag(true)
        }
        else if (param === "report") {
            window.location.pathname = "/passcode";
        }
    }
    const ConfirmPassword = () => {
        if (rEply === "Blackhat") {
            message.config({
                top: "60px"
            })
            message.success("Success");
            window.location.pathname = "/passcode";
        }
        else {

            message.warning("Invaild password")
        }
    }


    return (
        <div className="pin-pad-main-container">
            <div className="pin-pad-container">
                <h1 className='text-center'>Developing now...</h1> <br />
                <div className='flex container justify-center'>
                    <Button type="primary" onClick={() => LinkB3('reply')}>Reply</Button>
                    <Button type="primary" onClick={() => LinkB3('report')}>Report</Button>
                </div>
            </div>
            <Modal
                title="Enter password"
                centered
                okButtonProps={{ style: { backgroundColor: 'black' } }}
                cancelButtonProps={{ style: { backgroundColor: 'black', color: 'white', border: "none" } }}
                open={rEplyflag}
                onOk={ConfirmPassword}
                onCancel={() => setReplyflag(false)}
            >
                <Space direction="vertical">
                    <Input.Password placeholder="input password" onChange={(event) => HandleChange(event.target.value)} />
                </Space>
            </Modal >
        </div>
    )
}
export default Email;