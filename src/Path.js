import React, { useEffect, useState } from "react";
import Style from "./Style";

const Path = ({ attributes }) => {
    const { svgPath, strokeColor, mainText, fillColor, strOffset, mainSvg } = attributes;
    const [svgContent, setSvgContent] = useState(null);

    

    useEffect(() => {
        if (mainSvg) {
            fetch(mainSvg)
                .then((response) => response.text())
                .then((svgContent) => {
                    setSvgContent(svgContent);
                })
                .catch((error) => {
                    console.error("Error fetching SVG:", error);
                });
        }
    }, [mainSvg]);

    return (
        <>
            <Style attributes={attributes} />
            <div data-text={mainText} data-url={mainSvg} data-link-url="">
                {svgContent && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="84.4988" viewBox="0 0 250 84.4988">
                        {/* Include the dynamically loaded SVG content here */}
                        <g dangerouslySetInnerHTML={{ __html: svgContent }} />
                        {/* Render the path with stroke and fill */}
                        <path d={svgPath} id="e-path-f73d05e" stroke={strokeColor} fill={fillColor}></path>
                        {/* Render the text */}
                        <text x="50%" y="50%">
                            <textPath id="e-text-path-f73d05e" href="#e-path-f73d05e" startOffset={`${strOffset}%`}>
                                {mainText}
                            </textPath>
                        </text>
                    </svg>
                )}
            </div>
        </>
    );
};

export default Path;
