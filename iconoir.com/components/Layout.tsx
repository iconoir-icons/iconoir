import React from 'react';
import { GA } from './GA';

export interface LayoutProps {}
export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
  return (
    <div>
      <GA />
      {children}
    </div>
  );
}
