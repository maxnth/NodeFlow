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
    () => ({
      description: 'Convert or enhance images',
      parameter_descriptions: {
        command:
          'shell command to operate on image files, with @INFILE as place-holder for the input file path, and @OUTFILE as place-holder for the output file path',
        input_feature_filter:
          'comma-separated list of forbidden image features (e.g. binarized,despeckled)',
        input_feature_selector:
          'comma-separated list of required image features (e.g. binarized,despeckled)',
        input_mimetype:
          "File format to save input images to (tool's expected input)",
        'level-of-operation': 'PAGE XML hierarchy level to operate on',
        output_feature_added:
          'image feature(s) to be added after this operation (if multiple, separate by comma)',
        output_mimetype:
          "File format to load output images from (tool's expected output)",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
