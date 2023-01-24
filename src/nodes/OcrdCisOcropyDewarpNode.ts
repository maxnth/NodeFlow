import { NodeBuilder } from '@baklavajs/core';

export const OcrdCisOcropyDewarpNode = new NodeBuilder('OcrdCisOcropyDewarp')
  .setName('ocrd-cis-ocropy-dewarp')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('max_neighbour', 'NumberOption', 0.05)
  .addOption('range', 'NumberOption', 4.0)
  .addOption('smoothness', 'NumberOption', 1.0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Dewarp line images with ocropy',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero or negative',
        max_neighbour:
          'maximum rate of foreground pixels intruding from neighbouring lines (line will not be processed above that)',
        range:
          'maximum vertical disposition or maximum margin (will be multiplied by mean centerline deltas to yield pixels); also the mean vertical padding',
        smoothness:
          'kernel size (relative to image height) of horizontal blur applied to foreground to find the center line; the smaller the more dynamic (0.1 would be a better default)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
