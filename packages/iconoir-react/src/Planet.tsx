import * as React from 'react';

function SvgPlanet(
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
        d="M17.5 6.348c2.297-.538 3.945-.476 4.338.312.73 1.466-3.158 4.89-8.687 7.645-5.528 2.757-10.602 3.802-11.333 2.336-.392-.786.544-2.134 2.349-3.64"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPlanet);
export default ForwardRef;
