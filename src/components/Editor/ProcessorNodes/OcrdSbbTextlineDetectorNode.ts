import { NodeBuilder } from '@baklavajs/core';

export const OcrdSbbTextlineDetectorNode = new NodeBuilder(
  'OcrdSbbTextlineDetector'
)
  .setName('ocrd-sbb-textline-detector')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'TextOption', 'undefined')
  .build();
