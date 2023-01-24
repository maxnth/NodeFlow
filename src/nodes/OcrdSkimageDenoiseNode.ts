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
    () => ({
      description: 'Denoise binarized images with Scikit-image',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero',
        'level-of-operation': 'PAGE XML hierarchy level to operate on',
        maxsize:
          'maximum component size of (bg holes or fg specks) noise in pt',
        protect:
          'avoid removing fg specks near larger fg components by up to this distance in pt',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
