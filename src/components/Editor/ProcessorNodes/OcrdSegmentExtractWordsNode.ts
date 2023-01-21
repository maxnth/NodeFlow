import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractWordsNode = new NodeBuilder(
  'OcrdSegmentExtractWords'
)
  .setName('ocrd-segment-extract-words')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'TextOption', '')
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
  .build();
