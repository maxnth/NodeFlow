import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrTextlineNode = new NodeBuilder(
  'OcrdAnybaseocrTextline'
)
  .setName('ocrd-anybaseocr-textline')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('blackseps', 'CheckboxOption', false)
  .addOption('csminaspect', 'NumberOption', 1.1)
  .addOption('csminheight', 'NumberOption', 6.5)
  .addOption('expand', 'IntegerOption', 3)
  .addOption('hscale', 'NumberOption', 1.0)
  .addOption('libpath', 'InputOption', '.')
  .addOption('maxcolseps', 'IntegerOption', 2)
  .addOption('maxlines', 'NumberOption', 300)
  .addOption('maxseps', 'IntegerOption', 2)
  .addOption('minscale', 'NumberOption', 12.0)
  .addOption('noise', 'IntegerOption', 8)
  .addOption('operation_level', 'SelectOption', 'region', undefined, {
    items: ['page', 'region'],
  })
  .addOption('overwrite', 'CheckboxOption', false)
  .addOption('pad', 'IntegerOption', 3)
  .addOption('parallel', 'IntegerOption', 0)
  .addOption('scale', 'NumberOption', 0.0)
  .addOption('sepwiden', 'IntegerOption', 10)
  .addOption('threshold', 'NumberOption', 0.2)
  .addOption('usegauss', 'CheckboxOption', false)
  .addOption('vscale', 'NumberOption', 1.7)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Finds region polygons for each text line in the input image.',
    }),
    'SidebarDescriptionOption'
  )
  .build();
