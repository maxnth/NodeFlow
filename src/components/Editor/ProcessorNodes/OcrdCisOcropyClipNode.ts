import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyClipNode = new NodeBuilder('OcrdCisOcropyClip')
  .setName('ocrd-cis-ocropy-clip')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('level-of-operation', 'SelectOption', 'region', undefined, {
    items: ['region', 'line'],
  })
  .addOption('min_fraction', 'NumberOption', 0.7)
  .build();
