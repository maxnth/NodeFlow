import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentReplacePageNode = new NodeBuilder(
  'OcrdSegmentReplacePage'
)
  .setName('ocrd-segment-replace-page')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('transform_coordinates', 'CheckboxOption', true)
  .build();
