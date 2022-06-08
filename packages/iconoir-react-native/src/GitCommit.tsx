import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgGitCommit(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
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
        d="M12 15a3 3 0 100-6 3 3 0 000 6zM9 12H3M15 12h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGitCommit);
export default ForwardRef;
