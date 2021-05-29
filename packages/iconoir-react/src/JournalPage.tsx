import * as React from 'react';

function SvgJournalPage(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M6 6h8M6 10h12M12 14h6M12 18h6M2 21.4V2.6a.6.6 0 01.6-.6h15.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0122 5.75V21.4a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5.4V2.354a.354.354 0 01.604-.25l3.292 3.292a.353.353 0 01-.25.604H18.6a.6.6 0 01-.6-.6zM6 18v-4h2v4H6z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgJournalPage);
export default ForwardRef;
