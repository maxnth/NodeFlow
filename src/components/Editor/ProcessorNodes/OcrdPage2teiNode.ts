import { NodeBuilder } from '@baklavajs/core';

export const OcrdPage2teiNode = new NodeBuilder('OcrdPage2tei')
  .setName('ocrd-page2tei')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .build();