import { NodeBuilder } from '@baklavajs/core';

export const OcrdOlenaBinarizeNode = new NodeBuilder('OcrdOlenaBinarize')
  .setName('ocrd-olena-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('impl', 'SelectOption', 'sauvola-ms-split', undefined, {
    items: [
      'sauvola',
      'sauvola-ms',
      'sauvola-ms-fg',
      'sauvola-ms-split',
      'kim',
      'wolf',
      'niblack',
      'singh',
      'otsu',
    ],
  })
  .addOption('k', 'NumberOption', 0.34)
  .addOption('win-size', 'IntegerOption', 0)
  .build();
