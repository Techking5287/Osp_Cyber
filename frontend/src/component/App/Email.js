import { Button, Modal, Input, Space, message } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import Timer from './Timer';


const Email = () => {
    const navigate = useNavigate();
    const [pAssflag, setPassflag] = useState(false);
    const [rEply, setReply] = useState("");
    const [rEplyflag, setReplyflag] = useState(false);
    const HandleChange = (event) => {
        setReply(event);
    }
    const LinkB3 = (param) => {
        if (param === "reply") {
            setReplyflag(true)
            setPassflag(true);
            // message.warning("Enter your three word passcode here.")
        }
        else if (param === "report") {
            message.success("Thanks for reporting this message.\nYou’ll find what you need if you examine the dark web")
            setTimeout(function () {
                navigate("/passcode");
            }, 20000);
        }
    }
    const ConfirmPassword = () => {
        if (rEply === "Blackhat") {
            message.config({
                top: "60px",
                duration: 2
            })
            message.success("Thanks for the safe word.\nYou’ll find what you need if you examine the dark web ");
            setTimeout(function () {
                navigate("/passcode");
            }, 20000);
        }
        else {
            message.warning("Invalid password")
        }
    }
    return (
        <>
            {/* <NotificationContainer /> */}
            <Timer />
            <div className="py-5 xl:px-80  md:px-10 sm:px-0 lg:px-10 h-[92vh]" style={{ backgroundColor: 'white' }}>
                <div className=' h-[]  rounded-xl text-center ' style={{ border: "2px solid #4472c4", marginTop: '200px' }}>
                    <div className='bg-[#f2f2f2] row rounded-xl mx-auto py-5 flex justify-between' style={{ border: "2px solid #4472c4" }}>
                        <div className='  w-11/12 lg:pl-10 sm:pl-4 pl-2'>
                            <h4 className='font-bold text-start mb-3 flex text-xs sm:text-xs lg:text-lg text-black'>Subject : Looking for the three word passcode?</h4>
                            <h4 className='text-start font-bold flex text-xs  sm:text-xs lg:text-lg text-black'>From : &nbsp;
                                <svg className='' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="25px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512.009 512.009" space="preserve">
                                    <circle style={{ fill: "#F7B239" }} cx="256.004" cy="256.004" r="256.004" />
                                    <g>
                                        <path style={{ fill: "#E09B2D" }} d="M121.499,390.501C29.407,298.407,22.15,153.608,99.723,53.204   c-8.593,6.638-16.861,13.895-24.743,21.777c-99.974,99.974-99.974,262.065,0,362.038s262.065,99.974,362.038,0   c7.881-7.881,15.138-16.15,21.777-24.743C358.392,489.85,213.593,482.593,121.499,390.501z" />
                                        <path style={{ fill: "#E09B2D" }} d="M256.001,406.199c-15.303,0-30.599-2.085-45.475-6.255c-5.045-1.414-7.989-6.652-6.575-11.699   c1.414-5.045,6.652-7.992,11.698-6.575c26.399,7.401,54.307,7.401,80.706,0c5.049-1.412,10.283,1.53,11.698,6.575   c1.414,5.045-1.53,10.283-6.575,11.698C286.602,404.114,271.299,406.199,256.001,406.199z" />
                                    </g>
                                    <g>
                                        <path style={{ fill: "#4D4D4D" }} d="M384.701,297.195c-70.969,70.966-186.441,70.964-257.402,0c-3.707-3.706-9.714-3.706-13.42,0   c-3.706,3.706-3.706,9.714,0,13.418c39.188,39.187,90.645,58.774,142.121,58.774c51.463,0,102.942-19.596,142.121-58.774   c3.706-3.706,3.706-9.714,0-13.418C394.415,293.49,388.408,293.488,384.701,297.195z" />
                                        <path style={{ fill: "#4D4D4D" }} d="M142.674,231.083c19.358,0,35.107-15.749,35.107-35.107s-15.749-35.107-35.107-35.107   s-35.107,15.749-35.107,35.107S123.316,231.083,142.674,231.083z" />
                                        <path style={{ fill: "#4D4D4D" }} d="M369.326,160.87c-19.358,0-35.107,15.749-35.107,35.107s15.749,35.107,35.107,35.107   s35.107-15.749,35.107-35.107S388.684,160.87,369.326,160.87z" />
                                    </g>
                                </svg>&nbsp;
                                Cyber Security Team</h4>
                        </div>

                        <div className='flex justify-end gap-4 lg:px-12 sm:px-1 px-2 md:mt-3 sm:mt-3 mt-3 lg:mt-5'>
                            <Button className='text-xs sm:text-xs lg:text-lg bg-[#4472c4]' type="primary" onClick={() => LinkB3('reply')}>Reply</Button>
                            <Button className='text-xs sm:text-xs lg:text-lg bg-[#4472c4]' type="primary" onClick={() => LinkB3('report')}>Report Phishing</Button>
                        </div>
                    </div>
                    <p className='p-4 text-black'>
                        <h4 className='mb-5 text-left'>
                            Hello
                        </h4>
                        <h4 className='mb-5 text-left'>
                            If you want to find the three word passcode and save the data, reply to this message with your safe word
                        </h4>
                        <h4 className='text-left'>
                            Thanks
                        </h4>
                    </p>
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
        </>

    )
}
export default Email;