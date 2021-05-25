import * as React from 'react';

function SvgDatabaseBackup(
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
        d="M4 6v6s0 3 7 3c.592 0 1.135-.021 1.631-.06M18 6v6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3zM11 21c-7 0-7-3-7-3v-6M22.666 17.667C22.048 16.097 20.634 15 18.99 15c-1.758 0-3.252 1.255-3.793 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.995 17.667h1.671v0c.185 0 .334-.15.334-.334v-1.888M15.334 20.333C15.952 21.903 17.366 23 19.01 23c1.758 0 3.252-1.255 3.793-3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.005 20.333h-1.671v0a.334.334 0 00-.334.334v1.888"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDatabaseBackup);
export default ForwardRef;
