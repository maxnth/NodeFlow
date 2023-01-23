import { NodeBuilder } from '@baklavajs/core';

export const OcrdRepairInconsistenciesNode = new NodeBuilder(
  'OcrdRepairInconsistencies'
)
  .setName('ocrd-repair-inconsistencies')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Re-order glyphs/words/lines top-down-left-right when textually inconsistent with their parents',
    }),
    'SidebarDescriptionOption'
  )
  .build();
