import { NodeBuilder } from '@baklavajs/core';

export const OcrdPcSegmentationNode = new NodeBuilder('OcrdPcSegmentation')
  .setName('ocrd-pc-segmentation')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('gpu_allow_growth', 'CheckboxOption', false)
  .addOption('model', 'InputOption', '__DEFAULT__')
  .addOption('overwrite_regions', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment page into regions using a pixel classifier based on a Fully Convolutional Network (FCN)',
      parameter_descriptions: {
        gpu_allow_growth:
          'required for GPU use with some graphic cards (set to true, if you get CUDNN_INTERNAL_ERROR)',
        model: 'trained model for pixel classifier',
        overwrite_regions:
          'remove existing layout and text annotation below the Page level',
        resize_height:
          'scale down pixelclassifier output to this height for postprocessing (performance/quality tradeoff). Independent of training.',
        xheight: 'height of character x in pixels used during training',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
