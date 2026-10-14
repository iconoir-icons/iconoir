import { ArrowUpRight } from 'iconoir-react';
import { GITHUB_TREE_PREFIX } from '../lib/constants';
import { Button } from './Button';
import { Callout } from './Callout';

export interface ReadOnGitHubProps {
  path: string;
  resource?: string;
}

export function ReadOnGitHub({
  path,
  resource = 'our documentation',
}: ReadOnGitHubProps) {
  return (
    <Callout
      title="Read it on GitHub"
      action={(
        <Button
          as="a"
          href={`${GITHUB_TREE_PREFIX}/${
            path.startsWith('/') ? path.slice(1) : path
          }`}
          target="_blank"
          rel="noreferrer"
        >
          Open on GitHub
          <ArrowUpRight />
        </Button>
      )}
    >
      If you prefer, you can take a look at
      {' '}
      {resource}
      {' '}
      on our GitHub repository.
    </Callout>
  );
}
