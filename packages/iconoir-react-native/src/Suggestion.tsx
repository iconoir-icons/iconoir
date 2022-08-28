import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgSuggestion(
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
        d="M3 3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v13.8a.6.6 0 01-.6.6h-4.14a.6.6 0 00-.438.189l-3.385 3.597a.6.6 0 01-.874 0l-3.385-3.597A.6.6 0 007.74 18H3.6a.6.6 0 01-.6-.6V3.6z"
        stroke="currentColor"
      />
      <Path
        d="M12 7l1.425 2.575L16 11l-2.575 1.425L12 15l-1.425-2.575L8 11l2.575-1.425L12 7z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSuggestion);
export default ForwardRef;
