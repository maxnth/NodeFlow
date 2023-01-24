import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractLinesNode = new NodeBuilder(
  'OcrdSegmentExtractLines'
)
  .setName('ocrd-segment-extract-lines')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'InputOption', '')
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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Extract line segmentation as line images + text file + JSON.',
      parameter_descriptions: {
        feature_filter:
          'Comma-separated list of forbidden image features (e.g. `binarized,despeckled`).',
        'library-convention':
          'For xlsx extraction, to make line images hyperlinked, use this scheme in reconstructing presentation URLs of original pages. Libraries have different conventions in their METS files. Set to none to disable.',
        mimetype: 'File format to save extracted images in.',
        'min-line-height':
          'Only extract lines that are at least this high (in px).',
        'min-line-length':
          'Only extract lines with at least this many characters.',
        'min-line-width':
          'Only extract lines that are at least this wide (in px).',
        'output-types':
          'What kind of files to extract besides the line image itself (text/json files for  each line, xlsx per page).',
        transparency: 'Add alpha channels with segment masks to the images',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
