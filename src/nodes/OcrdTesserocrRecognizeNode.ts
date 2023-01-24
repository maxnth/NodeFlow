import { NodeBuilder } from '@baklavajs/core';

export const OcrdTesserocrRecognizeNode = new NodeBuilder(
  'OcrdTesserocrRecognize'
)
  .setName('ocrd-tesserocr-recognize')
  .addInputInterface('Input')
  .addOutputInterface('Output')
  .addOption('auto_model', 'CheckboxOption', false)
  .addOption('block_polygons', 'CheckboxOption', false)
  .addOption('char_blacklist', 'InputOption', '')
  .addOption('char_unblacklist', 'InputOption', '')
  .addOption('char_whitelist', 'InputOption', '')
  .addOption('dpi', 'NumberOption', 0)
  .addOption('find_staves', 'CheckboxOption', false)
  .addOption('find_tables', 'CheckboxOption', true)
  .addOption('model', 'InputOption', 'undefined')
  .addOption('oem', 'SelectOption', 'DEFAULT', undefined, {
    items: [
      'TESSERACT_ONLY',
      'LSTM_ONLY',
      'TESSERACT_LSTM_COMBINED',
      'DEFAULT',
    ],
  })
  .addOption('overwrite_segments', 'CheckboxOption', false)
  .addOption('overwrite_text', 'CheckboxOption', true)
  .addOption('padding', 'IntegerOption', 0)
  .addOption('raw_lines', 'CheckboxOption', false)
  .addOption('segmentation_level', 'SelectOption', 'word', undefined, {
    items: ['region', 'cell', 'line', 'word', 'glyph', 'none'],
  })
  .addOption('shrink_polygons', 'CheckboxOption', false)
  .addOption('sparse_text', 'CheckboxOption', false)
  .addOption('textequiv_level', 'SelectOption', 'word', undefined, {
    items: ['region', 'cell', 'line', 'word', 'glyph', 'none'],
  })
  .addOption(
    'Description',
    'ButtonOption',
    () => ({
      description:
        'Segment and/or recognize text with Tesseract (using annotated derived images, or masking and cropping images from coordinate polygons) on any level of the PAGE hierarchy.',
      parameter_descriptions: {
        auto_model:
          'Prefer models performing best (by confidence) per segment (if multiple given in `model`). Repeats the OCR of the best model once (i.e. slower). (Use as a fallback to xpath_model if you do not trust script/language detection.)',
        block_polygons:
          'When detecting regions, annotate polygon coordinates instead of bounding box rectangles by querying Tesseract accordingly.',
        char_blacklist:
          'When recognizing text, enumeration of character hypotheses (from the model) to suppress; overruled by unblacklist if set.',
        char_unblacklist:
          'When recognizing text, enumeration of character hypotheses (from the model) to allow inclusively.',
        char_whitelist:
          'When recognizing text, enumeration of character hypotheses (from the model) to allow exclusively; overruled by blacklist if set.',
        dpi: 'pixel density in dots per inch (overrides any meta-data in the images)',
        find_staves:
          "When detecting regions, recognize music staves as non-text, suppressing it in the binary image (Tesseract's ``pageseg_apply_music_mask``). Note that this might wrongly detect tables as staves.",
        find_tables:
          "When detecting regions, recognise tables as table regions (Tesseract's ``textord_tabfind_find_tables=1``).",
        model:
          'The tessdata text recognition model to apply (an ISO 639-3 language specification or some other basename, e.g. deu-frak or Fraktur).',
        oem: 'Tesseract OCR engine mode to use:\n* Run Tesseract only - fastest,\n* Run just the LSTM line recognizer. (>=v4.00),\n*Run the LSTM recognizer, but allow fallback to Tesseract when things get difficult. (>=v4.00),\n*Run both and combine results - best accuracy.',
        overwrite_segments:
          'If ``segmentation_level`` is not none, but an element already contains segments, remove them and segment again. Otherwise use the existing segments of that element.',
        overwrite_text:
          'If ``textequiv_level`` is not none, but a segment already contains TextEquivs, remove them and replace with recognised text. Otherwise add new text as alternative. (Only the first entry is projected upwards.)',
        padding:
          'Extend detected region/cell/line/word rectangles by this many (true) pixels, or extend existing region/line/word images (i.e. the annotated AlternativeImage if it exists or the higher-level image cropped to the bounding box and masked by the polygon otherwise) by this many (background/white) pixels on each side before recognition.',
        raw_lines:
          'When detecting lines, do not attempt additional segmentation (baseline+xheight+ascenders/descenders prediction) on line images. Can increase accuracy for certain workflows. Disable when line segments/images may contain components of more than 1 line, or larger gaps/white-spaces.',
        segmentation_level:
          'Highest PAGE XML hierarchy level to remove existing annotation from and detect segments for (before iterating downwards); if ``none``, does not attempt any new segmentation; if ``cell``, starts at table regions, detecting text regions (cells). Ineffective when lower than ``textequiv_level``.',
        shrink_polygons:
          'When detecting any segments, annotate polygon coordinates instead of bounding box rectangles by projecting the convex hull of all symbols.',
        sparse_text:
          "When detecting regions, use 'sparse text' page segmentation mode (finding as much text as possible in no particular order): only text regions, single lines without vertical or horizontal space.",
        tesseract_parameters:
          'Dictionary of additional Tesseract runtime variables (cf. tesseract --print-parameters), string values.',
        textequiv_level:
          'Lowest PAGE XML hierarchy level to re-use or detect segments for and add the TextEquiv results to (before projecting upwards); if ``none``, adds segmentation down to the glyph level, but does not attempt recognition at all; if ``cell``, stops short before text lines, adding text of text regions inside tables (cells) or on page level only.',
        xpath_model:
          "Prefer models mapped according to results of XPath queries into the segment. (As a convenience, `@language` and `@script` also match their upwards `@primary*` and `@secondary*` variants where applicable.) If no queries / mappings match (or under the default empty parameter), then fall back to `model`. If there are multiple matches, combine their results. (Example: {'starts-with(@script,\"Latn\")': 'Latin', 'starts-with(@script,\"Grek\")': 'Greek', '@language=\"Latin\"': 'lat', '@language=\"Greek\"': 'grc+ell', 'ancestor::TextRegion/@type=\"page-number\"': 'eng'})",
        xpath_parameters:
          "Set additional Tesseract runtime variables according to results of XPath queries into the segment. (As a convenience, `@language` and `@script` also match their upwards `@primary*` and `@secondary*` variants where applicable.) (Example: {'ancestor::TextRegion/@type=\"page-number\"': {'char_whitelist': '0123456789-'}, 'contains(@custom,\"ISBN\")': {'char_whitelist': '0123456789-'}})",
      },
    }),
    'SidebarDescriptionOption'
  )
  .build();
