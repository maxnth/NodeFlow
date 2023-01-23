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
    () => ({ description: 'Compare segmentations' }),
    'SidebarDescriptionOption'
  )
  .build();