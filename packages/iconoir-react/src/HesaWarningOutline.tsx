import * as React from 'react';

function SvgHesaWarningOutline(
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
        d="M1.173 12.3a.6.6 0 010-.6l5.154-8.926a.6.6 0 01.52-.3h10.307a.6.6 0 01.52.3l5.153 8.926a.6.6 0 010 .6l-5.154 8.926a.6.6 0 01-.52.3H6.847a.6.6 0 01-.52-.3L1.174 12.3zM12 8v4M12 16.01l.01-.011"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHesaWarningOutline);
export default ForwardRef;
