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
      parameter_descriptions: {
        command:
          'shell command to operate on image files, with @INFILE as place-holder for the input file path, and @OUTFILE as place-holder for the output file path',
        input_feature_filter:
          'comma-separated list of forbidden image features (e.g. binarized,despeckled)',
        input_feature_selector:
          'comma-separated list of required image features (e.g. binarized,despeckled)',
        input_mimetype:
          "File format to save input images to (tool's expected input)",
        'level-of-operation': 'PAGE XML hierarchy level to operate on',
        output_feature_added:
          'image feature(s) to be added after this operation (if multiple, separate by comma)',
        output_mimetype:
          "File format to load output images from (tool's expected output)",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
