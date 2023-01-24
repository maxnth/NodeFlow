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
      parameter_descriptions: {
        batch_size: 'Batch size for generating test images',
        class_mapping_path: 'File path to layout structure classes',
        model_path: 'Directory path to layout structure classification model',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
