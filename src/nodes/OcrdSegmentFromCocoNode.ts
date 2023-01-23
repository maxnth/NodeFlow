import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentFromCocoNode = new NodeBuilder('OcrdSegmentFromCoco')
  .setName('ocrd-segment-from-coco')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Import region segmentation from COCO detection format JSON (for all pages). Input fileGrp format is `base,COCO` (i.e. PAGE or original image files first, COCO file second).',
    }),
    'SidebarDescriptionOption'
  )
  .build();
