import { NodeBuilder } from '@baklavajs/core';

export const OcrdEynollahSegmentNode = new NodeBuilder('OcrdEynollahSegment')
  .setName('ocrd-eynollah-segment')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('allow_scaling', 'CheckboxOption', false)
  .addOption('curved_line', 'CheckboxOption', false)
  .addOption('dpi', 'NumberOption', 0)
  .addOption('full_layout', 'CheckboxOption', true)
  .addOption('headers_off', 'CheckboxOption', false)
  .addOption('models', 'InputOption', 'undefined')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment page into regions and lines and do reading order detection with eynollah',
    }),
    'SidebarDescriptionOption'
  )
  .build();