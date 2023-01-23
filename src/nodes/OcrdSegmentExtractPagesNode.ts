import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractPagesNode = new NodeBuilder(
  'OcrdSegmentExtractPages'
)
  .setName('ocrd-segment-extract-pages')
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
  .addOption('plot_overlay', 'CheckboxOption', false)
  .addOption('transparency', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Extract page segmentation as page images (deskewed according to `/Page/@orientation` and cropped+masked along `/Page/Border`) + JSON (including region coordinates/classes and meta-data), as binarized images, and as mask images (segments filled with colors encoding classes) + COCO detection format JSON (for all pages). Output fileGrp format is `raw[,binarized[,mask]]` (i.e. fall back to first group).',
    }),
    'SidebarDescriptionOption'
  )
  .build();
