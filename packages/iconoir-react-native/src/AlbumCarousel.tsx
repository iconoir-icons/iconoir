import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgAlbumCarousel(
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
        d="M2 19.4V4.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <Path d="M22 6v12" stroke="currentColor" strokeLinecap="round" />
      <Path
        d="M11 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="currentColor"
      />
      <Path
        d="M11 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0V8.6a.6.6 0 01.6-.6H13"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAlbumCarousel);
export default ForwardRef;
