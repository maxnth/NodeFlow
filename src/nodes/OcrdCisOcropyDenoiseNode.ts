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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Despeckle pages / regions / lines with ocropy',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero or negative',
        'level-of-operation':
          'PAGE XML hierarchy level granularity to annotate images for',
        noise_maxsize:
          'maximum size in points (pt) for connected components to regard as noise (0 will deactivate denoising)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
