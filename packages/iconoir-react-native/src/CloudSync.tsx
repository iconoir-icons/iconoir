import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCloudSync(
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
        d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607M7.58 19.487l1.768 1.768a4 4 0 005.657 0l.354-.353"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.934 21.962l-.353-2.475 2.474.354-2.12 2.121zM16.298 16.902l-1.768-1.768a4 4 0 00-5.657 0l-.353.353"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.944 14.427l.354 2.475-2.475-.354 2.121-2.121z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSync);
export default ForwardRef;
