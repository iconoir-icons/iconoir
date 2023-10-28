import {
  Check,
  Iconoir,
  IconoirProvider,
  Medal1st,
  Medal1stSolid,
} from 'iconoir-react';
import { AdobeAfterEffects as AdobeAfterEffectsRegular } from 'iconoir-react/regular';
import { AdobeAfterEffects as AdobeAfterEffectsSolid } from 'iconoir-react/solid';

export default function Home() {
  return (
    <>
      <Iconoir />
      <Medal1st color="red" height={36} width={36} />
      <Medal1stSolid />
      <AdobeAfterEffectsRegular color="red" />
      <AdobeAfterEffectsSolid color="green" />

      <IconoirProvider
        iconProps={{
          color: '#1E441E',
          strokeWidth: 1,
          width: '2em',
          height: '2em',
        }}
      >
        <Check />
      </IconoirProvider>
    </>
  );
}
