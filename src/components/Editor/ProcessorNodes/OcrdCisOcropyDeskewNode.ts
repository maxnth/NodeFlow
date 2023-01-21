import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyDeskewNode = new NodeBuilder('OcrdCisOcropyDeskew')
  .setName('ocrd-cis-ocropy-deskew')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('level-of-operation', 'SelectOption', 'region', undefined, {
    items: ['page', 'table', 'region'],
  })
  .build();
