import { NodeBuilder } from '@baklavajs/core';

export const OcrdSbbTextlineDetectorNode = new NodeBuilder(
  'OcrdSbbTextlineDetector'
)
  .setName('ocrd-sbb-textline-detector')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('model', 'InputOption', 'undefined')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Printspace, region and textline detection',
      parameter_descriptions: {
        model:
          'Path to directory containing models to be used (See https://qurator-data.de/sbb_textline_detector/)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
