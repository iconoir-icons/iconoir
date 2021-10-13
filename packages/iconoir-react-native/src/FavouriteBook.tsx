import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFavouriteBook(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M16 8.78a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 7.28l.106-.107A2.276 2.276 0 0116 8.78z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <Path d="M6 17h14M6 21h14" stroke="currentColor" strokeLinecap="round" />
      <Path
        d="M6 21a2 2 0 110-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFavouriteBook);
export default ForwardRef;
