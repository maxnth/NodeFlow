import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentExtractGlyphsNode = new NodeBuilder(
  'OcrdSegmentExtractGlyphs'
)
  .setName('ocrd-segment-extract-glyphs')
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
        'Extract glyph segmentation as glyph images (deskewed according to `*/@orientation` and cropped+masked along `*/Coords` polygon and dewarped as in `*/AlternativeImage`) + text file (according to `*/TextEquiv`) + JSON (including line coordinates and meta-data).',
    }),
    'SidebarDescriptionOption'
  )
  .build();
