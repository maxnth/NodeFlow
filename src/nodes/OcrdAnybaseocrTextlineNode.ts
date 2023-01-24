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
      parameter_descriptions: {
        blackseps: 'also check for black column separators',
        csminaspect: 'minimum aspect ratio for column separators',
        csminheight: 'minimum column height (units=scale)',
        expand: 'expand mask for grayscale extraction',
        hscale: 'non-standard scaling of horizontal parameters',
        libpath: 'Library Path for C Executables',
        maxcolseps: 'maximum # whitespace column separators',
        maxlines: 'non-standard scaling of horizontal parameters',
        maxseps: 'maximum black column separators',
        minscale: 'minimum scale permitted',
        noise: 'noise threshold for removing small components from lines',
        operation_level: 'PAGE XML hierarchy level to operate on',
        overwrite: 'check whether to overwrite existing text lines',
        pad: 'padding for extracted lines',
        parallel: 'number of CPUs to use',
        scale: 'the basic scale of the document (roughly, xheight) 0=automatic',
        sepwiden: 'widen black separators (to account for warping)',
        threshold: 'baseline threshold',
        usegauss: 'use gaussian instead of uniform',
        vscale: 'non-standard scaling of vertical parameters',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
