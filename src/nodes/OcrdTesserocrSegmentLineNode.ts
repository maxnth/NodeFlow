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
    () => ({
      description: 'Segment regions into lines with Tesseract',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        overwrite_lines:
          'Remove existing layout and text annotation below the TextRegion level (otherwise skip region; no incremental annotation yet).',
        padding: 'extend detected line rectangles by this many (true) pixels',
        shrink_polygons:
          'annotate polygon coordinates instead of bounding box rectangles by projecting the convex hull of all symbols',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
