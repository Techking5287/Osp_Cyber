import React, { Component, useState, useEffect } from "react";
import "./Pincode.css";

const Pincode = () => {
    const [value, setValue] = useState("");
    const [passCode, setPassCode] = useState("----");
    const pressButton = (number) => {
        let newValue = value + number;
        let newPassCode = getPassCodeFromValue(newValue);
        setValue(newValue);
        setPassCode(newPassCode);

        if (newValue.length === 4) {
            if (newValue === "1204")
                alert("Success")
            performValidation(newValue);
            console.log("14: newValue :::", newValue)
            console.log("15=>>>>>>>>>>>>>>>>>>\n", performValidation(newValue));
            clear();
        }
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
                        {passCode}
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
                {/* <div className="pin-pad-bottom">Iptal</div> */}
            </div>
        </div>
    );
}
export default Pincode;