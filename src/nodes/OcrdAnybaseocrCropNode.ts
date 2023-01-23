import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrCropNode = new NodeBuilder('OcrdAnybaseocrCrop')
  .setName('ocrd-anybaseocr-crop')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('columnAreaMin', 'NumberOption', 0.05)
  .addOption('columnSepWidthMax', 'NumberOption', 0.04)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('marginBottom', 'NumberOption', 0.75)
  .addOption('marginLeft', 'NumberOption', 0.3)
  .addOption('marginRight', 'NumberOption', 0.7)
  .addOption('marginTop', 'NumberOption', 0.25)
  .addOption('padding', 'IntegerOption', 10)
  .addOption('rulerAreaMax', 'NumberOption', 0.3)
  .addOption('rulerAreaMin', 'NumberOption', 0.01)
  .addOption('rulerRatioMax', 'NumberOption', 50.0)
  .addOption('rulerRatioMin', 'NumberOption', 3.0)
  .addOption('rulerWidthMax', 'NumberOption', 0.95)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        "Detect the input images' page frame, annotate it as border polygon and add a cropped derived image.",
    }),
    'SidebarDescriptionOption'
  )
  .build();
