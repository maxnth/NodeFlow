import { Editor } from '@baklavajs/core';
import { OcrdAnybaseocrBinarizeNode } from '../ProcessorNodes/OcrdAnybaseocrBinarizeNode';
import { OcrdAnybaseocrBlockSegmentationNode } from '../ProcessorNodes/OcrdAnybaseocrBlockSegmentationNode';
import { OcrdAnybaseocrCropNode } from '../ProcessorNodes/OcrdAnybaseocrCropNode';
import { OcrdAnybaseocrDeskewNode } from '../ProcessorNodes/OcrdAnybaseocrDeskewNode';
import { OcrdAnybaseocrDewarpNode } from '../ProcessorNodes/OcrdAnybaseocrDewarpNode';
import { OcrdAnybaseocrLayoutAnalysisNode } from '../ProcessorNodes/OcrdAnybaseocrLayoutAnalysisNode';
import { OcrdAnybaseocrTextlineNode } from '../ProcessorNodes/OcrdAnybaseocrTextlineNode';
import { OcrdAnybaseocrTisegNode } from '../ProcessorNodes/OcrdAnybaseocrTisegNode';
import { OcrdCalamariRecognizeNode } from '../ProcessorNodes/OcrdCalamariRecognizeNode';
import { OcrdCisAlignNode } from '../ProcessorNodes/OcrdCisAlignNode';
import { OcrdCisOcropyBinarizeNode } from '../ProcessorNodes/OcrdCisOcropyBinarizeNode';
import { OcrdCisOcropyClipNode } from '../ProcessorNodes/OcrdCisOcropyClipNode';
import { OcrdCisOcropyDenoiseNode } from '../ProcessorNodes/OcrdCisOcropyDenoiseNode';
import { OcrdCisOcropyDeskewNode } from '../ProcessorNodes/OcrdCisOcropyDeskewNode';
import { OcrdCisOcropyDewarpNode } from '../ProcessorNodes/OcrdCisOcropyDewarpNode';
import { OcrdCisOcropyRecNode } from '../ProcessorNodes/OcrdCisOcropyRecNode';
import { OcrdCisOcropyRecognizeNode } from '../ProcessorNodes/OcrdCisOcropyRecognizeNode';
import { OcrdCisOcropyResegmentNode } from '../ProcessorNodes/OcrdCisOcropyResegmentNode';
import { OcrdCisOcropySegmentNode } from '../ProcessorNodes/OcrdCisOcropySegmentNode';
import { OcrdCisOcropyTrainNode } from '../ProcessorNodes/OcrdCisOcropyTrainNode';
import { OcrdCisPostcorrectNode } from '../ProcessorNodes/OcrdCisPostcorrectNode';
import { OcrdCorAsvAnnAlignNode } from '../ProcessorNodes/OcrdCorAsvAnnAlignNode';
import { OcrdCorAsvAnnEvaluateNode } from '../ProcessorNodes/OcrdCorAsvAnnEvaluateNode';
import { OcrdCorAsvAnnJoinNode } from '../ProcessorNodes/OcrdCorAsvAnnJoinNode';
import { OcrdCorAsvAnnMarkNode } from '../ProcessorNodes/OcrdCorAsvAnnMarkNode';
import { OcrdCorAsvAnnProcessNode } from '../ProcessorNodes/OcrdCorAsvAnnProcessNode';
import { OcrdCorAsvFstProcessNode } from '../ProcessorNodes/OcrdCorAsvFstProcessNode';
import { OcrdDetectron2SegmentNode } from '../ProcessorNodes/OcrdDetectron2SegmentNode';
import { OcrdDinglehopperNode } from '../ProcessorNodes/OcrdDinglehopperNode';
import { OcrdEynollahSegmentNode } from '../ProcessorNodes/OcrdEynollahSegmentNode';
import { OcrdFileformatTransformNode } from '../ProcessorNodes/OcrdFileformatTransformNode';
import { OcrdIm6convertNode } from '../ProcessorNodes/OcrdIm6convertNode';
import { OcrdKeraslmRateNode } from '../ProcessorNodes/OcrdKeraslmRateNode';
import { OcrdKrakenBinarizeNode } from '../ProcessorNodes/OcrdKrakenBinarizeNode';
import { OcrdKrakenRecognizeNode } from '../ProcessorNodes/OcrdKrakenRecognizeNode';
import { OcrdKrakenSegmentNode } from '../ProcessorNodes/OcrdKrakenSegmentNode';
import { OcrdOcropySegmentNode } from '../ProcessorNodes/OcrdOcropySegmentNode';
import { OcrdOlenaBinarizeNode } from '../ProcessorNodes/OcrdOlenaBinarizeNode';
import { OcrdPage2teiNode } from '../ProcessorNodes/OcrdPage2teiNode';
import { OcrdPagetopdfNode } from '../ProcessorNodes/OcrdPagetopdfNode';
import { OcrdPcSegmentationNode } from '../ProcessorNodes/OcrdPcSegmentationNode';
import { OcrdPreprocessImageNode } from '../ProcessorNodes/OcrdPreprocessImageNode';
import { OcrdRepairInconsistenciesNode } from '../ProcessorNodes/OcrdRepairInconsistenciesNode';
import { OcrdSbbBinarizeNode } from '../ProcessorNodes/OcrdSbbBinarizeNode';
import { OcrdSbbTextlineDetectorNode } from '../ProcessorNodes/OcrdSbbTextlineDetectorNode';
import { OcrdSegmentEvaluateNode } from '../ProcessorNodes/OcrdSegmentEvaluateNode';
import { OcrdSegmentExtractGlyphsNode } from '../ProcessorNodes/OcrdSegmentExtractGlyphsNode';
import { OcrdSegmentExtractLinesNode } from '../ProcessorNodes/OcrdSegmentExtractLinesNode';
import { OcrdSegmentExtractPagesNode } from '../ProcessorNodes/OcrdSegmentExtractPagesNode';
import { OcrdSegmentExtractRegionsNode } from '../ProcessorNodes/OcrdSegmentExtractRegionsNode';
import { OcrdSegmentExtractWordsNode } from '../ProcessorNodes/OcrdSegmentExtractWordsNode';
import { OcrdSegmentFromCocoNode } from '../ProcessorNodes/OcrdSegmentFromCocoNode';
import { OcrdSegmentFromMasksNode } from '../ProcessorNodes/OcrdSegmentFromMasksNode';
import { OcrdSegmentProjectNode } from '../ProcessorNodes/OcrdSegmentProjectNode';
import { OcrdSegmentRepairNode } from '../ProcessorNodes/OcrdSegmentRepairNode';
import { OcrdSegmentReplaceOriginalNode } from '../ProcessorNodes/OcrdSegmentReplaceOriginalNode';
import { OcrdSegmentReplacePageNode } from '../ProcessorNodes/OcrdSegmentReplacePageNode';
import { OcrdSegmentReplaceTextNode } from '../ProcessorNodes/OcrdSegmentReplaceTextNode';
import { OcrdSkimageBinarizeNode } from '../ProcessorNodes/OcrdSkimageBinarizeNode';
import { OcrdSkimageDenoiseNode } from '../ProcessorNodes/OcrdSkimageDenoiseNode';
import { OcrdSkimageDenoiseRawNode } from '../ProcessorNodes/OcrdSkimageDenoiseRawNode';
import { OcrdSkimageNormalizeNode } from '../ProcessorNodes/OcrdSkimageNormalizeNode';
import { OcrdTesserocrBinarizeNode } from '../ProcessorNodes/OcrdTesserocrBinarizeNode';
import { OcrdTesserocrCropNode } from '../ProcessorNodes/OcrdTesserocrCropNode';
import { OcrdTesserocrDeskewNode } from '../ProcessorNodes/OcrdTesserocrDeskewNode';
import { OcrdTesserocrFontshapeNode } from '../ProcessorNodes/OcrdTesserocrFontshapeNode';
import { OcrdTesserocrRecognizeNode } from '../ProcessorNodes/OcrdTesserocrRecognizeNode';
import { OcrdTesserocrSegmentNode } from '../ProcessorNodes/OcrdTesserocrSegmentNode';
import { OcrdTesserocrSegmentLineNode } from '../ProcessorNodes/OcrdTesserocrSegmentLineNode';
import { OcrdTesserocrSegmentRegionNode } from '../ProcessorNodes/OcrdTesserocrSegmentRegionNode';
import { OcrdTesserocrSegmentTableNode } from '../ProcessorNodes/OcrdTesserocrSegmentTableNode';
import { OcrdTesserocrSegmentWordNode } from '../ProcessorNodes/OcrdTesserocrSegmentWordNode';
import { OcrdTypegroupsClassifierNode } from '../ProcessorNodes/OcrdTypegroupsClassifierNode';

