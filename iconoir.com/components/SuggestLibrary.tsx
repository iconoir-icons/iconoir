import { ArrowUpRight } from 'iconoir-react';
import { SUGGEST_LIBRARY_LINK } from '../lib/constants';
import { Button } from './Button';
import { Callout } from './Callout';

export function SuggestLibrary() {
  return (
    <Callout
      title="Need another library?"
      action={(
        <Button
          as="a"
          href={SUGGEST_LIBRARY_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Open a request
          <ArrowUpRight />
        </Button>
      )}
    >
      If you would like to use Iconoir on a different library or want to help
      support a new one, open a feature request on GitHub.
    </Callout>
  );
}
