import { Icon } from '../components/IconList';
import csv from 'csvtojson';
import { incompatibleNames } from '../../constants';
import Case from 'case';
import * as AllIcons from 'iconoir-react';

const ICONS_PATH = 'icons.csv';
const TAG_SEPARATOR = '|';

const typedIncompatibleNames = incompatibleNames as Record<string, string>;

function getIconComponentName(filename: string) {
  const dstFileName =
    filename in typedIncompatibleNames
      ? typedIncompatibleNames[filename]
      : filename;
  return Case.pascal(dstFileName);
}

export async function getAllIcons(): Promise<Icon[]> {
  const rows = await csv().fromFile(ICONS_PATH);
  return rows.map<Icon>((row) => {
    const iconComponentName = getIconComponentName(row.filename);
    // Convert to lowercase to solve for differences in how the names are calculated.
    const matchingKey = Object.keys(AllIcons).find(
      (k) =>
        k.toLowerCase() === iconComponentName.toLowerCase() ||
        k.toLowerCase() === `svg${iconComponentName.toLowerCase()}`
    );
    if (!matchingKey)
      throw new Error(
        `Cannot find icon '${iconComponentName}' in iconoir-react.`
      );
    return {
      filename: row.filename,
      category: row.category,
      tags:
        row.tags?.split(TAG_SEPARATOR).map((item: string) => item.trim()) || [],
      iconComponentName: matchingKey,
    };
  });
}
