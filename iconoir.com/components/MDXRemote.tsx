import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote as CoreMDXRemote } from 'next-mdx-remote';
import { Table } from './Table';
import { Body, Code, H1, H2, H3, InlineCode, Li, Pre } from './Typography';

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
        code: InlineCode,
        li: Li,
      }}
    />
  );
}
