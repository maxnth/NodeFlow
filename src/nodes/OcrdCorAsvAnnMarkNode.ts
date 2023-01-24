import { NodeBuilder } from '@baklavajs/core';

export const OcrdCorAsvAnnMarkNode = new NodeBuilder('OcrdCorAsvAnnMark')
  .setName('ocrd-cor-asv-ann-mark')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('command', 'InputOption', 'undefined')
  .addOption('format', 'InputOption', 'conf')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'mark words not found by a spellchecker',
      parameter_descriptions: {
        command:
          "external tool to query word forms, e.g. 'hunspell -i utf-8 -d de_DE,en_US -w'",
        format:
          "how unknown words should be marked; if 'conf', then writes @conf=0.123, otherwise writes that value into @comments",
        normalization:
          "mapping of characters prior to spellcheck, e.g. {'\u017f': 's', 'a\u0364': '\u00e4'}",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
