import type { Icon } from '../components/IconList';
import csv from 'csvtojson';
import * as AllIcons from 'iconoir-react';
import { kebabCase, pascalCase } from 'scule';

const ICONS_PATH = 'icons.csv';

function parseTags(raw: string | undefined): string[] {
  if (!raw?.trim()) {
    return [];
  }

  return raw
    .split(/[|,]/)
    .map((item: string) => item.trim())
    .filter(Boolean);
}

export async function getAllIcons(): Promise<Icon[]> {
  const rows = await csv().fromFile(ICONS_PATH);

  const icons: Icon[] = [];

  for (const row of rows) {
    const iconComponentName = pascalCase(row.filename);
    const iconComponentSolidName = pascalCase(`${row.filename}-solid`);

    const iconComponents = Object.keys(AllIcons).filter(
      (icon) => icon === iconComponentName || icon === iconComponentSolidName,
    );

    if (iconComponents.length === 0) {
      throw new Error(
        `Couldn't find icons for ${row.filename} (${iconComponentName}) in 'iconoir-react'.`,
      );
    }

    for (const iconComponent of iconComponents) {
      icons.push({
        filename: kebabCase(iconComponent),
        category: row.category,
        tags: parseTags(row.tags),
        iconComponentName: iconComponent,
      });
    }
  }

  return icons;
}
