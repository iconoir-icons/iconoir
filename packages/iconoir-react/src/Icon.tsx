import * as React from "react";
import * as icons from "./icons";


type IconProps<T extends keyof typeof icons> = React.ComponentProps<
  typeof icons[T]
> & {
  as: T;
};

function Icon<T extends keyof typeof icons>({
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

export default Icon;

