import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAddKeyframes(
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
        d="M2 12h3m3 0H5m0 0V9m0 3v3M6.25 6l.245-.28a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634L9.505 18.28a2 2 0 01-3.01 0L6.25 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 19l4.884-5.698a2 2 0 000-2.604L13 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 19l4.884-5.698a2 2 0 000-2.604L17 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAddKeyframes);
export default ForwardRef;
