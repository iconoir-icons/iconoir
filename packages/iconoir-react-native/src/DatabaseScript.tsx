import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDatabaseScript(
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
        d="M22 14V6a3 3 0 00-3-3H9a3 3 0 00-3 3v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21H6a4 4 0 010-8h12a4 4 0 104 4v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDatabaseScript);
export default ForwardRef;
