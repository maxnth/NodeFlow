import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentReplaceOriginalNode = new NodeBuilder(
  'OcrdSegmentReplaceOriginal'
)
  .setName('ocrd-segment-replace-original')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'TextOption', '')
  .addOption('feature_selector', 'TextOption', '')
  .addOption('transform_coordinates', 'CheckboxOption', true)
  .build();
