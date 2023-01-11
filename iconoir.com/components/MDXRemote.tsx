import { MDXRemote as CoreMDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { SuggestLibrary } from './SuggestLibrary';
import { Table } from './Table';
import { Body, Code, H1, H2, H3, Pre } from './Typography';

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
