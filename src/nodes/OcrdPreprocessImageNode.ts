import { NodeBuilder } from '@baklavajs/core';

export const OcrdPreprocessImageNode = new NodeBuilder('OcrdPreprocessImage')
  .setName('ocrd-preprocess-image')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('command', 'InputOption', 'undefined')
  .addOption('input_feature_filter', 'InputOption', '')
  .addOption('input_feature_selector', 'InputOption', '')
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
  .addOption('output_feature_added', 'InputOption', 'undefined')
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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Convert or enhance images' }),
    'SidebarDescriptionOption'
  )
  .build();
