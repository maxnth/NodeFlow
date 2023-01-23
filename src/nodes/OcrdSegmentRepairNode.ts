import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentRepairNode = new NodeBuilder('OcrdSegmentRepair')
  .setName('ocrd-segment-repair')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('plausibilize', 'CheckboxOption', false)
  .addOption('plausibilize_merge_min_overlap', 'NumberOption', 0.9)
  .addOption('sanitize', 'CheckboxOption', false)
  .addOption('sanitize_padding', 'IntegerOption', 5)
  .addOption('simplify', 'NumberOption', 0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Analyse and repair region segmentation; at least ensure validity and consistency of coordinates.',
    }),
    'SidebarDescriptionOption'
  )
  .build();
