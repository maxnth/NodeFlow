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
      parameter_descriptions: {
        active_classes: 'Restrict types of regions to be detected.',
        block_segmentation_weights: 'Path to model weights',
        min_confidence: 'Confidence threshold for region detections',
        min_iou_drop:
          'Minimum required overlap (intersection over union) of mask-derived contour area between neighbours to suppress prediction scoring worse',
        min_iou_merge:
          'Minimum required overlap (intersection over union) of mask-derived contour area between neighbours to merge prediction scoring worse',
        min_share_drop:
          'Minimum required overlap (intersection over single) of mask-derived contour area between neighbours to suppress smaller prediction',
        min_share_merge:
          'Minimum required overlap (intersection over single) of mask-derived contour area between neighbours to merge smaller prediction',
        overwrite:
          'whether to delete existing text lines prior to segmentation',
        post_process:
          'whether to apply non-maximum suppression (across classes) on the detections',
        th: 'num of pixels to include in the area region (when applying text/non-text mask from tiseg)',
        use_masks:
          'whether to segment from the mask as polygon instead of just the bbox',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
