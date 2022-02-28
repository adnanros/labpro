// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChemicalAnalysisOrder, Order, ChemicalAnalysis, TestPackChemicalAnalysis, TestPack, TestGroupTestPack, TestGroup, ChemicalAnalysisChemical, Chemical, ChemicalImpact, Impact, ChemicalAnalysisResult, LocalUser, SampleCategory, ImpactCategory } = initSchema(schema);

export {
  ChemicalAnalysisOrder,
  Order,
  ChemicalAnalysis,
  TestPackChemicalAnalysis,
  TestPack,
  TestGroupTestPack,
  TestGroup,
  ChemicalAnalysisChemical,
  Chemical,
  ChemicalImpact,
  Impact,
  ChemicalAnalysisResult,
  LocalUser,
  SampleCategory,
  ImpactCategory
};