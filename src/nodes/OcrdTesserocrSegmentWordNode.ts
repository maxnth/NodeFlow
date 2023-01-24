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
    () => ({
      description: 'Segment lines into words with Tesseract',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        overwrite_words:
          'Remove existing layout and text annotation below the TextLine level (otherwise skip line; no incremental annotation yet).',
        padding: 'extend detected cell rectangles by this many (true) pixels',
        shrink_polygons:
          'annotate polygon coordinates instead of bounding box rectangles by projecting the convex hull of all symbols',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
