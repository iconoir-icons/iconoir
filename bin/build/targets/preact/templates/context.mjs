export function esmContext() {
  return `
import { createContext } from "preact";

export const IconoirContext =
  createContext({});

export function IconoirProvider({
  iconProps,
  children
}) {
  return (
    <IconoirContext.Provider value={iconProps || {}}>
      {children}
    </IconoirContext.Provider>
  );
}
`;
}

export function cjsContext() {
  return `
"use strict";

const preact = require("preact");

const IconoirContext =
  preact.createContext({});

function IconoirProvider({
  iconProps,
  children
}) {
  return (
    preact.h(
      IconoirContext.Provider,
      { value: iconProps || {} },
      children
    )
  );
}

exports.IconoirContext = IconoirContext;
exports.IconoirProvider = IconoirProvider;
`;
}

export function dtsContext() {
  return `
import { ComponentChildren, JSX } from "preact";

export type IconoirContextValue =
  Partial<JSX.SVGAttributes<SVGSVGElement>>;

export declare const IconoirContext:
  import("preact").Context<IconoirContextValue>;

export interface IconoirProviderProps {
  iconProps?: IconoirContextValue;
  children: ComponentChildren;
}

export declare function IconoirProvider(
  props: IconoirProviderProps
): JSX.Element;
`;
}
