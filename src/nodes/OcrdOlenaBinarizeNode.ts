import { NodeBuilder } from '@baklavajs/core';

export const OcrdOlenaBinarizeNode = new NodeBuilder('OcrdOlenaBinarize')
  .setName('ocrd-olena-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('impl', 'SelectOption', 'sauvola-ms-split', undefined, {
    items: [
      'sauvola',
      'sauvola-ms',
      'sauvola-ms-fg',
      'sauvola-ms-split',
      'kim',
      'wolf',
      'niblack',
      'singh',
      'otsu',
    ],
  })
  .addOption('k', 'NumberOption', 0.34)
  .addOption('win-size', 'IntegerOption', 0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'popular binarization algorithms implemented by Olena/SCRIBO, wrapped for OCR-D (on page level only)',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero',
        impl: 'The name of the actual binarization algorithm',
        k: "Sauvola's formulae parameter (foreground weight decreases with k); for Multiscale, multiplied to yield default 0.2/0.3/0.5; for Singh, multiplied to yield default 0.06; for Niblack, multiplied to yield default -0.2; for Wolf/Kim, used directly; for Otsu, does not apply",
        'win-size':
          'The (odd) window size in pixels; when zero (default), set to DPI (or 301); for Otsu, does not apply',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
