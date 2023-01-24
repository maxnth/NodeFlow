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
      parameter_descriptions: {
        colordict:
          "Mapping from color values in the input masks to region types to annotate; color must be encoded hexadecimal (e.g. '00FF00'); region type equals the element name in PAGE-XML, optionally followed by a colon and a subtype (e.g. 'TextRegion:paragraph'; unmapped colors will be ignored (i.e. treated as background)). Default is PageViewer color scheme. Cf. colordict.json output and colordict parameter of ocrd-segment-extract-pages.",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
