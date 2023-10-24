import React, { Component, useState, useEffect } from "react";
import { Button, message, Space } from "antd";
import "./Pincode.css";

const Pincode = () => {
    const [value, setValue] = useState("");
    const [fLag, setFlag] = useState(true);
    const [cOunter, setCounter] = useState(0);
    const [passCode, setPassCode] = useState("----");
    const pressButton = (number) => {
        if (cOunter === 3) {
            message.config({
                top: "60px",
                duration: 2
            })
            message.success("Please wait for 5s");
            setFlag(false);
            setTimeout(timeSetCounter, 5000);
        }
        else {
            let newValue = value + number;
            let newPassCode = getPassCodeFromValue(newValue);
            setValue(newValue);
            setPassCode(newPassCode);
            if (newValue.length === 4) {
                setCounter(cOunter + 1);
                if (newValue === "1204")
                    message.success("Success")
                performValidation(newValue);
                console.log("14: newValue :::", newValue)
                clear();
                console.log("ww", cOunter)

            }
        }
    };

    const timeSetCounter = () => {
        console.log("ssss")
        setFlag(true);
        setCounter(0);
        // setTimeout(console.log("ww,34"), 30000);
    };

    const getPassCodeFromValue = (val) => {
        let res = "";
        for (let i = 0; i < val.length; i++) {
            res += "*";
        }
        while (res.length < 4) {
            res += "-";
        }
        return res;
    };

    const performValidation = (value) => {
        console.log("validating " + value + " ...");
    };
    const clear = () => {
        setValue("");
        setPassCode(getPassCodeFromValue(""));
    };
    const handleKeyUp = (event) => {
        switch (event.keyCode) {
            case 48:
                pressButton("0");
                break;
            case 49:
                pressButton("1");
                break;
            case 50:
                pressButton("2");
                break;
            case 51:
                pressButton("3");
                break;
            case 52:
                pressButton("4");
                break;
            case 53:
                pressButton("5");
                break;
            case 54:
                pressButton("6");
                break;
            case 55:
                pressButton("7");
                break;
            case 56:
                pressButton("8");
                break;
            case 57:
                pressButton("9");
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        document.addEventListener("keyup", handleKeyUp);
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    return (
        <div className="pin-pad-main-container">
            <div className="pin-pad-container">
                <div className="pin-pad-top">
                    {/* <div>Sifreyi Giriniz</div> */}
                    <div className="pin-pad-circle-container text-center">
                        {fLag ? passCode : ""}
                    </div>
                </div>
                <div className="pin-pad-middle">
                    <div class="pin-pad-number-container">
                        <div className="pin-pad-number-row">
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("1");
                                }}
                            >
                                1
                            </div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("2");
                                }}
                            >
                                2
                            </div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("3");
                                }}
                            >
                                3
                            </div>
                        </div>
                        <div className="pin-pad-number-row">
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("4");
                                }}
                            >
                                4
                            </div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("5");
                                }}
                            >
                                5
                            </div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("6");
                                }}
                            >
                                6
                            </div>
                        </div>
                        <div className="pin-pad-number-row">
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("7");
                                }}
                            >
                                7
                            </div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("8");
                                }}
                            >
                                8
                            </div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("9");
                                }}
                            >
                                9
                            </div>
                        </div>
                        <div className="pin-pad-number-row">
                            <div className="pin-pad-number-cell pin-pad-hide"></div>
                            <div
                                className="pin-pad-number-cell"
                                onClick={() => {
                                    pressButton("0");
                                }}
                            >
                                0
                            </div>
                            <div className="pin-pad-number-cell pin-pad-hide"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pincode;