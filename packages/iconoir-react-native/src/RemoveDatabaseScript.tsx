import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRemoveDatabaseScript(
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
        d="M22 14V8.5M6 13V6a3 3 0 013-3h5M18 4h4M12 21H6a4 4 0 010-8h12a4 4 0 104 4v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRemoveDatabaseScript);
export default ForwardRef;
