import { generateTemplateFilesCommandLine } from 'generate-template-files';

generateTemplateFilesCommandLine([
  {
    option: 'Create Icon Flutter Widget',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './bin/templates/__icon__.dart',
    },
    stringReplacers: ['__icon__'],
    output: {
      path: './packages/iconoir-flutter/lib/src/__icon__(snakeCase).dart',
      pathAndFileNameDefaultCase: '(snakeCase)',
    },
  },
]);
