import { NodeBuilder } from '@baklavajs/core';

export const OcrdPagetopdfNode = new NodeBuilder('OcrdPagetopdf')
  .setName('ocrd-pagetopdf')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('ext', 'InputOption', '.pdf')
  .addOption('font', 'InputOption', '')
  .addOption('multipage', 'InputOption', '')
  .addOption('negative2zero', 'CheckboxOption', false)
  .addOption('outlines', 'SelectOption', '', undefined, {
    items: ['', 'region', 'line', 'word', 'glyph'],
  })
  .addOption('pagelabel', 'SelectOption', 'pageId', undefined, {
    items: [
      'pagenumber',
      'pageId',
      'basename',
      'basename_without_extension',
      'local_filename',
      'ID',
      'url',
    ],
  })
  .addOption('script-args', 'InputOption', '')
  .addOption('textequiv_level', 'SelectOption', '', undefined, {
    items: ['', 'region', 'line', 'word', 'glyph'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Convert text and layout annotations to PDF format (overlaying original image with text layer and polygon outlines)',
      parameter_descriptions: {
        ext: 'Output filename extension',
        font: 'Font file to be used in PDF file. If unset, AletheiaSans.ttf is used. (Make sure to pick a font which covers all glyphs!)',
        multipage:
          'Merge all PDFs into one mulitpage file. The value is used as filename for the pdf.',
        negative2zero: 'Set all negative box values to 0',
        outlines:
          'What segment hierarchy to draw coordinate outlines for. If unset, no outlines are drawn.',
        pagelabel:
          "Parameter for 'multipage': Set the page information, which will be used as pagelabel. Default is 'pageId', e.g. the option 'pagenumber' will create numbered pagelabel consecutively",
        'script-args':
          'Extra arguments to PageToPdf (see https://github.com/PRImA-Research-Lab/prima-page-to-pdf)',
        textequiv_level:
          'What segment hierarchy level to render text output from. If unset, no text is rendered.',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
