import * as React from "react"
interface LogoProps extends React.SVGProps<SVGSVGElement> {}

const Logo: React.FC<LogoProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="el2SKJPW3yp1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 600 600"
        {...props}
    >
        <text
            fill="#84a98c"
            strokeWidth={0}
            dx={0}
            dy={0}
            fontFamily='"el2SKJPW3yp1:::Raleway"'
            fontSize={30}
            fontWeight={700}
            opacity={0.75}
            transform="matrix(1.99876 0 0 1.99876 72.259 524.77)"
        >
            <tspan y={0} />
        </text>
        <text
            fill="#2f3e46"
            strokeWidth={0}
            dx={0}
            dy={0}
            fontFamily='"el2SKJPW3yp1:::Raleway"'
            fontSize={30}
            fontWeight={700}
            opacity={0.75}
            transform="matrix(1.99876 0 0 1.99876 352.147 523.217)"
        >
            <tspan y={0} />
        </text>
        <g transform="translate(0 .493)">
            <path
                fill="#2f3e46"
                strokeWidth={1.2}
                d="M35.644 366.824c0-80.806 65.988-161.708 161.603-161.611 97.249-.097 161.602 80.805 161.602 161.61H35.644Z"
                opacity={0.75}
            />
            <circle
                r={50}
                fill="none"
                stroke="#2f3e46"
                strokeWidth={15}
                opacity={0.75}
                transform="matrix(1.36955 0 0 1.36955 197.247 111.092)"
            />
        </g>
        <g transform="translate(7.693 -1.122)">
            <path
                fill="#84a98c"
                strokeWidth={1.2}
                d="M564.356 296.103c0 80.805-65.988 161.707-161.603 161.611-97.249.096-161.602-80.806-161.602-161.611h323.205Z"
                opacity={0.75}
            />
            <circle
                r={50}
                fill="none"
                stroke="#84a98c"
                strokeWidth={15}
                opacity={0.75}
                transform="matrix(1.36955 0 0 1.36955 402.753 205.213)"
            />
        </g>
        <style>
    </style>
  </svg>
)
export default Logo
