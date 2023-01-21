import { NodeBuilder } from '@baklavajs/core';

export const OcrdPreprocessImageNode = new NodeBuilder('OcrdPreprocessImage')
  .setName('ocrd-preprocess-image')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('command', 'TextOption', 'undefined')
  .addOption('input_feature_filter', 'TextOption', '')
  .addOption('input_feature_selector', 'TextOption', '')
  .addOption('input_mimetype', 'SelectOption', 'image/png', undefined, {
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
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('output_feature_added', 'TextOption', 'undefined')
  .addOption('output_mimetype', 'SelectOption', 'image/png', undefined, {
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
  .build();
