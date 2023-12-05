import React, { useEffect, useRef } from "react";
import Style from "./Style"; // Make sure to import the Style component

const Path = ({ attributes }) => {
    const { svgPath, strokeColor, cId, mainText, fillColor, strOffset } = attributes;


    const svgRef = useRef(null);
    const divRef = useRef(null);
    useEffect(() => {
        const svgElement = svgRef.current;
        // const divElement = divRef.current;

        const bbox = svgElement.getBBox();
        const newHeight = bbox.height;

        // Update the height of the SVG container dynamically
        svgElement.setAttribute("height", newHeight);

        // Set the width of the div based on the SVG width
        // divElement.style.width = `${bbox.width}px`;
    }, [svgPath]); // Trigger the effect whenever svgPath changes

    return (
        <>
            <Style attributes={attributes} clientId={cId} />
            <div ref={divRef} id={`bBlocksPath-${cId}`} className="bBlocksPath">
                <div className="b-text-path">
                    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg">
                        <path id="MyPath" fill={fillColor} stroke={strokeColor} d={svgPath} />
                        <text className="text" dy="-10" textAnchor="middle" dominantBaseline="middle">
                            <textPath href="#MyPath" startOffset={strOffset}>
                                {mainText}
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Path;
