import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPageSearch(
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
        d="M20 12V5.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0016.252 2H4.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H11M8 10h8M8 6h4m-4 8h3M20.5 20.5L22 22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 18a3 3 0 106 0 3 3 0 00-6 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 5.4V2.354a.354.354 0 01.604-.25l3.292 3.292a.353.353 0 01-.25.604H16.6a.6.6 0 01-.6-.6z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPageSearch);
export default ForwardRef;
