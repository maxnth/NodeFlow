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
    }),
    'SidebarDescriptionOption'
  )
  .build();
