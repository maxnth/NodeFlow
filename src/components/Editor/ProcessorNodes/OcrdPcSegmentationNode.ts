import { NodeBuilder } from '@baklavajs/core';

export const OcrdPcSegmentationNode = new NodeBuilder('OcrdPcSegmentation')
  .setName('ocrd-pc-segmentation')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('gpu_allow_growth', 'CheckboxOption', false)
  .addOption('model', 'TextOption', '__DEFAULT__')
  .addOption('overwrite_regions', 'CheckboxOption', true)
  .build();
