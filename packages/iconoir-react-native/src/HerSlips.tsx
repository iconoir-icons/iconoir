import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgHerSlips(
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
        d="M1 4.6a.6.6 0 01.6-.6h20.8a.6.6 0 01.6.6v3.912c0 .284-.199.53-.476.595-1.052.247-3.635.914-5.524 1.893-3.444 1.786-3.93 6.655-3.993 8.382a.637.637 0 01-.627.618h-.76a.637.637 0 01-.627-.618C10.93 17.655 10.443 12.786 7 11c-1.889-.98-4.472-1.646-5.524-1.893A.614.614 0 011 8.512V4.6z"
        stroke="currentColor"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHerSlips);
export default ForwardRef;
