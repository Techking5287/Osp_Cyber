
import { useState, useEffect } from "react";
import './timer.css'
import { useSelector, useDispatch } from 'react-redux'
import { InputGameoverauth } from "../../reducers/InputSlice";
import { useNavigate } from 'react-router-dom';
import { Button, message } from "antd";

const Timer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { gameover } = useSelector((state) => state.InputValue);
    const initMinute = 0;
    const initSeconds = 20;
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(initSeconds)
    const [isStopped, setIsStopped] = useState(false);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (!isStopped) {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                } if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1)
                        setSeconds(59)
                    }
                }
                if (minutes === 0 && seconds === 5) {
                    message.config({
                        top: "60px"
                    })
                    message.error("Warning, You don't have much time", 4);
                    // setTimeout(hide, 0.5);
                    // message.warning(`Warning, There are 5s seconds left`)

                }
            }

        }, 1000)
        if (minutes === 0 && seconds === 0) {
            dispatch(InputGameoverauth(false));
            navigate('/risk');
        }
        return () => {
            clearInterval(myInterval)
        }
    }, [minutes, seconds, isStopped, dispatch, navigate])

    const handleStop = () => {
        setIsStopped(true);
    }

    const handleContinue = () => {
        setIsStopped(false);
    }
    return (
        <div className='wrapper ml-10 -mt-4'>
            <h1 className=" text-rose-800" >{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            {isStopped ? (
                <Button type="primary" style={{ backgroundColor: 'blue' }} className="justify-center" onClick={handleContinue}>Continue</Button>
            ) : (
                <Button type="primary" style={{ backgroundColor: 'blue' }} className="justify-center" onClick={handleStop}>Stop</Button>
            )}
        </div>
    )
}

export default Timer;