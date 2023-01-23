import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrSegmentWordNode = new NodeBuilder(
  'OcrdTesserocrSegmentWord'
)
  .setName('ocrd-tesserocr-segment-word')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('overwrite_words', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 0)
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Segment lines into words with Tesseract' }),
    'SidebarDescriptionOption'
  )
  .build();
