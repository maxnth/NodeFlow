import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentFromCocoNode = new NodeBuilder('OcrdSegmentFromCoco')
  .setName('ocrd-segment-from-coco')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .build();
