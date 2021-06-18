import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPin(
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
        d="M11.572 12.5l-7.643 7.57M21.192 8.465a5.657 5.657 0 10-11.313 0 5.657 5.657 0 0011.313 0zM12.903 9.5a2.829 2.829 0 013.808-3.609"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPin);
export default ForwardRef;
