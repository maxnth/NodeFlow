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
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment table regions into cell text regions with Tesseract',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        overwrite_cells:
          'Remove existing layout and text annotation below the TableRegion level (otherwise skip table; no incremental annotation yet).',
        padding: 'extend detected cell rectangles by this many (true) pixels',
        shrink_polygons:
          'annotate polygon coordinates instead of bounding box rectangles by projecting the convex hull of all symbols',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
