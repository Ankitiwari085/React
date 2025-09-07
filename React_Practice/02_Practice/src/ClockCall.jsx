import { useState } from "react";
import Clock from "./Clock";

export default function ClockCall() {
    const [color, setColor] = useState("pink");

    return (
        <>
            <h2>Select the Colour OF the Watch</h2>
            <select id="color" onChange={(event) => { setColor(event.target.value) }} defaultValue={color}>
                <option value="red">RED</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="yellow">Yellow</option>

            </select>
            <Clock color={color} />
        </>
    )
};