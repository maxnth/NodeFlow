import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentReplaceOriginalNode = new NodeBuilder(
  'OcrdSegmentReplaceOriginal'
)
  .setName('ocrd-segment-replace-original')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('feature_filter', 'InputOption', '')
  .addOption('feature_selector', 'InputOption', '')
  .addOption('transform_coordinates', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Extract page image (deskewed according to `/Page/@orientation` and cropped+masked along `/Page/Border`) and use it as @imageFilename, adjusting all coordinates',
    }),
    'SidebarDescriptionOption'
  )
  .build();
