import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentFromMasksNode = new NodeBuilder('OcrdSegmentFromMasks')
  .setName('ocrd-segment-from-masks')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Import region segmentation from mask images (segments filled with colors encoding classes). Input fileGrp format is `base,mask` (i.e. PAGE or original image files first, mask image files second).',
    }),
    'SidebarDescriptionOption'
  )
  .build();
