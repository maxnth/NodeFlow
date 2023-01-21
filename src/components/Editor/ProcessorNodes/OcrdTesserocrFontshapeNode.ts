import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrFontshapeNode = new NodeBuilder(
  'OcrdTesserocrFontshape'
)
  .setName('ocrd-tesserocr-fontshape')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('model', 'TextOption', 'osd')
  .addOption('padding', 'IntegerOption', 0)
  .build();
