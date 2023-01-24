import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractWordsNode = new NodeBuilder(
  'OcrdSegmentExtractWords'
)
  .setName('ocrd-segment-extract-words')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'InputOption', '')
  .addOption('mimetype', 'SelectOption', 'image/png', undefined, {
    items: [
      'image/bmp',
      'application/postscript',
      'image/gif',
      'image/jpeg',
      'image/jp2',
      'image/png',
      'image/x-portable-pixmap',
      'image/tiff',
    ],
  })
  .addOption('transparency', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Extract word segmentation as word images (deskewed according to `*/@orientation` and cropped+masked along `*/Coords` polygon and dewarped as in `*/AlternativeImage`) + text file (according to `*/TextEquiv`) + JSON (including line coordinates and meta-data).',
      parameter_descriptions: {
        feature_filter:
          'Comma-separated list of forbidden image features (e.g. `binarized,despeckled`).',
        mimetype: 'File format to save extracted images in.',
        transparency: 'Add alpha channels with segment masks to the images',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
