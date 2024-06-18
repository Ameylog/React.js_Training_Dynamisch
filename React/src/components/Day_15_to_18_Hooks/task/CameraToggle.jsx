
import React, { useRef, useState } from 'react';
import { LuCameraOff } from "react-icons/lu";
import { LuCamera } from "react-icons/lu";

function CameraToggle() {
    const videoRef = useRef(null);

    const [flag, setFlag] = useState(false);
    const [msg, setMsg] = useState("No preview Data");

    const getVideo = () => {
        setFlag(true);
        setMsg("");

        navigator.mediaDevices
            .getUserMedia({ video: { width: 400, height: 300 }, audio: "true" })
            .then(data => {
                let video = videoRef.current;
                video.srcObject = data;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });


    };

    const stop = (e) => {
        setFlag(false);
        let video = videoRef.current;
        const stream = video?.srcObject;
        const tracks = stream?.getTracks();

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            track?.stop();
        }

        video.srcObject = null;

        setMsg("No preview Data")
    }

    return (
        <div>
            <div>
                <h3>Camera toggle</h3>
                <div style={{ width: "400px", height: "300px", border: "1px solid black", borderRadius: "10px", marginLeft: "40%", marginTop: "5%", }}>

                    {msg ? <p>{msg}</p> : ''}

                    <video ref={videoRef} style={{ height: "100%", width: "100%" }}

                    />


                </div>

                <br /><br />

                {!flag ? <button onClick={getVideo} style={{ zIndex: "1" }}> <LuCameraOff /></button> : <button onClick={stop}
                    style={{ zIndex: "1" }}> <LuCamera /></button>}

            </div>
        </div>
    );
}
export default CameraToggle;
