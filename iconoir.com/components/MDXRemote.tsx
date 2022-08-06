import React from 'react';
import { MDXRemote as CoreMDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { SuggestLibrary } from './SuggestLibrary';
import { Pre, Body, H1, H2, H3, Code } from './Typography';
import { Table } from './Table';

export function MDXRemote(props: MDXRemoteProps) {
  return (
    <CoreMDXRemote
      {...props}
      components={{
        ...props.components,
        pre: Pre,
        blockquote: Code,
        p: Body,
        h1: H1,
        h2: H2,
        h3: H3,
        table: Table,
        SuggestLibrary,
      }}
    />
  );
}
