import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentReplacePageNode = new NodeBuilder(
  'OcrdSegmentReplacePage'
)
  .setName('ocrd-segment-replace-page')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('transform_coordinates', 'CheckboxOption', true)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Replace everything below page level with another annotation, adjusting all coordinates',
      parameter_descriptions: {
        transform_coordinates:
          're-calculate coordinates for all segments of the structural hierarchy to be consistent with the coordinate system of the first input file group (vital after cropping, deskewing etc; disable only if input coordinates can be assumed to be consistent with the second input file group)',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
