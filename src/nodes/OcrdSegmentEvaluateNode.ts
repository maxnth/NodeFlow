import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentEvaluateNode = new NodeBuilder('OcrdSegmentEvaluate')
  .setName('ocrd-segment-evaluate')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('for-categories', 'InputOption', '')
  .addOption('ignore-subtype', 'CheckboxOption', false)
  .addOption('level-of-operation', 'SelectOption', 'region', undefined, {
    items: ['region', 'line'],
  })
  .addOption('only-fg', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Compare segmentations',
      parameter_descriptions: {
        'for-categories':
          'on region level, only compare these region types (comma-separated list; unless `ignore-subtype` is given, append subtypes via `.`; e.g. `TextRegion.page-number,TextRegion.marginalia`)',
        'ignore-subtype':
          'on region level, ignore @type differentiation (where applicable)',
        'level-of-operation':
          'segment hierarchy level to compare GT and predictions at',
        'only-fg':
          'only overlap and compare the foregrounds in the binarized image',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
