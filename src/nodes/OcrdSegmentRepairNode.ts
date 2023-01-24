import { NodeBuilder } from '@baklavajs/core';

export const OcrdSegmentRepairNode = new NodeBuilder('OcrdSegmentRepair')
  .setName('ocrd-segment-repair')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('plausibilize', 'CheckboxOption', false)
  .addOption('plausibilize_merge_min_overlap', 'NumberOption', 0.9)
  .addOption('sanitize', 'CheckboxOption', false)
  .addOption('sanitize_padding', 'IntegerOption', 5)
  .addOption('simplify', 'NumberOption', 0)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Analyse and repair region segmentation; at least ensure validity and consistency of coordinates.',
      parameter_descriptions: {
        plausibilize:
          'Identify and remove redundancies on text regions and text lines (deleting/merging/shrinking where overlaps occur).',
        plausibilize_merge_min_overlap:
          'When merging a region or line almost contained in another, require at least this ratio of area is shared with the other.',
        sanitize:
          'Shrink each region such that its coordinates become the minimal concave hull of its binary foreground. (Assumes that a perfect binarization is available.)',
        sanitize_padding:
          'When shrinking a region, enlarge the resulting hull by this amount of pixels in each direction.',
        simplify:
          'Distance (in px) used to simplify all segment polygons. (Avoid values larger than xheight/scale, or corners will be chopped off.) Set to 0 to disable.',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
