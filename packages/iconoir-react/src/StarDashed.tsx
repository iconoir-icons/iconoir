import * as React from 'react';

function SvgStarDashed(
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
        d="M13.806 5l-.99-1.996a.911.911 0 00-1.631 0l-.496.998M15.011 7.427l.402.809 1.452.211M19.77 8.87l1.451.21a.902.902 0 01.503 1.542l-1.05 1.017M18.572 13.674l-1.05 1.018.248 1.437M18.266 19.004l.248 1.437c.127.739-.653 1.302-1.32.953l-1.298-.679M10.428 19.5L12 18.678l1.299.679M5.671 19.369l-.185 1.072c-.127.739.653 1.302 1.32.953l.847-.443M6.253 16l.225-1.308-.695-.673M3.699 12l-1.423-1.378a.902.902 0 01.503-1.542l1.11-.161M7 8.467l1.587-.231.804-1.618"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgStarDashed);
export default ForwardRef;
