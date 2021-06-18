import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFileNotFound(
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
        d="M12 8v4M12 16.01l.01-.011M9 3H4v3M4 11v2M20 11v2M15 3h5v3M9 21H4v-3M15 21h5v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFileNotFound);
export default ForwardRef;
