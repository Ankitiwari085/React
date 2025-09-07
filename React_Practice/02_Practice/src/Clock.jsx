import { useEffect, useState } from "react";

export default function Clock({ color }) {
    const [time, setTime] = useState("");
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, []);
    return (
        <>
            <div style={{
                color: color,
                width: "150px",
                background: "black",
                fontSize: "30px",
                padding: "3px",
                margin: "3px",
                border: "4px solid pink",
                borderRadius: "20px"
            }}>
                {time}
            </div>
        </>
    );
}