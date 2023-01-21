import { NodeBuilder } from '@baklavajs/core';

export const OcrdSkimageBinarizeNode = new NodeBuilder('OcrdSkimageBinarize')
  .setName('ocrd-skimage-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('k', 'NumberOption', 0.34)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('method', 'SelectOption', 'sauvola', undefined, {
    items: ['sauvola', 'niblack', 'otsu', 'gauss', 'yen', 'li'],
  })
  .addOption('window_size', 'IntegerOption', 0)
  .build();
