import { NodeBuilder } from '@baklavajs/core';

export const OcrdDinglehopperNode = new NodeBuilder('OcrdDinglehopper')
  .setName('ocrd-dinglehopper')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('metrics', 'CheckboxOption', true)
  .addOption('textequiv_level', 'SelectOption', 'region', undefined, {
    items: ['region', 'line'],
  })
  .build();
