import { NodeBuilder } from '@baklavajs/core';

export const OcrdPage2teiNode = new NodeBuilder('OcrdPage2tei')
  .setName('ocrd-page2tei')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description: 'Convert PAGE-XML to TEI-C',
      parameter_descriptions: {
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images); disabled when zero',
        impl: 'The name of the actual binarization algorithm',
        k: "Sauvola's formulae parameter (foreground weight decreases with k); for Multiscale, multiplied to yield default 0.2/0.3/0.5; for Singh, multiplied to yield default 0.06; for Niblack, multiplied to yield default -0.2; for Wolf/Kim, used directly; for Otsu, does not apply",
        'win-size':
          'The (odd) window size in pixels; when zero (default), set to DPI (or 301); for Otsu, does not apply',
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
