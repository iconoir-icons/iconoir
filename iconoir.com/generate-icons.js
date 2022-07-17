const fs = require('fs');
const path = require('path');

const previewPath = process.argv[2];
const resultPath = 'icons.csv';
const categoryMap = {
  actions: 'Actions',
  activities: 'Activities',
  analytics: 'Analytics',
  animations: 'Animations',
  audio: 'Audio',
  buildings: 'Buildings',
  clothing: 'Clothing',
  cloud: 'Cloud',
  communication: 'Communication',
  'communication-1': 'Communication',
  connectivity: 'Connectivity',
  database: 'Database',
  designtools: 'Design Tools',
  development: 'Development',
  devices: 'Devices',
  docs: 'Docs',
  editor: 'Editor',
  '3deditor': '3D Editor',
  emojis: 'Emojis',
  finance: 'Finance',
  food: 'Food',
  gaming: 'Gaming',
  gestures: 'Gestures',
  git: 'Git',
  health: 'Health',
  home: 'Home',
  identity: 'Identity',
  layout: 'Layout',
  maps: 'Maps',
  music: 'Music',
  nature: 'Nature',
  navigation: 'Navigation',
  organization: 'Organization',
  other: 'Other',
  photosvideos: 'Photos and Videos',
  security: 'Security',
  shapes: 'Shapes',
  shopping: 'Shopping',
  science: 'Science',
  social: 'Social',
  system: 'System',
  transport: 'Transport',
  users: 'Users',
  weather: 'Weather',
};

const allIcons = fs.readdirSync(previewPath);
const resultLines = ['filename,category,tags'];
for (const filename of allIcons) {
  const [icon, category] = path
    .basename(filename)
    .replace(path.extname(filename), '')
    .split('@');
  if (!icon || !category) {
    console.error('invalid filename %s', filename);
    process.exit(1);
  }
  const mappedCategory = categoryMap[category];
  if (!mappedCategory) {
    console.error('category %s does not exist', category);
    process.exit(1);
  }
  resultLines.push(`"${icon}","${mappedCategory}",`);
}

console.info('found %d mappings', resultLines.length - 1);
fs.writeFileSync(resultPath, resultLines.join('\n'));
