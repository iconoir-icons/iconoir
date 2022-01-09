import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgOpenBook(
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
        d="M12 21V7a2 2 0 012-2h7.4a.6.6 0 01.6.6v13.114M12 21V7a2 2 0 00-2-2H2.6a.6.6 0 00-.6.6v13.114M14 19h8M10 19H2"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M12 21a2 2 0 012-2M12 21a2 2 0 00-2-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgOpenBook);
export default ForwardRef;
