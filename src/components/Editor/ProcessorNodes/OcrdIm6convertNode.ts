import { NodeBuilder } from '@baklavajs/core';

export const OcrdIm6convertNode = new NodeBuilder('OcrdIm6convert')
  .setName('ocrd-im6convert')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('input-options', 'TextOption', '')
  .addOption('output-format', 'SelectOption', 'undefined', undefined, {
    items: ['image/tiff', 'image/jp2', 'image/png'],
  })
  .addOption('output-options', 'TextOption', '')
  .build();
