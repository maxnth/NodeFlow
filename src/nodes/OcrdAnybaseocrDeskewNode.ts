import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrDeskewNode = new NodeBuilder('OcrdAnybaseocrDeskew')
  .setName('ocrd-anybaseocr-deskew')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('bignore', 'NumberOption', 0.1)
  .addOption('debug', 'IntegerOption', 0)
  .addOption('escale', 'NumberOption', 1.0)
  .addOption('hi', 'IntegerOption', 90)
  .addOption('lo', 'IntegerOption', 5)
  .addOption('maxskew', 'NumberOption', 1.0)
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line'],
  })
  .addOption('parallel', 'IntegerOption', 0)
  .addOption('skewsteps', 'IntegerOption', 8)
  .addOption('threshold', 'NumberOption', 0.5)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Deskews images with the algorithm from ocropy and outputs a deskew angle.',
      parameter_descriptions: {
        bignore: 'ignore this much of the border for threshold estimation',
        debug: 'display intermediate results',
        escale: 'scale for estimating a mask over the text region',
        hi: 'percentile for white estimation',
        lo: 'percentile for black estimation',
        maxskew: 'skew angle estimation parameters (degrees)',
        operation_level: 'PAGE XML hierarchy level to operate on',
        parallel: '???',
        skewsteps: 'steps for skew angle estimation (per degree)',
        threshold: 'threshold, determines lightness',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
