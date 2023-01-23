import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrLayoutAnalysisNode = new NodeBuilder(
  'OcrdAnybaseocrLayoutAnalysis'
)
  .setName('ocrd-anybaseocr-layout-analysis')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('batch_size', 'IntegerOption', 4)
  .addOption('class_mapping_path', 'InputOption', 'mapping_densenet.pickle')
  .addOption('model_path', 'InputOption', 'structure_analysis')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Generates a table-of-content like document structure of the whole document.',
    }),
    'SidebarDescriptionOption'
  )
  .build();
