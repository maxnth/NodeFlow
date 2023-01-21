import { NodeBuilder } from '@baklavajs/core';

export const OcrdAnybaseocrLayoutAnalysisNode = new NodeBuilder(
  'OcrdAnybaseocrLayoutAnalysis'
)
  .setName('ocrd-anybaseocr-layout-analysis')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('batch_size', 'IntegerOption', 4)
  .addOption('class_mapping_path', 'TextOption', 'mapping_densenet.pickle')
  .addOption('model_path', 'TextOption', 'structure_analysis')
  .build();
