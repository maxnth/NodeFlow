import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrBlockSegmentationNode = new NodeBuilder(
  'OcrdAnybaseocrBlockSegmentation'
)
  .setName('ocrd-anybaseocr-block-segmentation')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'block_segmentation_weights',
    'TextOption',
    'block_segmentation_weights.h5'
  )
  .addOption('min_confidence', 'NumberOption', 0.9)
  .addOption('min_iou_drop', 'NumberOption', 0.8)
  .addOption('min_iou_merge', 'NumberOption', 0.2)
  .addOption('min_share_drop', 'NumberOption', 0.9)
  .addOption('min_share_merge', 'NumberOption', 0.8)
  .addOption('overwrite', 'CheckboxOption', false)
  .addOption('post_process', 'CheckboxOption', true)
  .addOption('use_masks', 'CheckboxOption', true)
  .build();
