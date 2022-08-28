import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function Svg3DSelectEdge(
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
        d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524zM12 21v-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 11v10a.5.5 0 01-1 0V11a.5.5 0 011 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(Svg3DSelectEdge);
export default ForwardRef;
