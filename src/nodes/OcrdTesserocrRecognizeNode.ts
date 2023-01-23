import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrRecognizeNode = new NodeBuilder(
  'OcrdTesserocrRecognize'
)
  .setName('ocrd-tesserocr-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('auto_model', 'CheckboxOption', false)
  .addOption('block_polygons', 'CheckboxOption', false)
  .addOption('char_blacklist', 'InputOption', '')
  .addOption('char_unblacklist', 'InputOption', '')
  .addOption('char_whitelist', 'InputOption', '')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('find_staves', 'CheckboxOption', false)
  .addOption('find_tables', 'CheckboxOption', true)
  .addOption('model', 'InputOption', 'undefined')
  .addOption('oem', 'SelectOption', 'DEFAULT', undefined, {
    items: [
      'TESSERACT_ONLY',
      'LSTM_ONLY',
      'TESSERACT_LSTM_COMBINED',
      'DEFAULT',
    ],
  })
  .addOption('overwrite_segments', 'CheckboxOption', false)
  .addOption('overwrite_text', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 0)
  .addOption('raw_lines', 'CheckboxOption', false)
  .addOption('segmentation_level', 'SelectOption', 'word', undefined, {
    items: ['region', 'cell', 'line', 'word', 'glyph', 'none'],
  })
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .addOption('sparse_text', 'CheckboxOption', false)
  .addOption('textequiv_level', 'SelectOption', 'word', undefined, {
    items: ['region', 'cell', 'line', 'word', 'glyph', 'none'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment and/or recognize text with Tesseract (using annotated derived images, or masking and cropping images from coordinate polygons) on any level of the PAGE hierarchy.',
    }),
    'SidebarDescriptionOption'
  )
  .build();
