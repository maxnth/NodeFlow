import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyDenoiseNode = new NodeBuilder('OcrdCisOcropyDenoise')
  .setName('ocrd-cis-ocropy-denoise')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption('noise_maxsize', 'NumberOption', 3.0)
  .build();
