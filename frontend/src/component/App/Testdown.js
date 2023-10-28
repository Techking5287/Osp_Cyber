import React, { useState } from 'react';
import axios from 'axios';

const Testdown = () => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        alert("S");
        axios.get(`https://cors-anywhere.herokuapp.com/${inputValue}`)
            .then(response => {
                alert("S");
                // console.log(response)

                // const data = response.data;
                // const parser = new DOMParser();
                // const htmlDocument = parser.parseFromString(response.data, "text/html");

                // const videoLink = data.querySelector('meta[property="og:video"]')?.content;
                // const imageLink = data.querySelector('meta[property="og:image"]')?.content;

                // if (videoLink) {
                //     createDownloadLink(videoLink, "video.mp4");
                // } else if (imageLink) {
                //     createDownloadLink(imageLink, "img.png");
                // } else {
                //     console.error("No video or image found in the response");
                // }
                console.log(response);

                const parser = new DOMParser();
                const htmlDocument = parser.parseFromString(response.data, "text/html");
                console.log("htmlDocument : ", htmlDocument)
                const videoLink = htmlDocument.querySelector('meta[property="og:video"]')?.content;
                const imageLink = htmlDocument.querySelector('meta[property="og:image"]')?.content;
                console.log("videoLink : ", videoLink, imageLink)

                if (videoLink) {
                    console.log(videoLink)
                    return;
                    createDownloadLink(videoLink, "video.mp4");
                } else if (imageLink) {
                    createDownloadLink(imageLink, "img.png");
                } else {
                    console.error("No video or image found in the response");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    const createDownloadLink = (url, fileName) => {
        console.log("SS")
        alert("SS")
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <input type="text" className='text-black' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>Download</button>
        </div>
    );
};

export default Testdown;