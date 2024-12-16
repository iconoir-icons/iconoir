import type { IconListCustomizations } from './IconList';
import React from 'react';
import { DEFAULT_CUSTOMIZATIONS } from './IconList';

const CUSTOMIZATIONS_KEY = 'iconoir-customize';

export function useCustomizationPersistence(): [
  IconListCustomizations,
  (customizations: IconListCustomizations) => void,
] {
  const [customizations, _setCustomizations] = React.useState(
    DEFAULT_CUSTOMIZATIONS,
  );

  React.useEffect(() => {
    const localStorageValue = localStorage.getItem(CUSTOMIZATIONS_KEY);

    if (localStorageValue) {
      try {
        const parsedValue = JSON.parse(localStorageValue);
        _setCustomizations({ ...DEFAULT_CUSTOMIZATIONS, ...parsedValue });
      } catch {
        // Do nothing...
      }
    }
  }, []);

  return [
    customizations,
    (newCustomizations) => {
      localStorage.setItem(
        CUSTOMIZATIONS_KEY,
        JSON.stringify(newCustomizations),
      );

      _setCustomizations(newCustomizations);
    },
  ];
}
