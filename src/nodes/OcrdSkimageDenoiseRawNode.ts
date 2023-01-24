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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Denoise raw images with Scikit-image',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero',
        'level-of-operation': 'PAGE XML hierarchy level to operate on',
        method: 'Wavelet filtering scheme to use',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
