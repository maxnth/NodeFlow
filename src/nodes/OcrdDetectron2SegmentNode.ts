import { NodeBuilder } from '@baklavajs/core';

export const OcrdDetectron2SegmentNode = new NodeBuilder(
  'OcrdDetectron2Segment'
)
  .setName('ocrd-detectron2-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('device', 'InputOption', 'cuda')
  .addOption('min_confidence', 'NumberOption', 0.5)
  .addOption('model_config', 'InputOption', 'undefined')
  .addOption('model_weights', 'InputOption', 'undefined')
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'table'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Detect regions with Detectron2 models' }),
    'SidebarDescriptionOption'
  )
  .build();
