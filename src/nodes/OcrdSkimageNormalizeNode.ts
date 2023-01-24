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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Equalize contrast/exposure of images with Scikit-image; stretches the color value/tone to the full dynamic range',
      parameter_descriptions: {
        'black-point':
          'black point point in percent of luminance/value/tone histogram; up to ``black-point`` darkest pixels will be clipped to black when stretching',
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero',
        'level-of-operation': 'PAGE XML hierarchy level to operate on',
        method:
          "contrast-enhancing transformation to use after clipping; ``stretch`` uses ``skimage.exposure.rescale_intensity`` (globally linearly stretching to full dynamic range) and ``adapthist`` uses ``skimage.exposure.equalize_adapthist`` (applying over tiles with context from 1/8th of the image's width)",
        'white-point':
          'white point in percent of luminance/value/tone histogram; up to ``white-point`` brightest pixels will be clipped to white when stretching',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
