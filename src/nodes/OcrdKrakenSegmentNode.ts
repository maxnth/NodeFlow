import { NodeBuilder } from '@baklavajs/core';

export const OcrdKrakenSegmentNode = new NodeBuilder('OcrdKrakenSegment')
  .setName('ocrd-kraken-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('black_colseps', 'CheckboxOption', false)
  .addOption('blla_model', 'InputOption', 'blla.mlmodel')
  .addOption('device', 'InputOption', 'cpu')
  .addOption('maxcolseps', 'IntegerOption', 2)
  .addOption('remove_hlines', 'CheckboxOption', true)
  .addOption('scale', 'NumberOption', 0)
  .addOption('text_direction', 'SelectOption', 'horizontal-lr', undefined, {
    items: ['horizontal-lr', 'horizontal-rl', 'vertical-lr', 'vertical-rl'],
  })
  .addOption('use_legacy', 'CheckboxOption', false)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Block segmentation with kraken',
      parameter_descriptions: {
        black_colseps:
          'Whether column separators are assumed to be vertical black lines or not',
        blla_classes:
          'Class mapping for the region types trained into blla_model.',
        blla_model:
          'Model used for baseline detection and page segmentation. Ignored if use_legacy.',
        device: "GPU ID or 'cpu' to run on CPU only",
        maxcolseps:
          'Maximum number of column separators. Set to 0 for single-column text to avoid unnecessary computation.',
        remove_hlines: 'Remove horizontal colseps before segmentation',
        scale: 'mean xheight size of glyphs (guessed if zero)',
        text_direction: 'Sets principal text direction',
        use_legacy:
          'Use legacy box segmenter as opposed to neural net baseline segmenter',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
