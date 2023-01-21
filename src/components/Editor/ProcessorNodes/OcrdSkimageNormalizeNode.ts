import { NodeBuilder } from '@baklavajs/core';

export const OcrdSkimageNormalizeNode = new NodeBuilder('OcrdSkimageNormalize')
  .setName('ocrd-skimage-normalize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('black-point', 'NumberOption', 1.0)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('method', 'SelectOption', 'stretch', undefined, {
    items: ['stretch', 'adapthist'],
  })
  .addOption('white-point', 'NumberOption', 7.0)
  .build();
