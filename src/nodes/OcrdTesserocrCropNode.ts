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
    () => ({
      description: "Poor man's cropping via region segmentation",
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        padding:
          'extend detected border by this many (true) pixels on every side',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
