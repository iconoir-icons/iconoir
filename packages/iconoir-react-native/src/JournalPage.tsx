import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgJournalPage(
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
        d="M6 6h8M6 10h12M12 14h6M12 18h6M2 21.4V2.6a.6.6 0 01.6-.6h15.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0122 5.75V21.4a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 5.4V2.354a.354.354 0 01.604-.25l3.292 3.292a.353.353 0 01-.25.604H18.6a.6.6 0 01-.6-.6zM6 18v-4h2v4H6z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgJournalPage);
export default ForwardRef;
