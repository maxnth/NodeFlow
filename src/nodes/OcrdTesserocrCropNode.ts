import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrCropNode = new NodeBuilder('OcrdTesserocrCrop')
  .setName('ocrd-tesserocr-crop')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('padding', 'IntegerOption', 4)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: "Poor man's cropping via region segmentation" }),
    'SidebarDescriptionOption'
  )
  .build();
