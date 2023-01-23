import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrSegmentNode = new NodeBuilder('OcrdTesserocrSegment')
  .setName('ocrd-tesserocr-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('block_polygons', 'CheckboxOption', false)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('find_staves', 'CheckboxOption', false)
  .addOption('find_tables', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 4)
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .addOption('sparse_text', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Segment page into regions and lines with Tesseract',
    }),
    'SidebarDescriptionOption'
  )
  .build();
