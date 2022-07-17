import React from 'react';

export interface LayoutProps {
  children: React.ReactElement;
}
export function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
