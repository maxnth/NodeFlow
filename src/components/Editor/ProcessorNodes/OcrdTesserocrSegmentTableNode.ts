import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrSegmentTableNode = new NodeBuilder(
  'OcrdTesserocrSegmentTable'
)
  .setName('ocrd-tesserocr-segment-table')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('overwrite_cells', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 0)
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .build();
