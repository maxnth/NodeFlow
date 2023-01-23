import { NodeBuilder } from '@baklavajs/core';

export const OcrdSkimageDenoiseNode = new NodeBuilder('OcrdSkimageDenoise')
  .setName('ocrd-skimage-denoise')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('maxsize', 'NumberOption', 1.0)
  .addOption('protect', 'NumberOption', 0.0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Denoise binarized images with Scikit-image' }),
    'SidebarDescriptionOption'
  )
  .build();
