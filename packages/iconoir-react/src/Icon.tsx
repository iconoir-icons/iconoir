import * as React from "react";
import * as icons from "./index";

type Icons = Omit<typeof icons, "IconoirProvider"| "IconoirContext"| "IconoirContextValue" | "Icon">

type IconProps<T extends keyof Icons> = React.ComponentProps<
  typeof icons[T]
> & {
  as: T;
};

export function Icon<T extends keyof Icons>({
  as,
  ...props
}: IconProps<T>) {
  const IconComponent = icons[as] as React.ComponentType<
    Omit<IconProps<T>, "as">
  >;

  if(!IconComponent){ 
    return null;
  }
  return <IconComponent {...props} />;
}


