import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgVoicePhone(
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
        d="M8 17.01l.01-.011M8 5H3.6a.6.6 0 00-.6.6v14.8a.6.6 0 00.6.6h8.8a.6.6 0 00.6-.6V16M16 3v10M13 5v6M22 7v2M10 7v2M19 4v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVoicePhone);
export default ForwardRef;
