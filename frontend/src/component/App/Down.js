import { Button, Modal, Input, Space, message } from 'antd';
import React, { useRef, useState } from "react";
import { useDownloadFile } from "react-downloadfile-hook";
import { Link, useNavigate } from "react-router-dom";
import Timer from './Timer';

const Down = () => {
    const navigate = useNavigate();
    const videoRef = useRef();
    const [pAss, setPass] = useState('')
    const [vIdeoflag, setVideoflag] = useState(false);
    const [timerflag, setTimerflag] = useState(false);
    const [pAssflag, setPassflag] = useState(false);
    const [cPassflag, setCpassflag] = useState(false);
    const downButtonRef = useRef();

    const onDownload = () => {
        setVideoflag(true);
        setTimerflag(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const { linkProps } = useDownloadFile({
        fileName: "Intro1.mp4",
        format: "video/mp4",
        data: "http://95.217.36.51/dashboard/Intro1.mp4",
    });

    const HandleChange = (param) => {
        console.log(param);
        setPass(param)
    }
    const ConfirmPassword = async () => {
        // alert("w")
        if (pAss === "Lanzarote23") {
            message.success("Success")
            document.getElementById("down").click();
            setPassflag(true);
            setCpassflag(true)
            // onDownload();
        }
        else {
            message.config({
                top: "60px"
            })
            message.warning("Password isnot correct!")
        }

    }
    const MoveEmail = () => {
        setVideoflag(false)
        navigate("/email")
    }

    return (
        <>
            <Timer />
            <div className="pin-pad-main-container text-black" style={{ backgroundColor: 'white' }}>
                <Modal
                    title="Enter password"
                    centered
                    okButtonProps={{ style: { backgroundColor: 'black' } }}
                    cancelButtonProps={{ style: { backgroundColor: 'black', color: 'white', border: "none" } }}
                    open={vIdeoflag}
                    onOk={ConfirmPassword}
                    onCancel={MoveEmail}
                >
                    {pAssflag ? <video className="text-center"
                        ref={videoRef} autoPlay
                        id="downloaded-video"
                        controls
                    >
                        <source
                            src="http://95.217.36.51/dashboard/Intro1.mp4"
                            type="video/mp4"
                        />
                    </video> : <Space direction="vertical ">
                        <Input.Password placeholder="input password" onChange={(event) => HandleChange(event.target.value)} />
                    </Space>}
                    <Button id="down" hidden {...linkProps} >down</Button>
                </Modal >
                <div className='text-center text-black'>
                    <p className=' text-3xl mb-3'>CONGRATULATIONS!</p>
                    <h4 className='mb-5'>You've cracked the code on the tablet.</h4>
                    <h4 className='mt-10'>To get more instructions, download the file</h4>
                    <Button type="primary" onClick={onDownload} style={{ backgroundColor: 'black' }} className="mt-5">
                        Click Here to Download the PDF
                    </Button>
                </div>
                <div>
                </div>

            </div>
        </>
    )
}
export default Down;