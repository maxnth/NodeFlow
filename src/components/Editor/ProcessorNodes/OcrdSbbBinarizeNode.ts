import { NodeBuilder } from '@baklavajs/core';

export const OcrdSbbBinarizeNode = new NodeBuilder('OcrdSbbBinarize')
  .setName('ocrd-sbb-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'TextOption', 'undefined')
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .build();
