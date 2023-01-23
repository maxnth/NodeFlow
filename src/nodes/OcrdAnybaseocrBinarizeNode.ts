import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrBinarizeNode = new NodeBuilder(
  'OcrdAnybaseocrBinarize'
)
  .setName('ocrd-anybaseocr-binarize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('bignore', 'NumberOption', 0.1)
  .addOption('debug', 'IntegerOption', 0)
  .addOption('escale', 'NumberOption', 1.0)
  .addOption('gray', 'CheckboxOption', false)
  .addOption('hi', 'NumberOption', 90)
  .addOption('lo', 'NumberOption', 5)
  .addOption('nocheck', 'CheckboxOption', false)
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption('perc', 'NumberOption', 80)
  .addOption('range', 'IntegerOption', 20)
  .addOption('raw_copy', 'CheckboxOption', false)
  .addOption('show', 'CheckboxOption', false)
  .addOption('threshold', 'NumberOption', 0.5)
  .addOption('zoom', 'NumberOption', 0.5)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Binarizes images with the algorithm from ocropy and outputs it as an AlternativeImage.',
    }),
    'SidebarDescriptionOption'
  )
  .build();
