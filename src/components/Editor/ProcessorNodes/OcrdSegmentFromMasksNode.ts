import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentFromMasksNode = new NodeBuilder('OcrdSegmentFromMasks')
  .setName('ocrd-segment-from-masks')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .build();
