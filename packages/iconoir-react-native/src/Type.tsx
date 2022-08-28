import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgType(
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
        d="M7 16.248a.6.6 0 00-.176-.424l-3.648-3.648A.6.6 0 013 11.75V4a2 2 0 012-2h14a2 2 0 012 2v7.752a.6.6 0 01-.176.424l-3.648 3.648a.6.6 0 00-.176.425V20a2 2 0 01-2 2H9a2 2 0 01-2-2v-3.752z"
        stroke="currentColor"
      />
      <Path
        d="M9.5 11.5l.5-1.1m4.5 1.1l-.5-1.1m0 0L12 6l-2 4.4m4 0h-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgType);
export default ForwardRef;
