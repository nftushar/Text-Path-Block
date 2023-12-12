/* eslint-disable react/no-children-prop */
import React, { useEffect, useRef } from "react";
import Style from "./Style"; // Make sure to import the Style component
import SVG from 'react-inlinesvg';
import { useState } from '@wordpress/element';

const Path = ({ attributes }) => {
    const { svgPath, strokeColor, cId, mainText, fillColor, strOffset, mainSvg } = attributes;
    // console.log(svgRef);

    const svgRef = useRef(null);
    const divRef = useRef(null);
    const [rendered,setRendered]=useState(false)
    useEffect(() => {
        const svgElement = svgRef.current;
        // const divElement = divRef.current;

        const bbox = svgElement?.getBBox();
        const newHeight = bbox?.height;

        // Update the height of the SVG container dynamically
        svgElement?.setAttribute("height", newHeight);

        // Set the width of the div based on the SVG width
        // divElement.style.width = `${bbox.width}px`;
    }, [svgPath]); // Trigger the effect whenever svgPath changes
    const textPath = <textPath href="#MyPath" startOffset={strOffset || 0}>
        Add Your Curvy Text Here
    </textPath>
    useEffect(()=>{
        const svgFile=document.querySelector('#textSvgPath');
        const svg=svgFile?.querySelector("svg");
        const text=svg?.querySelector("text");
        const textPath=document.createElement("textPath");
        textPath.setAttribute('href','#MyPath');
        textPath.setAttribute("startOffset",`${strOffset || 0}`)
        textPath.innerHTML=mainText;
        text?.appendChild(textPath)
        console.log(svg)
    },[rendered])
    return (
        <>
            <Style attributes={attributes} clientId={cId} />
            <div onClick={()=>setRendered()} ref={divRef} id={`bBlocksPath-${cId}`} className="bBlocksPath">
                <div className="b-text-path" id='textSvgPath'>
                    {/* {svgRef} */}
                    <SVG children="hello" src={mainSvg} width={428} text="hello" height="auto"  >

                    </SVG>

                </div>
            </div >
        </>
    );
};

export default Path;
