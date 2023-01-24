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
      parameter_descriptions: {
        csminheight:
          '(when operating on the page/table level) minimum height of white/background or black/foreground column separators in multiples of scale/capheight, counted piece-wise',
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero or negative; when disabled and no meta-data is found, 300 is assumed',
        gap_height:
          '(when operating on the page/table level) largest minimum pixel average in the horizontal or vertical profiles (across the binarized image) to still be regarded as a gap during recursive X-Y cut from lines to regions; needs to be larger when more foreground noise is present, reduce to avoid mistaking text for noise',
        gap_width:
          '(when operating on the page/table level) smallest width in multiples of scale/capheight of a valley in the horizontal or vertical profiles (across the binarized image) to still be regarded as a gap during recursive X-Y cut from lines to regions; needs to be smaller when more foreground noise is present, increase to avoid mistaking inter-line as paragraph gaps and inter-word as inter-column gaps',
        hlminwidth:
          '(when operating on the page/table level) minimum width of black/foreground horizontal separators in multiples of scale/capheight, counted piece-wise',
        'level-of-operation':
          'PAGE XML hierarchy level to read images from and add elements to',
        maxcolseps:
          '(when operating on the page/table level) maximum number of white/background column separators to detect, counted piece-wise',
        maximages:
          '(when operating on the page level) maximum number of black/foreground very large components to detect (and suppress), counted piece-wise',
        maxseps:
          '(when operating on the page/table level) number of black/foreground column separators to detect (and suppress), counted piece-wise',
        overwrite_lines:
          '(when operating on the region level) remove any existing TextLine elements; otherwise append',
        overwrite_order:
          '(when operating on the page/table level) remove any references for existing TextRegion elements within the top (page/table) reading order; otherwise append',
        overwrite_regions:
          '(when operating on the page/table level) remove any existing TextRegion elements; otherwise append',
        overwrite_separators:
          '(when operating on the page/table level) remove any existing SeparatorRegion elements; otherwise append',
        spread:
          'distance in points (pt) from the foreground to project text line (or text region) labels into the background for polygonal contours; if zero, project half a scale/capheight',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
