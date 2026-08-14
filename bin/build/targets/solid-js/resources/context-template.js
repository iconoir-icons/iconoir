function template() {
  return `
import { useContext, createContext, type JSX, splitProps, mergeProps } from "solid-js";

type IconoirContextValue = Partial<JSX.SvgSVGAttributes<SVGSVGElement>>;

export const IconoirContext = createContext<IconoirContextValue>({});

export interface IconoirProviderProps extends Partial<JSX.SvgSVGAttributes<SVGSVGElement>> {
  children: JSX.Element | JSX.Element[];
}

const defaults = {
  color: 'currentColor',
  width: '1.5em',
  height: '1.5em',
  'stroke-width': 1.5,
};

export function IconoirProvider(props: IconoirProviderProps) {
  const [_, iconProps] = splitProps(props, ['children']);
  const mergedProps = mergeProps(defaults, iconProps || {});
  return (
    <IconoirContext.Provider value={mergedProps}>
      {props.children}
    </IconoirContext.Provider>
  );
}

export function useIconoir() {
  return useContext(IconoirContext);
}
`;
}

export default template;
