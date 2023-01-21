import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrDeskewNode = new NodeBuilder('OcrdTesserocrDeskew')
  .setName('ocrd-tesserocr-deskew')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('min_orientation_confidence', 'NumberOption', 1.5)
  .addOption('operation_level', 'SelectOption', 'region', undefined, {
    items: ['page', 'region', 'line'],
  })
  .build();
