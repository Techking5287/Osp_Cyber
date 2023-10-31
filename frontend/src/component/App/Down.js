import { Button, Modal, Input, Space, message } from 'antd';
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Timer from './Timer';

const Down = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [pAss, setPass] = useState('')
    const [vIdeoflag, setVideoflag] = useState(false);
    const [timerflag, setTimerflag] = useState(false);
    const [pAssflag, setPassflag] = useState(false);

    const onDownload = () => {
        setVideoflag(true);
        setTimerflag(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const HandleChange = (param) => {
        setPass(param)
    }

    const ConfirmPassword = async () => {
        if (pAssflag === true) {
            setVideoflag(false)
        }
        else {
            if (pAss === "Lanzarote23") {
                message.success("Success")
                // document.getElementById("down").click();
                setPassflag(true);
            }
            else if (pAss !== "Lanzarote23") {
                message.config({
                    top: "60px"
                })
                message.warning("Password is not correct!")
            }
        }
    }

    useEffect(() => {
        const handleVideoEnded = () => {
            // navigate("/email");
        };

        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.addEventListener("ended", handleVideoEnded);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener("ended", handleVideoEnded);
            }
        };
    }, [navigate]);

    const MoveEmail = () => {
        // navigate("/email");
    }

    return (
        <>
            <Timer />
            <div className="pin-pad-main-container h-[85vh] text-black" style={{ backgroundColor: 'white' }}>
                <Modal
                    title="..."
                    centered
                    okButtonProps={{ style: { backgroundColor: 'black' } }}
                    cancelButtonProps={{ style: { backgroundColor: 'black', color: 'white', border: "none" } }}
                    open={vIdeoflag}
                    onOk={ConfirmPassword}
                    onCancel={() => setVideoflag(false)}
                >
                    {pAssflag ? (
                        <video className="text-center" autoPlay ref={videoRef} id="downloaded-video" controls>
                            <source src="http://95.217.36.51/dashboard/Intro1.mp4" type="video/mp4" />
                        </video>
                    ) : (
                        <Space direction="vertical">
                            <Input.Password placeholder="input password" onChange={(event) => HandleChange(event.target.value)} />
                        </Space>
                    )}
                    {/* <a href='http://95.217.36.51:5000/download_intro1' id="down" hidden>down</a> */}
                </Modal>

                <div className='text-center text-black'>
                    <p className='text-3xl mb-3'>CONGRATULATIONS!</p>
                    <h4 className='mb-5'>You've cracked the code on the tablet.</h4>
                    <h4 className='mt-10'>To get more instructions, download the file</h4>
                    <Button type="primary" onClick={onDownload} style={{ backgroundColor: 'black' }} className="mt-5">
                        Click Here to Download the PDF
                    </Button>
                </div>
            </div >
        </>
    )
}

export default Down;
