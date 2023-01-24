import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyResegmentNode = new NodeBuilder(
  'OcrdCisOcropyResegment'
)
  .setName('ocrd-cis-ocropy-resegment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('extend_margins', 'IntegerOption', 3)
  .addOption('level-of-operation', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .addOption('method', 'SelectOption', 'lineest', undefined, {
    items: ['lineest', 'baseline', 'ccomps'],
  })
  .addOption('min_fraction', 'NumberOption', 0.75)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Resegment text lines',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero or negative',
        extend_margins:
          'number of pixels to extend the input polygons in all directions',
        'level-of-operation':
          "PAGE XML hierarchy level to segment textlines in ('region' abides by existing text region boundaries, 'page' optimises lines in the whole page once",
        method:
          "source for new line polygon candidates ('lineest' for line estimation, i.e. how Ocropy would have segmented text lines; 'baseline' tries to re-polygonize from the baseline annotation; 'ccomps' avoids crossing connected components by majority rule)",
        min_fraction:
          'share of foreground pixels that must be retained by the output polygons',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
