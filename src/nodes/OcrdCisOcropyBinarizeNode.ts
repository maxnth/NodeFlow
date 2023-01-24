import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyBinarizeNode = new NodeBuilder(
  'OcrdCisOcropyBinarize'
)
  .setName('ocrd-cis-ocropy-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('grayscale', 'CheckboxOption', false)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'table', 'region', 'line'],
  })
  .addOption('maxskew', 'NumberOption', 0.0)
  .addOption('method', 'SelectOption', 'ocropy', undefined, {
    items: ['none', 'global', 'otsu', 'gauss-otsu', 'ocropy'],
  })
  .addOption('threshold', 'NumberOption', 0.5)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Binarize (and optionally deskew/despeckle) pages / regions / lines with ocropy',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero or negative',
        grayscale:
          "for the 'ocropy' method, produce grayscale-normalized instead of thresholded image",
        'level-of-operation':
          'PAGE XML hierarchy level granularity to annotate images for',
        maxskew:
          'modulus of maximum skewing angle (in degrees) to detect (larger will be slower, 0 will deactivate deskewing)',
        method:
          "binarization method to use (only 'ocropy' will include deskewing and denoising)",
        noise_maxsize:
          'maximum pixel number for connected components to regard as noise (0 will deactivate denoising)',
        threshold:
          "for the 'ocropy' and ' global' method, black/white threshold to apply on the whitelevel normalized image (the larger the more/heavier foreground)",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
