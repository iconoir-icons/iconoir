import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgBookmarkEmpty(
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
        d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-5.918-3.805a2 2 0 00-2.164 0L5 21z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBookmarkEmpty);
export default ForwardRef;
