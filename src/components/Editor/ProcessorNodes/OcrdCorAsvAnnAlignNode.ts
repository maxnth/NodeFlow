import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnAlignNode = new NodeBuilder('OcrdCorAsvAnnAlign')
  .setName('ocrd-cor-asv-ann-align')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('method', 'SelectOption', 'majority', undefined, {
    items: ['majority', 'confidence', 'combined'],
  })
  .build();
