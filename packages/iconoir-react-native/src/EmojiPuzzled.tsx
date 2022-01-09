import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgEmojiPuzzled(
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5 15.5s1.5-2 4.5-2 4.5 2 4.5 2M3 4c0-2.754 4-2.754 4 0 0 1.967-2 1.64-2 4M5 11.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 9a.5.5 0 110-1 .5.5 0 010 1zM10.5 9a.5.5 0 110-1 .5.5 0 010 1z"
        fill="#000"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgEmojiPuzzled);
export default ForwardRef;
