import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgRotateCameraRight(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M22.003 3v4.497A.503.503 0 0121.5 8v0c-.2 0-.38-.119-.466-.3A10.001 10.001 0 0012.003 2c-5.186 0-9.45 3.947-9.95 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 16.4V9.394a.6.6 0 01.6-.6h1.173a.6.6 0 00.504-.275l1.446-2.244A.6.6 0 0110.227 6h3.546a.6.6 0 01.504.275l1.446 2.244a.6.6 0 00.504.275H17.4a.6.6 0 01.6.6V16.4a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14a2 2 0 100-4 2 2 0 000 4zM2.05 21v-4.497c0-.278.226-.503.504-.503v0c.2 0 .38.119.466.3a10.001 10.001 0 009.03 5.7c5.186 0 9.45-3.947 9.951-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRotateCameraRight);
export default ForwardRef;
