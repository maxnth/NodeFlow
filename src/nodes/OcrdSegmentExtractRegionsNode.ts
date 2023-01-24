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
      parameter_descriptions: {
        classes:
          'Array of region types to extract e.g. -P classes \'["TextRegion", "TableRegion", "ImageRegion"]\' . If empty, all regions are allowed.',
        feature_filter:
          'Comma-separated list of forbidden image features (e.g. `binarized,despeckled`).',
        mimetype: 'File format to save extracted images in.',
        transparency: 'Add alpha channels with segment masks to the images',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
