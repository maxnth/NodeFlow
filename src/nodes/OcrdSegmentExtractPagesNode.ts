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
      parameter_descriptions: {
        colordict:
          "Mapping from segment types to extract to color values in the output mask images and COCO; color must be encoded hexadecimal (e.g. '00FF00'); region type equals the element name in PAGE-XML, optionally followed by a colon and a subtype (e.g. 'TextRegion:paragraph'; unmapped region types will be ignored (i.e. treated as background)). Default is PageViewer color scheme. Cf. colordict parameter of ocrd-segment-from-masks.",
        feature_filter:
          'Comma-separated list of forbidden image features (e.g. `binarized,despeckled`).',
        mimetype: 'File format to save extracted images in.',
        plot_overlay:
          'When generating mask images with `plot_segmasks`, instead of starting with a blank image and having layers and segments replace each other, start with the raw image and superimpose (alpha-composite) layers and segments.',
        plot_segmasks:
          "Generate mask images of the page segmentation in the last output fileGrp. Draw filled polygons for each specified PAGE hierarchy level in the list (in that order), where 'page' denotes the Border polygon, 'region' denotes Region types, 'line' denotes TextLine, 'word' denotes Word and 'glyph' denotes Glyph. Each type must be mapped in `colordict`. Where neighbors of the same type intersect, show a warning (unless `plot_overlay` is true). If 'order' is present, then draw arrows for reading order, too.",
        transparency: 'Add alpha channels with segment masks to the images',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
