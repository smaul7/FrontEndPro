import { useState } from "react";
import { toggleColor } from "./utils/colorHelpers";

function ColorButton() {
    const [color, setColor] = useState("ligtblue")

    return (
        <button
        onClick={() => setColor(toggleColor(color))}
        style={{
            backgroundColor: color,
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
        }}
        >Change color</button>
    )
}

export default ColorButton;