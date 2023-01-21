import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractLinesNode = new NodeBuilder(
  'OcrdSegmentExtractLines'
)
  .setName('ocrd-segment-extract-lines')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'TextOption', '')
  .addOption('library-convention', 'SelectOption', 'none', undefined, {
    items: ['slub', 'sbb', 'none'],
  })
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
  .addOption('min-line-height', 'IntegerOption', 1)
  .addOption('min-line-length', 'IntegerOption', 0)
  .addOption('min-line-width', 'IntegerOption', 1)
  .addOption('transparency', 'CheckboxOption', true)
  .build();
