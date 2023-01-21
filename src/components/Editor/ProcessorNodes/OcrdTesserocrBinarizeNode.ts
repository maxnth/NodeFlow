import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrBinarizeNode = new NodeBuilder(
  'OcrdTesserocrBinarize'
)
  .setName('ocrd-tesserocr-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption('tiseg', 'CheckboxOption', false)
  .build();
