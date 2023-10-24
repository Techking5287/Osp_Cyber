
import React, { useRef, useState } from "react";
import { useDownloadFile } from "react-downloadfile-hook";
import { Button, Modal, Input, Space, message } from 'antd';
import Down from "./Down";


const Videodown = () => {
    const videoRef = useRef();
    const [pAss, setPass] = useState('')
    const [vIdeoflag, setVideoflag] = useState(false);
    const [pAssflag, setPassflag] = useState(false);
    const [cPassflag, setCpassflag] = useState(false);
    const downButtonRef = useRef();

    const onDownload = () => {
        setVideoflag(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const { linkProps } = useDownloadFile({
        fileName: "mov_bbb.mp4",
        format: "video/mp4",
        data: "https://www.w3schools.com/html/mov_bbb.mp4",
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
            onDownload();
        }
        else {
            message.config({
                top: "60px"
            })
            message.warning("Password isnot correct!")
        }

    }
    return (
        <>
            <Modal
                title="Enter password"
                centered
                okButtonProps={{ style: { backgroundColor: 'black' } }}
                cancelButtonProps={{ style: { backgroundColor: 'black', color: 'white', border: "none" } }}
                open={vIdeoflag}
                onOk={ConfirmPassword}
                onCancel={() => setVideoflag(false)}
            >
                {pAssflag ? <video className="text-center"
                    ref={videoRef}
                    id="downloaded-video"
                    controls
                >
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                </video> : <Space direction="vertical">
                    <Input.Password placeholder="input password" onChange={(event) => HandleChange(event.target.value)} />
                </Space>}
                <Button id="down" hidden {...linkProps} onClick={onDownload}>down</Button>
            </Modal >
            <a
                onClick={onDownload}
                className="p-1 md:mx-2 text-white text-center border border-solid border-transparent rounded hover:bg-sky-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" height="20px" width="30px" version="1.1" id="Capa_1" viewBox="0 0 29.978 29.978" space="preserve" stroke="#FFFFFF">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <g> <path d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z" /> <path d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z" /> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>
                </svg>
            </a>
        </>
    );
};

export default Videodown;