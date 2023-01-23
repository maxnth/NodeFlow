import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrFontshapeNode = new NodeBuilder(
  'OcrdTesserocrFontshape'
)
  .setName('ocrd-tesserocr-fontshape')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('model', 'InputOption', 'osd')
  .addOption('padding', 'IntegerOption', 0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Recognize font shapes (family/monospace/bold/italic) and size in segmented words with Tesseract (using annotated derived images, or masking and cropping images from coordinate polygons), annotating TextStyle',
    }),
    'SidebarDescriptionOption'
  )
  .build();
