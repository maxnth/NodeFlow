import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentReplaceTextNode = new NodeBuilder(
  'OcrdSegmentReplaceText'
)
  .setName('ocrd-segment-replace-text')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('file_glob', 'TextOption', '*.gt.txt')
  .build();
