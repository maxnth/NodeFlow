import { NodeBuilder } from '@baklavajs/core';

export const OcrdRepairInconsistenciesNode = new NodeBuilder(
  'OcrdRepairInconsistencies'
)
  .setName('ocrd-repair-inconsistencies')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .build();
