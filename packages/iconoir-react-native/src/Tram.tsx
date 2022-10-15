import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgTram(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M15 16.01l.01-.011M9 16.01l.01-.011M13 6h2a5 5 0 015 5v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a5 5 0 015-5h4zm0 0l1-4m0 0h3m-3 0H7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 20l-2 2.5M13.5 20l2 2.5M16.5 20l2 2.5M7.5 20l-2 2.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M9.609 9h4.782A2.609 2.609 0 0117 11.609a.391.391 0 01-.391.391H7.39A.391.391 0 017 11.609 2.609 2.609 0 019.609 9z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgTram);
export default ForwardRef;
