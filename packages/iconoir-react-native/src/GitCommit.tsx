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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M12 16a4 4 0 100-8 4 4 0 000 8zM8 12H3M16 12h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgGitCommit);
export default ForwardRef;
