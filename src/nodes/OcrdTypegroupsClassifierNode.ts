import { NodeBuilder } from '@baklavajs/core';

export const OcrdTypegroupsClassifierNode = new NodeBuilder(
  'OcrdTypegroupsClassifier'
)
  .setName('ocrd-typegroups-classifier')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('level', 'SelectOption', 'page', undefined, {
    items: ['page', 'region'],
  })
  .addOption('network', 'InputOption', 'undefined')
  .addOption('stride', 'IntegerOption', 112)
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Classification of 15th century type groups',
      parameter_descriptions: {
        active_classes:
          'Restrict the set of decoded font type groups to the given list; if empty, then allow all classes (i.e. antiqua/bastarda/fraktur/gotico_antiqua/greek/hebrew/italic/rotunda/schwabacher/textura/other_font/not_a_font)',
        level: 'The PAGE-XML hierarchy level to operate on',
        network:
          'The file name of the neural network to use, including sufficient path information',
        stride:
          'Stride applied to the CNN on the image. Should be between 1 and 224. Smaller values increase the computation time.',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
