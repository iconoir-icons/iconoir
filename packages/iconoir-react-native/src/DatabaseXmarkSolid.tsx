import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgDatabaseXmarkSolid(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.008 16.346c-.916.234-2.204.404-4.008.404-3.433 0-4.999-.617-5.69-1.11a.63.63 0 01-.073-.072c-.283-.302-.823-.57-1.237-.568a.75.75 0 00-.75.75V18H4c-.75 0-.75.002-.75.002v.035a1.377 1.377 0 00.024.215c.021.128.061.295.136.489.152.39.441.87.977 1.328C5.453 20.983 7.41 21.75 11 21.75c1.589 0 2.858-.15 3.871-.397a2.243 2.243 0 01.66-1.58l.53-.53-.53-.531a2.25 2.25 0 01-.523-2.366z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 9a.75.75 0 00-.75.75V12H4c-.75 0-.75.002-.75.002v.035a1.384 1.384 0 00.024.215c.021.128.061.296.136.489.152.39.441.87.977 1.329 1.066.913 3.023 1.68 6.613 1.68 3.59 0 5.547-.767 6.613-1.68.536-.46.825-.938.977-1.33a2.472 2.472 0 00.156-.648 1.36 1.36 0 00.003-.055v-.02l.001-.01v-.005S18.75 12 18 12h.75V9.75A.75.75 0 0018 9c-.462-.001-.863.285-1.223.573a2.012 2.012 0 01-.088.067c-.69.493-2.256 1.11-5.689 1.11-3.433 0-4.999-.617-5.69-1.11a.634.634 0 01-.073-.071C4.954 9.266 4.414 8.999 4 9z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.387 3.93C5.453 3.018 7.41 2.25 11 2.25c3.59 0 5.547.767 6.613 1.68.536.46.825.939.977 1.33a2.474 2.474 0 01.156.648 1.178 1.178 0 01-.02.344 2.474 2.474 0 01-.136.489c-.152.39-.441.87-.977 1.328C16.547 8.983 14.59 9.75 11 9.75c-3.59 0-5.547-.767-6.613-1.68-.536-.46-.825-.939-.977-1.33a2.478 2.478 0 01-.136-.488 1.436 1.436 0 01-.024-.256c0-.083.01-.166.024-.248.021-.128.061-.295.136-.489.152-.39.441-.87.977-1.328z"
        fill="currentColor"
      />
      <Path
        d="M17.121 21.363l2.122-2.12m2.121-2.122l-2.121 2.121m0 0l-2.122-2.121m2.122 2.121l2.121 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseXmarkSolid);
export default ForwardRef;
