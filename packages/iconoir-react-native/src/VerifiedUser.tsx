import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";

function SvgVerifiedUser(
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
        d="M2 20v-1a7 7 0 017-7v0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.804 12.313a1.618 1.618 0 012.392 0v0c.325.357.79.55 1.272.527v0a1.618 1.618 0 011.692 1.692v0c-.023.481.17.947.526 1.272v0c.705.642.705 1.75 0 2.392v0c-.356.325-.549.79-.526 1.272v0a1.618 1.618 0 01-1.692 1.692v0a1.618 1.618 0 00-1.272.526v0a1.618 1.618 0 01-2.392 0v0a1.618 1.618 0 00-1.272-.526v0a1.618 1.618 0 01-1.692-1.692v0a1.618 1.618 0 00-.527-1.272v0a1.618 1.618 0 010-2.392v0c.357-.325.55-.79.527-1.272v0a1.618 1.618 0 011.692-1.692v0c.481.023.947-.17 1.272-.527v0z"
        stroke="currentColor"
      />
      <Path
        d="M15.364 17l1.09 1.09 2.182-2.18M9 12a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVerifiedUser);
export default ForwardRef;
