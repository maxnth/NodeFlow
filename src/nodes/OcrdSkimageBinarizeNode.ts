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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Binarize images with Scikit-image',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero',
        k: 'For Sauvola/Niblack, formula parameter influencing the threshold bias; larger is lighter foreground',
        'level-of-operation': 'PAGE XML hierarchy level to operate on',
        method: 'Thresholding algorithm to use',
        window_size:
          'For Sauvola/Niblack/Gauss, the (odd) window size in pixels; when zero (default), set to DPI',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
