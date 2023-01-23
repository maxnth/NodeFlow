import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrSegmentRegionNode = new NodeBuilder(
  'OcrdTesserocrSegmentRegion'
)
  .setName('ocrd-tesserocr-segment-region')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('crop_polygons', 'CheckboxOption', false)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('find_staves', 'CheckboxOption', false)
  .addOption('find_tables', 'CheckboxOption', true)
  .addOption('overwrite_regions', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 0)
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .addOption('sparse_text', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({ description: 'Segment page into regions with Tesseract' }),
    'SidebarDescriptionOption'
  )
  .build();
