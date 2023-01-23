import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrSegmentLineNode = new NodeBuilder(
  'OcrdTesserocrSegmentLine'
)
  .setName('ocrd-tesserocr-segment-line')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('overwrite_lines', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 0)
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Segment regions into lines with Tesseract' }),
    'SidebarDescriptionOption'
  )
  .build();
