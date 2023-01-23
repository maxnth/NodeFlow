import { NodeBuilder } from '@baklavajs/core';

export const OcrdKrakenSegmentNode = new NodeBuilder('OcrdKrakenSegment')
  .setName('ocrd-kraken-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('black_colseps', 'CheckboxOption', false)
  .addOption('blla_model', 'InputOption', 'blla.mlmodel')
  .addOption('device', 'InputOption', 'cpu')
  .addOption('maxcolseps', 'IntegerOption', 2)
  .addOption('remove_hlines', 'CheckboxOption', true)
  .addOption('scale', 'NumberOption', 0)
  .addOption('text_direction', 'SelectOption', 'horizontal-lr', undefined, {
    items: ['horizontal-lr', 'horizontal-rl', 'vertical-lr', 'vertical-rl'],
  })
  .addOption('use_legacy', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Block segmentation with kraken' }),
    'SidebarDescriptionOption'
  )
  .build();
