import { useState } from "react";
export default function ViewCount(){

    let [viewCount, setViewCount] = useState(0);

    const stylesViewCount = {
        backgroundColor: "blue",
        color: "black",
        fontWeight: "700",
        marginTop: "5",
    };

    function handleClick(){
        console.log("clickeado");
        setViewCount(viewCount + 1);
    }

    return (<div onClick={handleClick} style={stylesViewCount}>
                hiciste {viewCount} click
            </div>
    )
}