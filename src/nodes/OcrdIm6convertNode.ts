import { NodeBuilder } from '@baklavajs/core';

export const OcrdIm6convertNode = new NodeBuilder('OcrdIm6convert')
  .setName('ocrd-im6convert')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('input-options', 'InputOption', '')
  .addOption('output-format', 'SelectOption', 'undefined', undefined, {
    items: ['image/tiff', 'image/jp2', 'image/png'],
  })
  .addOption('output-options', 'InputOption', '')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Convert and transform images',
      parameter_descriptions: {
        'input-options': 'e.g. -density 600x600 -wavelet-denoise 1%x0.1',
        'output-format': 'Desired media type of output',
        'output-options':
          'e.g. -resample 300x300 -alpha deactivate -normalize -despeckle -noise 2 -negate -morphology close diamond',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
