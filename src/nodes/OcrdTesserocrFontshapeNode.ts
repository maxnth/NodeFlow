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
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        model:
          'tessdata model to apply (an ISO 639-3 language specification or some other basename, e.g. deu-frak or osd); must be an old (pre-LSTM) model',
        padding:
          'Number of background-filled pixels to add around the word image (i.e. the annotated AlternativeImage if it exists or the higher-level image cropped to the bounding box and masked by the polygon otherwise) on each side before recognition.',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
