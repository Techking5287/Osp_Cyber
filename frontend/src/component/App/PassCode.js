import { Button, Modal, Input, Space, message } from 'antd';
import { useState } from 'react';



const PassCode = () => {
    const [fLetter, setFletter] = useState('');
    const [sLetter, setSletter] = useState('');
    const [tLetter, setTletter] = useState('');
    const [vIdeoflag, setVideoflag] = useState(false);

    const HandleChange = (param1, param2) => {
        if (param1 === "1")
            setFletter(param2)
        else if (param1 === "2")
            setSletter(param2)
        else if (param1 === "3")
            setTletter(param2)
    }

    const Confirm = () => {
        if (!fLetter) {
            message.config({
                top: "60px"
            })
            message.warning("Invaild first letter")
        }

        else if (!sLetter)
            message.warning("Invaild second letter")

        else if (!tLetter)
            message.warning("Invaild third letter")
        else if (fLetter === "A" && sLetter === "B" && tLetter === "C") {
            message.success("success")
            setVideoflag(true);
        }
        else {
            message.warning("Failure, Please input letters correctly again")
        }

    }

    return (
        <>
            <div className="pin-pad-main-container">
                <div className="pin-pad-container grid-cols-4">
                    <Space className='mb-5' direction="vertical">
                        <Input.Password placeholder="Enter first letter" onChange={(event) => HandleChange('1', event.target.value)} />
                        <Input.Password placeholder="Enter second letter" onChange={(event) => HandleChange('2', event.target.value)} />
                        <Input.Password placeholder="Enter third letter" onChange={(event) => HandleChange('3', event.target.value)} />
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
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            type="video/mp4"
                        />
                    </video>
                </Modal>
            </div>
        </>
    )
}
export default PassCode;