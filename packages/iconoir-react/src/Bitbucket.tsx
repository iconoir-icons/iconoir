import * as React from 'react';

function SvgBitbucket(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M20.916 4.674l-1.85 14.8a.6.6 0 01-.596.526H5.53a.6.6 0 01-.596-.526l-1.85-14.8A.6.6 0 013.68 4h16.64a.6.6 0 01.596.674z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.75 7.75l-.938 7.97a.6.6 0 01-.595.53H8.784a.6.6 0 01-.596-.53l-.859-7.3a.6.6 0 01.596-.67h8.825zm0 0h3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBitbucket);
export default ForwardRef;
