import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrBinarizeNode = new NodeBuilder(
  'OcrdTesserocrBinarize'
)
  .setName('ocrd-tesserocr-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption('tiseg', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: "Binarize regions or lines with Tesseract's global Otsu",
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        operation_level: 'PAGE XML hierarchy level to operate on',
        tiseg:
          'also separate text vs image by detecting and suppressing photo+sepline mask',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
