import { Button, Modal, Input, Space, message } from 'antd';
import { useState } from 'react';
import Timer from './Timer';


const PassCode = () => {
    const [pAss, setPass] = useState('');
    const [sLetter, setSletter] = useState('');
    const [tLetter, setTletter] = useState('');
    const [vIdeoflag, setVideoflag] = useState(false);

    const HandleChange = (param) => {
        setPass(param)
    }

    const Confirm = () => {
        if (!pAss) {
            message.config({
                top: "60px"
            })
            message.warning("Invaild password")
        }

        else if (pAss === "ABC") {
            message.success("Success")
            setVideoflag(true);
        }
        else {
            message.warning("Failure, Please input password correctly again")
        }

    }

    return (
        <>
            <Timer />
            <div className="pin-pad-main-container">
                <div className="pin-pad-container grid-cols-4">
                    <Space className='mb-5' direction="vertical">
                        <Input.Password placeholder="Enter password" onChange={(event) => HandleChange(event.target.value)} />
                    </Space>
                    <Button type="primary" onClick={Confirm}>Confirm</Button>
                </div>
                <Modal
                    title="Video"
                    centered
                    okButtonProps={{ style: { backgroundColor: 'black' } }}
                    cancelButtonProps={{ style: { backgroundColor: 'black', color: 'white', border: "none" } }}
                    open={vIdeoflag}
                    onOk={() => setVideoflag(false)}
                    onCancel={() => setVideoflag(false)}
                >
                    <video className="text-center"
                        autoPlay
                        id="downloaded-video"
                        controls
                    >
                        <source
                            src="http://95.217.36.51/Intro2.mp4"
                            type="video/mp4"
                        />
                    </video>
                </Modal>
            </div>
        </>
    )
}
export default PassCode;