import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropySegmentNode = new NodeBuilder('OcrdCisOcropySegment')
  .setName('ocrd-cis-ocropy-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('csminheight', 'IntegerOption', 4)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('gap_height', 'NumberOption', 0.01)
  .addOption('gap_width', 'NumberOption', 1.5)
  .addOption('hlminwidth', 'IntegerOption', 10)
  .addOption('level-of-operation', 'SelectOption', 'region', undefined, {
    items: ['page', 'table', 'region'],
  })
  .addOption('maxcolseps', 'IntegerOption', 20)
  .addOption('maximages', 'IntegerOption', 10)
  .addOption('maxseps', 'IntegerOption', 20)
  .addOption('overwrite_lines', 'CheckboxOption', true)
  .addOption('overwrite_order', 'CheckboxOption', true)
  .addOption('overwrite_regions', 'CheckboxOption', true)
  .addOption('overwrite_separators', 'CheckboxOption', true)
  .addOption('spread', 'NumberOption', 2.4)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment pages into regions and lines, tables into cells and lines, or regions into lines with ocropy',
    }),
    'SidebarDescriptionOption'
  )
  .build();
