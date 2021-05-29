import * as React from 'react';

function SvgChurchAlt(
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
        d="M7.576 7.424a.6.6 0 01.848 0l3.4 3.4a.6.6 0 01.176.425V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V11.249a.6.6 0 01.176-.425l3.4-3.4zM8 7V4m0-2v2m0 0H6m2 0h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22h7.4a.6.6 0 00.6-.6V10.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0016.252 7H8M8 22v-5M8 13.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgChurchAlt);
export default ForwardRef;
