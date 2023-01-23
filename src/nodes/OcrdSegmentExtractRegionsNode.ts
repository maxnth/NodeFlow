import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractRegionsNode = new NodeBuilder(
  'OcrdSegmentExtractRegions'
)
  .setName('ocrd-segment-extract-regions')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'InputOption', '')
  .addOption('mimetype', 'SelectOption', 'image/png', undefined, {
    items: [
      'image/bmp',
      'application/postscript',
      'image/gif',
      'image/jpeg',
      'image/jp2',
      'image/png',
      'image/x-portable-pixmap',
      'image/tiff',
    ],
  })
  .addOption('transparency', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Extract region segmentation as region images (deskewed according to `*/@orientation` and cropped+masked along `*/Coords` polygon) + JSON (including region coordinates/classes and meta-data).',
    }),
    'SidebarDescriptionOption'
  )
  .build();
