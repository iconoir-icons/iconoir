import * as React from 'react';

function SvgServer(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M6 18.01l.01-.011M6 6.01l.01-.011"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6zM2 21.4v-6.8a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgServer);
export default ForwardRef;
