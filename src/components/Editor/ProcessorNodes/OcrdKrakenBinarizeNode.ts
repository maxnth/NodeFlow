import { NodeBuilder } from '@baklavajs/core';

export const OcrdKrakenBinarizeNode = new NodeBuilder('OcrdKrakenBinarize')
  .setName('ocrd-kraken-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'block', 'line'],
  })
  .build();
