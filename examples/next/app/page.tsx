import { Iconoir, Medal1st, Medal1stSolid } from 'iconoir-react';
import { AdobeAfterEffects as AdobeAfterEffectsRegular } from 'iconoir-react/regular';
import { AdobeAfterEffects as AdobeAfterEffectsSolid } from 'iconoir-react/solid';

export default function Home() {
  return (
    <>
      <Iconoir />
      <Medal1st />
      <Medal1stSolid />
      <AdobeAfterEffectsRegular color="red" />
      <AdobeAfterEffectsSolid color="green" />
    </>
  );
}
