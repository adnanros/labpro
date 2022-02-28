import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChemicalAnalysisOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChemicalAnalysisMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestPackChemicalAnalysisMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestPackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestGroupTestPackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChemicalAnalysisChemicalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChemicalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChemicalImpactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImpactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChemicalAnalysisResultMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocalUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SampleCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImpactCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ChemicalAnalysisOrder {
  readonly id: string;
  readonly order: Order;
  readonly chemicalAnalysis: ChemicalAnalysis;
  readonly chemicalAnalysisResults?: (ChemicalAnalysisResult | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChemicalAnalysisOrder, ChemicalAnalysisOrderMetaData>);
  static copyOf(source: ChemicalAnalysisOrder, mutator: (draft: MutableModel<ChemicalAnalysisOrder, ChemicalAnalysisOrderMetaData>) => MutableModel<ChemicalAnalysisOrder, ChemicalAnalysisOrderMetaData> | void): ChemicalAnalysisOrder;
}

export declare class Order {
  readonly id: string;
  readonly localUserId: string;
  readonly count: number;
  readonly purchasedDate: string;
  readonly samplingDate: string;
  readonly resultDate: string;
  readonly orderStatus: string;
  readonly paymentStatus: string;
  readonly email: string;
  readonly name: string;
  readonly addressPart1: string;
  readonly addressPart2: string;
  readonly contactNumber: string;
  readonly profileImageLink: string;
  readonly country: string;
  readonly city: string;
  readonly postalCode: string;
  readonly company: string;
  readonly chemicalAnalysisIds: string;
  readonly chemicalAnalysisOrder?: (ChemicalAnalysisOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class ChemicalAnalysis {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly discount: string;
  readonly description: string;
  readonly testPackChemicalAnalysis?: (TestPackChemicalAnalysis | null)[];
  readonly chemicalAnalysisChemical?: (ChemicalAnalysisChemical | null)[];
  readonly chemicalAnalysisOrder?: (ChemicalAnalysisOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChemicalAnalysis, ChemicalAnalysisMetaData>);
  static copyOf(source: ChemicalAnalysis, mutator: (draft: MutableModel<ChemicalAnalysis, ChemicalAnalysisMetaData>) => MutableModel<ChemicalAnalysis, ChemicalAnalysisMetaData> | void): ChemicalAnalysis;
}

export declare class TestPackChemicalAnalysis {
  readonly id: string;
  readonly testpack: TestPack;
  readonly chemicalAnalysis: ChemicalAnalysis;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TestPackChemicalAnalysis, TestPackChemicalAnalysisMetaData>);
  static copyOf(source: TestPackChemicalAnalysis, mutator: (draft: MutableModel<TestPackChemicalAnalysis, TestPackChemicalAnalysisMetaData>) => MutableModel<TestPackChemicalAnalysis, TestPackChemicalAnalysisMetaData> | void): TestPackChemicalAnalysis;
}

export declare class TestPack {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly testGroupTestPack?: (TestGroupTestPack | null)[];
  readonly testPackChemicalAnalysis?: (TestPackChemicalAnalysis | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TestPack, TestPackMetaData>);
  static copyOf(source: TestPack, mutator: (draft: MutableModel<TestPack, TestPackMetaData>) => MutableModel<TestPack, TestPackMetaData> | void): TestPack;
}

export declare class TestGroupTestPack {
  readonly id: string;
  readonly testpack: TestPack;
  readonly testgroup: TestGroup;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TestGroupTestPack, TestGroupTestPackMetaData>);
  static copyOf(source: TestGroupTestPack, mutator: (draft: MutableModel<TestGroupTestPack, TestGroupTestPackMetaData>) => MutableModel<TestGroupTestPack, TestGroupTestPackMetaData> | void): TestGroupTestPack;
}

