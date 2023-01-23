import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrBlockSegmentationNode = new NodeBuilder(
  'OcrdAnybaseocrBlockSegmentation'
)
  .setName('ocrd-anybaseocr-block-segmentation')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'block_segmentation_weights',
    'InputOption',
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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segments and classifies regions in each single page and annotates the the region polygons and classes.',
    }),
    'SidebarDescriptionOption'
  )
  .build();