export function autoimportNodes(editor: any) {
  editor.registerNodeType(
    'ocrd-anybaseocr-binarize',
    OcrdAnybaseocrBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-binarize',
    OcrdCisOcropyBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-kraken-binarize',
    OcrdKrakenBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-olena-binarize',
    OcrdOlenaBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-sbb-binarize',
    OcrdSbbBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-skimage-binarize',
    OcrdSkimageBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-binarize',
    OcrdTesserocrBinarizeNode,
    'Binarization'
  );
  editor.registerNodeType(
    'ocrd-im6convert',
    OcrdIm6convertNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-preprocess-image',
    OcrdPreprocessImageNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-skimage-denoise-raw',
    OcrdSkimageDenoiseRawNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-skimage-normalize',
    OcrdSkimageNormalizeNode,
    'Image Enhancement'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-crop',
    OcrdAnybaseocrCropNode,
    'Cropping'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-crop',
    OcrdTesserocrCropNode,
    'Cropping'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-deskew',
    OcrdAnybaseocrDeskewNode,
    'Deskewing'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-deskew',
    OcrdCisOcropyDeskewNode,
    'Deskewing'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-deskew',
    OcrdTesserocrDeskewNode,
    'Deskewing'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-dewarp',
    OcrdAnybaseocrDewarpNode,
    'Dewarping'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-dewarp',
    OcrdCisOcropyDewarpNode,
    'Dewarping'
  );
  editor.registerNodeType(
    'ocrd-skimage-denoise',
    OcrdSkimageDenoiseNode,
    'Denoising'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-denoise',
    OcrdCisOcropyDenoiseNode,
    'Denoising'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-clip',
    OcrdCisOcropyClipNode,
    ' Clipping'
  );
  editor.registerNodeType('ocrd-cis-align', OcrdCisAlignNode, 'Text alignment');
  editor.registerNodeType(
    'ocrd-cor-asv-ann-align',
    OcrdCorAsvAnnAlignNode,
    'Text alignment'
  );
  editor.registerNodeType(
    'ocrd-typegroups-classifier',
    OcrdTypegroupsClassifierNode,
    'Font detection'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-resegment',
    OcrdCisOcropyResegmentNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-segment-project',
    OcrdSegmentProjectNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-repair-inconsistencies',
    OcrdRepairInconsistenciesNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-segment-repair',
    OcrdSegmentRepairNode,
    'Resegmentation'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-block-segmentation',
    OcrdAnybaseocrBlockSegmentationNode,
    'Layout Analysis (Block)'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-layout-analysis',
    OcrdAnybaseocrLayoutAnalysisNode,
    'Layout Analysis'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-textline',
    OcrdAnybaseocrTextlineNode,
    'Layout Analysis (Lines)'
  );
  editor.registerNodeType(
    'ocrd-anybaseocr-tiseg',
    OcrdAnybaseocrTisegNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment',
    OcrdTesserocrSegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-line',
    OcrdTesserocrSegmentLineNode,
    'Layout Analysis (Line)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-region',
    OcrdTesserocrSegmentRegionNode,
    'Layout Analysis (Region)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-table',
    OcrdTesserocrSegmentTableNode,
    'Layout Analysis (Table)'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-segment-word',
    OcrdTesserocrSegmentWordNode,
    'Layout Analysis (Word)'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-segment',
    OcrdCisOcropySegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-detectron2-segment',
    OcrdDetectron2SegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-eynollah-segment',
    OcrdEynollahSegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-kraken-segment',
    OcrdKrakenSegmentNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-pc-segmentation',
    OcrdPcSegmentationNode,
    'Layout Analysis (Full)'
  );
  editor.registerNodeType(
    'ocrd-sbb-textline-detector',
    OcrdSbbTextlineDetectorNode,
    'Layout Analysis (Line)'
  );
  editor.registerNodeType(
    'ocrd-calamari-recognize',
    OcrdCalamariRecognizeNode,
    'Text recognition'
  );
  editor.registerNodeType(
    'ocrd-cis-postcorrect',
    OcrdCisPostcorrectNode,
    'Post-correction'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-evaluate',
    OcrdCorAsvAnnEvaluateNode,
    'OCR Evaluation'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-process',
    OcrdCorAsvAnnProcessNode,
    'Post-correction'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-fst-process',
    OcrdCorAsvFstProcessNode,
    'Post-correction'
  );
  editor.registerNodeType(
    'ocrd-dinglehopper',
    OcrdDinglehopperNode,
    'OCR Evaluation'
  );
  editor.registerNodeType(
    'ocrd-ocropy-segment',
    OcrdOcropySegmentNode,
    'Image preprocessing'
  );
  editor.registerNodeType(
    'ocrd-segment-evaluate',
    OcrdSegmentEvaluateNode,
    'Layout Evaluation'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-recognize',
    OcrdTesserocrRecognizeNode,
    'Text recognition'
  );
  editor.registerNodeType(
    'ocrd-tesserocr-fontshape',
    OcrdTesserocrFontshapeNode,
    'Font style annotation'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-train',
    OcrdCisOcropyTrainNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-join',
    OcrdCorAsvAnnJoinNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cor-asv-ann-mark',
    OcrdCorAsvAnnMarkNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-keraslm-rate',
    OcrdKeraslmRateNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-kraken-recognize',
    OcrdKrakenRecognizeNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-segment-replace-text',
    OcrdSegmentReplaceTextNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-rec',
    OcrdCisOcropyRecNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-cis-ocropy-recognize',
    OcrdCisOcropyRecognizeNode,
    'Text recognition and optimization'
  );
  editor.registerNodeType(
    'ocrd-segment-replace-original',
    OcrdSegmentReplaceOriginalNode,
    'Adaptation of Coordinates'
  );
  editor.registerNodeType(
    'ocrd-segment-replace-page',
    OcrdSegmentReplacePageNode,
    'Adaptation of Coordinates'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-glyphs',
    OcrdSegmentExtractGlyphsNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-lines',
    OcrdSegmentExtractLinesNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-pages',
    OcrdSegmentExtractPagesNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-regions',
    OcrdSegmentExtractRegionsNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-extract-words',
    OcrdSegmentExtractWordsNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-from-coco',
    OcrdSegmentFromCocoNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-segment-from-masks',
    OcrdSegmentFromMasksNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-page2tei',
    OcrdPage2teiNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-pagetopdf',
    OcrdPagetopdfNode,
    'Format Conversion'
  );
  editor.registerNodeType(
    'ocrd-fileformat-transform',
    OcrdFileformatTransformNode,
    'Format Conversion'
  );
}
