import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBoldSquareSolid(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zm6 4A1.35 1.35 0 008.25 7.6v9.3c0 .746.604 1.35 1.35 1.35H12v-.75.75h.02a2.51 2.51 0 00.158-.007c.1-.006.24-.02.404-.045.326-.05.773-.15 1.23-.36.459-.21.95-.54 1.326-1.057.382-.525.612-1.198.612-2.031 0-.833-.23-1.506-.612-2.031a3.182 3.182 0 00-.877-.815c.17-.151.33-.33.472-.543.326-.488.517-1.105.517-1.861s-.191-1.373-.517-1.861a2.943 2.943 0 00-1.148-.997A3.85 3.85 0 0012 6.25H9.6zm.15 6.5H12.011l.069.004a3.184 3.184 0 011.108.272c.291.133.55.319.737.575.18.249.325.607.325 1.149s-.145.9-.325 1.149a1.837 1.837 0 01-.738.575 3.184 3.184 0 01-1.107.272 1.938 1.938 0 01-.07.004H9.75v-4zm2.247 4H12h-.002zm-.001-5.5H9.75v-3.5h2.249-.001.001c.03.001.48.016.916.233.223.112.424.268.57.488.144.215.265.535.265 1.029 0 .494-.121.814-.265 1.03-.146.219-.347.375-.57.487a2.322 2.322 0 01-.912.233h-.007z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBoldSquareSolid);
export default ForwardRef;
