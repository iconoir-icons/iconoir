import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPageFlip(
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
        d="M12 11h5M12 7h5M8 15V3.6a.6.6 0 01.6-.6h11.8a.6.6 0 01.6.6V17a4 4 0 01-4 4v0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 15h7.4c.331 0 .603.267.63.597C13.153 17.115 13.78 21 17 21H6a3 3 0 01-3-3v-1a2 2 0 012-2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPageFlip);
export default ForwardRef;
