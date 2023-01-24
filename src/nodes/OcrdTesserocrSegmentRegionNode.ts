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
    () => ({
      description: 'Segment page into regions with Tesseract',
      parameter_descriptions: {
        crop_polygons:
          'annotate polygon coordinates instead of bounding box rectangles',
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        find_staves:
          "When detecting regions, recognize music staves as non-text, suppressing it in the binary image (Tesseract's ``pageseg_apply_music_mask``). Note that this might wrongly detect tables as staves.",
        find_tables:
          'recognise tables as table regions (textord_tabfind_find_tables)',
        overwrite_regions:
          'Remove existing layout and text annotation below the Page level (otherwise skip page; no incremental annotation yet).',
        padding: 'extend detected region rectangles by this many (true) pixels',
        shrink_polygons:
          'annotate polygon coordinates instead of bounding box rectangles by projecting the convex hull of all symbols',
        sparse_text:
          "use 'sparse text' page segmentation mode (find as much text as possible in no particular order): only text regions, single lines without vertical or horizontal space",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
