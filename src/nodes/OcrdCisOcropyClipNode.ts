import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyClipNode = new NodeBuilder('OcrdCisOcropyClip')
  .setName('ocrd-cis-ocropy-clip')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('level-of-operation', 'SelectOption', 'region', undefined, {
    items: ['region', 'line'],
  })
  .addOption('min_fraction', 'NumberOption', 0.7)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Clip text regions / lines at intersections with neighbours',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero or negative',
        'level-of-operation':
          'PAGE XML hierarchy level granularity to annotate images for',
        min_fraction:
          'share of foreground pixels that must be retained by the largest label',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
