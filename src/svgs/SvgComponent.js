import * as React from "react"

function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

function SvgComponent(props) {


    return (
        <div>
            <svg
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 1.5,
                }}
                {...props}
            >
                <path
                    style={{
                        fill: "url(#a)",
                    }}
                    d="M0 0h1920v1080H0z"
                    transform="matrix(1.05052 0 0 1.18889 -48.5 -147.25)"
                />
                <path className="test"
                    d="m2101 685-527.98-253-528.43 444-883.513-315L-378 846l329.5 583 1922.5 54 227-798Z"
                    style={{
                        fill: "url(#b)",
                        stroke: shadeColor(props.color1, 10),
                        strokeWidth: "2.79px",
                    }}
                    transform="translate(0 -153)"
                />
                <path className="test"
                    d="m2101 685-933.62-145-495.792 217-281.511-307L-378 846l329.5 583 1922.5 54 227-798Z"
                    style={{
                        fill: "url(#c)",
                        stroke: shadeColor(props.color1, 20),
                        strokeWidth: "2.79px",
                    }}
                />
                <path className="test"
                    d="m2101 685-722.2-136.672L1125.38 616 861.5 461.5 497.077 754-378 846l329.5 583 1922.5 54 227-798Z"
                    style={{
                        fill: "url(#d)",
                        stroke: shadeColor(props.color1, 40),
                        strokeWidth: "2.79px",
                    }}
                    transform="translate(0 164.5)"
                />
                <defs>
                    <linearGradient
                        id="b"
                        x1={0}
                        y1={0}
                        x2={1}
                        y2={0}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(2479 0 0 1051 -378 957.5)"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopColor: shadeColor(props.color1, 0),
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: shadeColor(props.color1, 0),
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="c"
                        x1={0}
                        y1={0}
                        x2={1}
                        y2={0}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(2479 0 0 1051 -378 957.5)"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopColor: shadeColor(props.color1, 20),
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: shadeColor(props.color1, 20),
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="d"
                        x1={0}
                        y1={0}
                        x2={1}
                        y2={0}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(2479 0 0 1051 -378 957.5)"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopColor: shadeColor(props.color1, 40),
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: shadeColor(props.color1, 40),
                                stopOpacity: 1,
                            }}
                        />
                    </linearGradient>
                    <radialGradient
                        id="a"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(960 0 0 540 960 540)"
                    >
                        <stop
                            offset={0}
                            style={{
                                stopColor: props.backgroundmaincolor,
                                stopOpacity: 1,
                            }}
                        />
                        <stop
                            offset={1}
                            style={{
                                stopColor: props.backgroundsubcolor,
                                stopOpacity: 1,
                            }}
                        />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}


export default SvgComponent
