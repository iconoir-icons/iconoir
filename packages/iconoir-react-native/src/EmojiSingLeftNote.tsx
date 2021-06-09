import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEmojiSingLeftNote(
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
      <Path d="M2.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" fill="currentColor" />
      <Path
        d="M2.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm0 0V3.6a.6.6 0 01.6-.6H5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M8 17a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.05 13c.501 5.053 4.765 9 9.95 9 5.523 0 10-4.477 10-10S17.523 2 12 2a9.966 9.966 0 00-4 .832"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 9a.5.5 0 100-1 .5.5 0 000 1zM8.5 9a.5.5 0 100-1 .5.5 0 000 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEmojiSingLeftNote);
export default ForwardRef;
