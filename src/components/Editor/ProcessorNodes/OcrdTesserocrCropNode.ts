import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrCropNode = new NodeBuilder('OcrdTesserocrCrop')
  .setName('ocrd-tesserocr-crop')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('padding', 'IntegerOption', 4)
  .build();
