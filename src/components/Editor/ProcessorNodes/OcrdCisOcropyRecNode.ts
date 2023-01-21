import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyRecNode = new NodeBuilder('OcrdCisOcropyRec')
  .setName('ocrd-cis-ocropy-rec')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'TextOption', 'undefined')
  .build();
