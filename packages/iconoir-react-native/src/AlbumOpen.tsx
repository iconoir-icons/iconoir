import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAlbumOpen(
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
        d="M15 2.2c4.564.926 8 4.962 8 9.8 0 4.838-3.436 8.873-8 9.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 9c1.141.284 2 1.519 2 3s-.859 2.716-2 3M1 2h10v20H1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M4 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor" />
      <Path
        d="M4 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0V7.6a.6.6 0 01.6-.6H7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAlbumOpen);
export default ForwardRef;
