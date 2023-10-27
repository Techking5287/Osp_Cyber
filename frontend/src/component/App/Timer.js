
import { useState, useEffect } from "react";
import './timer.css'
import { useSelector, useDispatch } from 'react-redux'
import { InputGameoverauth, InputMinute, InputSeconds } from "../../reducers/InputSlice";
import { useNavigate } from 'react-router-dom';
import { Button, message } from "antd";

const Timer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Gameover, Minute, Seconds } = useSelector((state) => state.InputValue);
    const initMinute = 0;
    const initSeconds = 20;
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(initSeconds)
    const [isStopped, setIsStopped] = useState(false);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (!isStopped) {
                if (localStorage.getItem("seconds") > 0) {
                    // localStorage.getItem("seconds") = localStorage.getItem("seconds") - 1
                    let seconds = parseInt(localStorage.getItem("seconds"));
                    console.log("w: ", seconds);
                    localStorage.setItem("seconds", (seconds - 1).toString());

                    dispatch(InputSeconds(localStorage.getItem("seconds")));
                    // console.log("s: ", localStorage.getItem("seconds"));
                    // console.log(" Minute : ", Minute, Seconds)
                    if (Minute == 0 && Seconds == 5) {
                        // console.log("wwa : ", Seconds)
                        message.config({
                            top: "60px"
                        })
                        message.error("Warning, You don't have much time", 4);

                    }
                }
                else if (localStorage.getItem("seconds") == 0) {
                    if (localStorage.getItem("minutes") == 0) {
                        clearInterval(myInterval)
                    } else {
                        let minutes = parseInt(localStorage.getItem("minutes"));
                        localStorage.setItem("minutes", (minutes - 1).toString());
                        dispatch(InputMinute(localStorage.getItem("minutes")));
                        // setMinutes(minutes - 1)
                        localStorage.setItem("seconds", 59);
                        dispatch(InputSeconds(localStorage.getItem("seconds")));
                        console.log(" Minute : ", Minute, Seconds)
                    }
                }

            }
            if (localStorage.getItem("minutes") == 0 && localStorage.getItem("seconds") == 0) {
                dispatch(InputGameoverauth(false));
                navigate('/risk');
            }
        }, 1000)

        return () => {
            clearInterval(myInterval)
        }
    }, [Minute, Seconds, isStopped, dispatch, navigate])
    useEffect(() => {
        if (localStorage.getItem("minutes") == 0 && localStorage.getItem("seconds") == 0) {
            dispatch(InputGameoverauth(false));
            navigate('/risk');
        }
    }, [])
    const handleStop = () => {
        setIsStopped(true);
    }

    const handleContinue = () => {
        setIsStopped(false);
    }
    return (
        <div className='wrapper ml-10 -mt-4'>
            <h1 className=" timer text-rose-800" >{Minute < 10 ? `0${Minute}` : Minute}:{Seconds < 10 ? `0${Seconds}` : Seconds}</h1>
            {isStopped ? (
                <Button type="primary" style={{ backgroundColor: 'blue' }} className="justify-center" onClick={handleContinue}>Continue</Button>
            ) : (
                <Button type="primary" style={{ backgroundColor: 'blue' }} className="justify-center" onClick={handleStop}>Stop</Button>
            )}
        </div>
    )
}

export default Timer;