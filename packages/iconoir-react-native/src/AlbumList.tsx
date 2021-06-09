import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAlbumList(
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
        d="M2 17.4V2.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <Path
        d="M8 22h13.4a.6.6 0 00.6-.6V8"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <Path
        d="M11 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="currentColor"
      />
      <Path
        d="M11 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0V6.6a.6.6 0 01.6-.6H13"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAlbumList);
export default ForwardRef;
