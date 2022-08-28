import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgChromecastActive(
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
        d="M2 20.01l.01-.011M15 20h5a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v1M2 16c2 .5 3.5 2 4 4M2 12c4 .5 7.5 4 8 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.002 7.63a.6.6 0 01.6-.6h12.804a.6.6 0 01.6.6v8.832a.6.6 0 01-.6.6H13.44a.617.617 0 01-.556-.355c-.422-.892-1.622-3.26-3.07-4.707-1.42-1.419-3.572-2.444-4.435-2.82a.624.624 0 01-.378-.569v-.98z"
        fill="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgChromecastActive);
export default ForwardRef;
