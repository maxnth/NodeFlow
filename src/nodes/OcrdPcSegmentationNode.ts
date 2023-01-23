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
    }),
    'SidebarDescriptionOption'
  )
  .build();
