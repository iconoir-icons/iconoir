import * as React from 'react';

function SvgPlanetAlt(
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
      <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M19.812 12.99c1.813 1.51 2.755 2.864 2.362 3.651-.731 1.467-5.805.42-11.333-2.336C5.312 11.55 1.423 8.126 2.154 6.66c.392-.786 2.033-.85 4.322-.315"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlanetAlt);
export default ForwardRef;
