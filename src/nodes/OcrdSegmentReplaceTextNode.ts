import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentReplaceTextNode = new NodeBuilder(
  'OcrdSegmentReplaceText'
)
  .setName('ocrd-segment-replace-text')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('file_glob', 'InputOption', '*.gt.txt')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Insert text from annotations in single-segment text files',
      parameter_descriptions: {
        file_glob:
          'glob expression which expands to file names to match against page IDs and segment IDs in order to be ingested',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
