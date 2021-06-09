import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgVoiceOk(
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
        d="M12 3v16M8 8v6M20 9v4M4 9v4M16 6v9M15.5 19.5l2 2 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVoiceOk);
export default ForwardRef;
