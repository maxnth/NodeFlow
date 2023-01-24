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
      parameter_descriptions: {
        feature_filter:
          'Comma-separated list of forbidden image features (e.g. `binarized,despeckled`)',
        feature_selector:
          'Comma-separated list of required image features (e.g. `binarized,despeckled`)',
        transform_coordinates:
          're-calculate coordinates for all segments of the structural hierarchy to be consistent with the coordinate system of the chosen image again (vital after cropping, deskewing etc; disable only if input coordinates must be assumed to be inconsistent with the original)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