export declare class TestGroup {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly includedTestsDesc?: string;
  readonly includedReportsDesc?: string;
  readonly sampleCategoryId: string;
  readonly testGroupTestPack?: (TestGroupTestPack | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TestGroup, TestGroupMetaData>);
  static copyOf(source: TestGroup, mutator: (draft: MutableModel<TestGroup, TestGroupMetaData>) => MutableModel<TestGroup, TestGroupMetaData> | void): TestGroup;
}

export declare class ChemicalAnalysisChemical {
  readonly id: string;
  readonly chemical: Chemical;
  readonly chemicalAnalysis: ChemicalAnalysis;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChemicalAnalysisChemical, ChemicalAnalysisChemicalMetaData>);
  static copyOf(source: ChemicalAnalysisChemical, mutator: (draft: MutableModel<ChemicalAnalysisChemical, ChemicalAnalysisChemicalMetaData>) => MutableModel<ChemicalAnalysisChemical, ChemicalAnalysisChemicalMetaData> | void): ChemicalAnalysisChemical;
}

export declare class Chemical {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly chemicalAnalysisChemical?: (ChemicalAnalysisChemical | null)[];
  readonly chemicalImpacts?: (ChemicalImpact | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chemical, ChemicalMetaData>);
  static copyOf(source: Chemical, mutator: (draft: MutableModel<Chemical, ChemicalMetaData>) => MutableModel<Chemical, ChemicalMetaData> | void): Chemical;
}

export declare class ChemicalImpact {
  readonly id: string;
  readonly chemical: Chemical;
  readonly impact: Impact;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChemicalImpact, ChemicalImpactMetaData>);
  static copyOf(source: ChemicalImpact, mutator: (draft: MutableModel<ChemicalImpact, ChemicalImpactMetaData>) => MutableModel<ChemicalImpact, ChemicalImpactMetaData> | void): ChemicalImpact;
}

export declare class Impact {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly iconLink?: string;
  readonly impactCategoryId: string;
  readonly chemicalImpacts?: (ChemicalImpact | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Impact, ImpactMetaData>);
  static copyOf(source: Impact, mutator: (draft: MutableModel<Impact, ImpactMetaData>) => MutableModel<Impact, ImpactMetaData> | void): Impact;
}

export declare class ChemicalAnalysisResult {
  readonly id: string;
  readonly chemicalAnalysisOrderId: string;
  readonly chemical?: Chemical;
  readonly detection: number;
  readonly resultType: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChemicalAnalysisResult, ChemicalAnalysisResultMetaData>);
  static copyOf(source: ChemicalAnalysisResult, mutator: (draft: MutableModel<ChemicalAnalysisResult, ChemicalAnalysisResultMetaData>) => MutableModel<ChemicalAnalysisResult, ChemicalAnalysisResultMetaData> | void): ChemicalAnalysisResult;
}

export declare class LocalUser {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly addressPart1: string;
  readonly addressPart2: string;
  readonly contactNumber: string;
  readonly profileImageLink: string;
  readonly country: string;
  readonly city: string;
  readonly postalCode: string;
  readonly company: string;
  readonly orders?: (Order | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LocalUser, LocalUserMetaData>);
  static copyOf(source: LocalUser, mutator: (draft: MutableModel<LocalUser, LocalUserMetaData>) => MutableModel<LocalUser, LocalUserMetaData> | void): LocalUser;
}

export declare class SampleCategory {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly testGroups?: (TestGroup | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SampleCategory, SampleCategoryMetaData>);
  static copyOf(source: SampleCategory, mutator: (draft: MutableModel<SampleCategory, SampleCategoryMetaData>) => MutableModel<SampleCategory, SampleCategoryMetaData> | void): SampleCategory;
}

export declare class ImpactCategory {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly iconLink?: string;
  readonly impacts?: (Impact | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImpactCategory, ImpactCategoryMetaData>);
  static copyOf(source: ImpactCategory, mutator: (draft: MutableModel<ImpactCategory, ImpactCategoryMetaData>) => MutableModel<ImpactCategory, ImpactCategoryMetaData> | void): ImpactCategory;
}