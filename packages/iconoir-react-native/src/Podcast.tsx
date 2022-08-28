import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgPodcast(
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
        d="M6 19a9.985 9.985 0 01-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.985 9.985 0 01-4 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 19a9.985 9.985 0 01-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.985 9.985 0 01-4 8M7.528 15a6 6 0 118.944 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13a2 2 0 100-4 2 2 0 000 4zM10.076 16.283l.815-.543a2 2 0 012.218 0l.815.543a2 2 0 01.863 1.993l-.509 3.053A2 2 0 0112.306 23h-.612a2 2 0 01-1.973-1.671l-.508-3.053a2 2 0 01.863-1.993z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPodcast);
export default ForwardRef;
