import { NodeBuilder } from '@baklavajs/core';

export const OcrdOcropySegmentNode = new NodeBuilder('OcrdOcropySegment')
  .setName('ocrd-ocropy-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('usegauss', 'CheckboxOption', false)
  .build();
