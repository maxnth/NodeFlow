import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisAlignNode = new NodeBuilder('OcrdCisAlign')
  .setName('ocrd-cis-align')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .build();
