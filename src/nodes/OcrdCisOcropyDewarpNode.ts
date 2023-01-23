import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyDewarpNode = new NodeBuilder('OcrdCisOcropyDewarp')
  .setName('ocrd-cis-ocropy-dewarp')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('max_neighbour', 'NumberOption', 0.05)
  .addOption('range', 'NumberOption', 4.0)
  .addOption('smoothness', 'NumberOption', 1.0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Dewarp line images with ocropy' }),
    'SidebarDescriptionOption'
  )
  .build();
