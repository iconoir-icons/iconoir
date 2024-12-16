function template(native) {
  const useClientDirective = native ? '' : '"use client";';

  const imports = [
    'import React from "react";',
    ...(native ? ['import type { SvgProps } from "react-native-svg";'] : []),
  ].join('\n');

  return `
${useClientDirective}
${imports}

type IconoirContextValue = Partial<${
  native ? 'SvgProps' : 'React.SVGProps<SVGSVGElement>'
}>;

export const IconoirContext = React.createContext<IconoirContextValue>({});

export interface IconoirProviderProps {
  iconProps?: Partial<${
    native ? `Omit<SvgProps, 'children'>` : 'React.SVGProps<SVGSVGElement>'
  }>;
  children: React.ReactNode;
}

export function IconoirProvider({ iconProps, children }: IconoirProviderProps) {
  return (
    <IconoirContext.Provider value={iconProps || {}} children={children} />
  );
}
`;
}

export default template;

export const exports = ['IconoirContext', 'IconoirProvider'];
