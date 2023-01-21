import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractPagesNode = new NodeBuilder(
  'OcrdSegmentExtractPages'
)
  .setName('ocrd-segment-extract-pages')
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
  .addOption('plot_overlay', 'CheckboxOption', false)
  .addOption('transparency', 'CheckboxOption', true)
  .build();
