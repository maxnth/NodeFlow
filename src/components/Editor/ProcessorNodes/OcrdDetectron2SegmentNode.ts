import { NodeBuilder } from '@baklavajs/core';

export const OcrdDetectron2SegmentNode = new NodeBuilder(
  'OcrdDetectron2Segment'
)
  .setName('ocrd-detectron2-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('device', 'TextOption', 'cuda')
  .addOption('min_confidence', 'NumberOption', 0.5)
  .addOption('model_config', 'TextOption', 'undefined')
  .addOption('model_weights', 'TextOption', 'undefined')
  .addOption('operation_level', 'SelectOption', 'page', undefined, {
    items: ['page', 'table'],
  })
  .build();
