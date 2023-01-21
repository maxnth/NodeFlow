import { NodeBuilder } from '@baklavajs/core';

export const OcrdSkimageDenoiseRawNode = new NodeBuilder(
  'OcrdSkimageDenoiseRaw'
)
  .setName('ocrd-skimage-denoise-raw')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('method', 'SelectOption', 'VisuShrink', undefined, {
    items: ['BayesShrink', 'VisuShrink'],
  })
  .build();
