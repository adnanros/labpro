/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChemicalAnalysisOrderInput = {
  id?: string | null,
  orderId: string,
  chemicalAnalysisId: string,
};

export type ChemicalAnalysisOrder = {
  __typename: "ChemicalAnalysisOrder",
  id: string,
  orderId: string,
  chemicalAnalysisId: string,
  order: Order,
  createdAt: string,
  updatedAt: string,
  chemicalAnalysis: ChemicalAnalysis,
  chemicalAnalysisResults?: ModelChemicalAnalysisResultConnection | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  localUserId: string,
  count: number,
  purchasedDate: string,
  samplingDate: string,
  resultDate: string,
  orderStatus: string,
  paymentStatus: string,
  email: string,
  name: string,
  addressPart1: string,
  addressPart2: string,
  contactNumber: string,
  profileImageLink: string,
  country: string,
  city: string,
  postalCode: string,
  company: string,
  chemicalAnalysisIds: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  chemicalAnalysisOrder?: ModelChemicalAnalysisOrderConnection | null,
};

export type ModelChemicalAnalysisOrderConnection = {
  __typename: "ModelChemicalAnalysisOrderConnection",
  items:  Array<ChemicalAnalysisOrder | null >,
  nextToken?: string | null,
};

export type ChemicalAnalysis = {
  __typename: "ChemicalAnalysis",
  id: string,
  name: string,
  price: string,
  discount: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  testPackChemicalAnalysis?: ModelTestPackChemicalAnalysisConnection | null,
  chemicalAnalysisChemical?: ModelChemicalAnalysisChemicalConnection | null,
  chemicalAnalysisOrder?: ModelChemicalAnalysisOrderConnection | null,
};

export type ModelTestPackChemicalAnalysisConnection = {
  __typename: "ModelTestPackChemicalAnalysisConnection",
  items:  Array<TestPackChemicalAnalysis | null >,
  nextToken?: string | null,
};

export type TestPackChemicalAnalysis = {
  __typename: "TestPackChemicalAnalysis",
  id: string,
  testPackId: string,
  chemicalAnalysisId: string,
  createdAt: string,
  updatedAt: string,
  testpack: TestPack,
  chemicalAnalysis: ChemicalAnalysis,
};

export type TestPack = {
  __typename: "TestPack",
  id: string,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  testGroupTestPack?: ModelTestGroupTestPackConnection | null,
  testPackChemicalAnalysis?: ModelTestPackChemicalAnalysisConnection | null,
};

export type ModelTestGroupTestPackConnection = {
  __typename: "ModelTestGroupTestPackConnection",
  items:  Array<TestGroupTestPack | null >,
  nextToken?: string | null,
};

export type TestGroupTestPack = {
  __typename: "TestGroupTestPack",
  id: string,
  testPackId: string,
  testGroupId: string,
  createdAt: string,
  updatedAt: string,
  testgroup: TestGroup,
  testpack: TestPack,
};

export type TestGroup = {
  __typename: "TestGroup",
  id: string,
  name: string,
  description: string,
  includedTestsDesc?: string | null,
  includedReportsDesc?: string | null,
  sampleCategoryId: string,
  createdAt: string,
  updatedAt: string,
  testGroupTestPack?: ModelTestGroupTestPackConnection | null,
};

export type ModelChemicalAnalysisChemicalConnection = {
  __typename: "ModelChemicalAnalysisChemicalConnection",
  items:  Array<ChemicalAnalysisChemical | null >,
  nextToken?: string | null,
};

export type ChemicalAnalysisChemical = {
  __typename: "ChemicalAnalysisChemical",
  id: string,
  chemicalId: string,
  chemicalAnalysisId: string,
  createdAt: string,
  updatedAt: string,
  chemicalAnalysis: ChemicalAnalysis,
  chemical: Chemical,
};

export type Chemical = {
  __typename: "Chemical",
  id: string,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  chemicalAnalysisChemical?: ModelChemicalAnalysisChemicalConnection | null,
  chemicalImpacts?: ModelChemicalImpactConnection | null,
};

export type ModelChemicalImpactConnection = {
  __typename: "ModelChemicalImpactConnection",
  items:  Array<ChemicalImpact | null >,
  nextToken?: string | null,
};

export type ChemicalImpact = {
  __typename: "ChemicalImpact",
  id: string,
  chemicalId: string,
  impactId: string,
  createdAt: string,
  updatedAt: string,
  chemical: Chemical,
  impact: Impact,
};

export type Impact = {
  __typename: "Impact",
  id: string,
  name: string,
  description: string,
  iconLink?: string | null,
  impactCategoryId: string,
  createdAt: string,
  updatedAt: string,
  chemicalImpacts?: ModelChemicalImpactConnection | null,
};

export type ModelChemicalAnalysisResultConnection = {
  __typename: "ModelChemicalAnalysisResultConnection",
  items:  Array<ChemicalAnalysisResult | null >,
  nextToken?: string | null,
};

export type ChemicalAnalysisResult = {
  __typename: "ChemicalAnalysisResult",
  id: string,
  chemicalAnalysisOrderId: string,
  chemicalId: string,
  detection: number,
  resultType: string,
  createdAt: string,
  updatedAt: string,
  chemical?: Chemical | null,
};

export type CreateChemicalAnalysisResultInput = {
  id?: string | null,
  chemicalAnalysisOrderId: string,
  chemicalId: string,
  detection: number,
  resultType: string,
};

export type UpdateChemicalAnalysisResultInput = {
  id: string,
  chemicalAnalysisOrderId?: string | null,
  chemicalId?: string | null,
  detection?: number | null,
  resultType?: string | null,
};

export type CreateLocalUserInput = {
  email: string,
  name: string,
  addressPart1: string,
  addressPart2: string,
  contactNumber: string,
  profileImageLink: string,
  country: string,
  city: string,
  postalCode: string,
  company: string,
};

export type ModelLocalUserConditionInput = {
  name?: ModelStringInput | null,
  addressPart1?: ModelStringInput | null,
  addressPart2?: ModelStringInput | null,
  contactNumber?: ModelStringInput | null,
  profileImageLink?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  company?: ModelStringInput | null,
  and?: Array< ModelLocalUserConditionInput | null > | null,
  or?: Array< ModelLocalUserConditionInput | null > | null,
  not?: ModelLocalUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type LocalUser = {
  __typename: "LocalUser",
  email: string,
  name: string,
  addressPart1: string,
  addressPart2: string,
  contactNumber: string,
  profileImageLink: string,
  country: string,
  city: string,
  postalCode: string,
  company: string,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type UpdateLocalUserInput = {
  email: string,
  name?: string | null,
  addressPart1?: string | null,
  addressPart2?: string | null,
  contactNumber?: string | null,
  profileImageLink?: string | null,
  country?: string | null,
  city?: string | null,
  postalCode?: string | null,
  company?: string | null,
};

export type DeleteLocalUserInput = {
  email: string,
};

export type CreateSampleCategoryInput = {
  id?: string | null,
  name: string,
  description: string,
};

export type ModelSampleCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSampleCategoryConditionInput | null > | null,
  or?: Array< ModelSampleCategoryConditionInput | null > | null,
  not?: ModelSampleCategoryConditionInput | null,
};

export type SampleCategory = {
  __typename: "SampleCategory",
  id: string,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  testGroups?: ModelTestGroupConnection | null,
};

export type ModelTestGroupConnection = {
  __typename: "ModelTestGroupConnection",
  items:  Array<TestGroup | null >,
  nextToken?: string | null,
};

export type UpdateSampleCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteSampleCategoryInput = {
  id: string,
};

export type CreateTestGroupInput = {
  id?: string | null,
  name: string,
  description: string,
  includedTestsDesc?: string | null,
  includedReportsDesc?: string | null,
  sampleCategoryId: string,
};

export type ModelTestGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  includedTestsDesc?: ModelStringInput | null,
  includedReportsDesc?: ModelStringInput | null,
  sampleCategoryId?: ModelIDInput | null,
  and?: Array< ModelTestGroupConditionInput | null > | null,
  or?: Array< ModelTestGroupConditionInput | null > | null,
  not?: ModelTestGroupConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTestGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  includedTestsDesc?: string | null,
  includedReportsDesc?: string | null,
  sampleCategoryId?: string | null,
};

export type DeleteTestGroupInput = {
  id: string,
};

export type CreateTestGroupTestPackInput = {
  id?: string | null,
  testPackId: string,
  testGroupId: string,
};

export type ModelTestGroupTestPackConditionInput = {
  testPackId?: ModelIDInput | null,
  testGroupId?: ModelIDInput | null,
  and?: Array< ModelTestGroupTestPackConditionInput | null > | null,
  or?: Array< ModelTestGroupTestPackConditionInput | null > | null,
  not?: ModelTestGroupTestPackConditionInput | null,
};

export type UpdateTestGroupTestPackInput = {
  id: string,
  testPackId?: string | null,
  testGroupId?: string | null,
};

export type DeleteTestGroupTestPackInput = {
  id: string,
};

export type CreateTestPackInput = {
  id?: string | null,
  name: string,
  description: string,
};

export type ModelTestPackConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTestPackConditionInput | null > | null,
  or?: Array< ModelTestPackConditionInput | null > | null,
  not?: ModelTestPackConditionInput | null,
};

export type UpdateTestPackInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTestPackInput = {
  id: string,
};

export type CreateChemicalAnalysisInput = {
  id?: string | null,
  name: string,
  price: string,
  discount: string,
  description: string,
};

export type ModelChemicalAnalysisConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  discount?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChemicalAnalysisConditionInput | null > | null,
  or?: Array< ModelChemicalAnalysisConditionInput | null > | null,
  not?: ModelChemicalAnalysisConditionInput | null,
};

export type UpdateChemicalAnalysisInput = {
  id: string,
  name?: string | null,
  price?: string | null,
  discount?: string | null,
  description?: string | null,
};

export type DeleteChemicalAnalysisInput = {
  id: string,
};

export type CreateTestPackChemicalAnalysisInput = {
  id?: string | null,
  testPackId: string,
  chemicalAnalysisId: string,
};

export type ModelTestPackChemicalAnalysisConditionInput = {
  testPackId?: ModelIDInput | null,
  chemicalAnalysisId?: ModelIDInput | null,
  and?: Array< ModelTestPackChemicalAnalysisConditionInput | null > | null,
  or?: Array< ModelTestPackChemicalAnalysisConditionInput | null > | null,
  not?: ModelTestPackChemicalAnalysisConditionInput | null,
};

export type UpdateTestPackChemicalAnalysisInput = {
  id: string,
  testPackId?: string | null,
  chemicalAnalysisId?: string | null,
};

export type DeleteTestPackChemicalAnalysisInput = {
  id: string,
};

export type CreateChemicalInput = {
  id?: string | null,
  name: string,
  description: string,
};

export type ModelChemicalConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChemicalConditionInput | null > | null,
  or?: Array< ModelChemicalConditionInput | null > | null,
  not?: ModelChemicalConditionInput | null,
};

export type UpdateChemicalInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteChemicalInput = {
  id: string,
};

export type CreateChemicalAnalysisChemicalInput = {
  id?: string | null,
  chemicalId: string,
  chemicalAnalysisId: string,
};

export type ModelChemicalAnalysisChemicalConditionInput = {
  chemicalId?: ModelIDInput | null,
  chemicalAnalysisId?: ModelIDInput | null,
  and?: Array< ModelChemicalAnalysisChemicalConditionInput | null > | null,
  or?: Array< ModelChemicalAnalysisChemicalConditionInput | null > | null,
  not?: ModelChemicalAnalysisChemicalConditionInput | null,
};

export type UpdateChemicalAnalysisChemicalInput = {
  id: string,
  chemicalId?: string | null,
  chemicalAnalysisId?: string | null,
};

export type DeleteChemicalAnalysisChemicalInput = {
  id: string,
};

export type CreateImpactCategoryInput = {
  id?: string | null,
  name: string,
  description: string,
  iconLink?: string | null,
};

export type ModelImpactCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  iconLink?: ModelStringInput | null,
  and?: Array< ModelImpactCategoryConditionInput | null > | null,
  or?: Array< ModelImpactCategoryConditionInput | null > | null,
  not?: ModelImpactCategoryConditionInput | null,
};

export type ImpactCategory = {
  __typename: "ImpactCategory",
  id: string,
  name: string,
  description: string,
  iconLink?: string | null,
  createdAt: string,
  updatedAt: string,
  impacts?: ModelImpactConnection | null,
};

export type ModelImpactConnection = {
  __typename: "ModelImpactConnection",
  items:  Array<Impact | null >,
  nextToken?: string | null,
};

export type UpdateImpactCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  iconLink?: string | null,
};

export type DeleteImpactCategoryInput = {
  id: string,
};

export type CreateImpactInput = {
  id?: string | null,
  name: string,
  description: string,
  iconLink?: string | null,
  impactCategoryId: string,
};

export type ModelImpactConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  iconLink?: ModelStringInput | null,
  impactCategoryId?: ModelIDInput | null,
  and?: Array< ModelImpactConditionInput | null > | null,
  or?: Array< ModelImpactConditionInput | null > | null,
  not?: ModelImpactConditionInput | null,
};

export type UpdateImpactInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  iconLink?: string | null,
  impactCategoryId?: string | null,
};

export type DeleteImpactInput = {
  id: string,
};

export type CreateChemicalImpactInput = {
  id?: string | null,
  chemicalId: string,
  impactId: string,
};

export type ModelChemicalImpactConditionInput = {
  chemicalId?: ModelIDInput | null,
  impactId?: ModelIDInput | null,
  and?: Array< ModelChemicalImpactConditionInput | null > | null,
  or?: Array< ModelChemicalImpactConditionInput | null > | null,
  not?: ModelChemicalImpactConditionInput | null,
};

export type UpdateChemicalImpactInput = {
  id: string,
  chemicalId?: string | null,
  impactId?: string | null,
};

export type DeleteChemicalImpactInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  localUserId: string,
  count: number,
  purchasedDate: string,
  samplingDate: string,
  resultDate: string,
  orderStatus: string,
  paymentStatus: string,
  email: string,
  name: string,
  addressPart1: string,
  addressPart2: string,
  contactNumber: string,
  profileImageLink: string,
  country: string,
  city: string,
  postalCode: string,
  company: string,
  chemicalAnalysisIds: string,
};

export type ModelOrderConditionInput = {
  localUserId?: ModelStringInput | null,
  count?: ModelIntInput | null,
  purchasedDate?: ModelStringInput | null,
  samplingDate?: ModelStringInput | null,
  resultDate?: ModelStringInput | null,
  orderStatus?: ModelStringInput | null,
  paymentStatus?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  addressPart1?: ModelStringInput | null,
  addressPart2?: ModelStringInput | null,
  contactNumber?: ModelStringInput | null,
  profileImageLink?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  company?: ModelStringInput | null,
  chemicalAnalysisIds?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOrderInput = {
  id: string,
  localUserId?: string | null,
  count?: number | null,
  purchasedDate?: string | null,
  samplingDate?: string | null,
  resultDate?: string | null,
  orderStatus?: string | null,
  paymentStatus?: string | null,
  email?: string | null,
  name?: string | null,
  addressPart1?: string | null,
  addressPart2?: string | null,
  contactNumber?: string | null,
  profileImageLink?: string | null,
  country?: string | null,
  city?: string | null,
  postalCode?: string | null,
  company?: string | null,
  chemicalAnalysisIds?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelChemicalAnalysisOrderConditionInput = {
  orderId?: ModelIDInput | null,
  chemicalAnalysisId?: ModelIDInput | null,
  and?: Array< ModelChemicalAnalysisOrderConditionInput | null > | null,
  or?: Array< ModelChemicalAnalysisOrderConditionInput | null > | null,
  not?: ModelChemicalAnalysisOrderConditionInput | null,
};

export type UpdateChemicalAnalysisOrderInput = {
  id: string,
  orderId?: string | null,
  chemicalAnalysisId?: string | null,
};

export type DeleteChemicalAnalysisOrderInput = {
  id: string,
};

export type ModelChemicalAnalysisResultConditionInput = {
  chemicalAnalysisOrderId?: ModelIDInput | null,
  chemicalId?: ModelIDInput | null,
  detection?: ModelFloatInput | null,
  resultType?: ModelStringInput | null,
  and?: Array< ModelChemicalAnalysisResultConditionInput | null > | null,
  or?: Array< ModelChemicalAnalysisResultConditionInput | null > | null,
  not?: ModelChemicalAnalysisResultConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type DeleteChemicalAnalysisResultInput = {
  id: string,
};

export type ModelLocalUserFilterInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  addressPart1?: ModelStringInput | null,
  addressPart2?: ModelStringInput | null,
  contactNumber?: ModelStringInput | null,
  profileImageLink?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  company?: ModelStringInput | null,
  and?: Array< ModelLocalUserFilterInput | null > | null,
  or?: Array< ModelLocalUserFilterInput | null > | null,
  not?: ModelLocalUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLocalUserConnection = {
  __typename: "ModelLocalUserConnection",
  items:  Array<LocalUser | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  localUserId?: ModelStringInput | null,
  count?: ModelIntInput | null,
  purchasedDate?: ModelStringInput | null,
  samplingDate?: ModelStringInput | null,
  resultDate?: ModelStringInput | null,
  orderStatus?: ModelStringInput | null,
  paymentStatus?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  addressPart1?: ModelStringInput | null,
  addressPart2?: ModelStringInput | null,
  contactNumber?: ModelStringInput | null,
  profileImageLink?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  company?: ModelStringInput | null,
  chemicalAnalysisIds?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelSampleCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSampleCategoryFilterInput | null > | null,
  or?: Array< ModelSampleCategoryFilterInput | null > | null,
  not?: ModelSampleCategoryFilterInput | null,
};

export type ModelSampleCategoryConnection = {
  __typename: "ModelSampleCategoryConnection",
  items:  Array<SampleCategory | null >,
  nextToken?: string | null,
};

export type ModelTestGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  includedTestsDesc?: ModelStringInput | null,
  includedReportsDesc?: ModelStringInput | null,
  sampleCategoryId?: ModelIDInput | null,
  and?: Array< ModelTestGroupFilterInput | null > | null,
  or?: Array< ModelTestGroupFilterInput | null > | null,
  not?: ModelTestGroupFilterInput | null,
};

export type ModelTestGroupTestPackFilterInput = {
  id?: ModelIDInput | null,
  testPackId?: ModelIDInput | null,
  testGroupId?: ModelIDInput | null,
  and?: Array< ModelTestGroupTestPackFilterInput | null > | null,
  or?: Array< ModelTestGroupTestPackFilterInput | null > | null,
  not?: ModelTestGroupTestPackFilterInput | null,
};

export type ModelTestPackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTestPackFilterInput | null > | null,
  or?: Array< ModelTestPackFilterInput | null > | null,
  not?: ModelTestPackFilterInput | null,
};

export type ModelTestPackConnection = {
  __typename: "ModelTestPackConnection",
  items:  Array<TestPack | null >,
  nextToken?: string | null,
};

export type ModelChemicalAnalysisFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  discount?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChemicalAnalysisFilterInput | null > | null,
  or?: Array< ModelChemicalAnalysisFilterInput | null > | null,
  not?: ModelChemicalAnalysisFilterInput | null,
};

export type ModelChemicalAnalysisConnection = {
  __typename: "ModelChemicalAnalysisConnection",
  items:  Array<ChemicalAnalysis | null >,
  nextToken?: string | null,
};

export type ModelTestPackChemicalAnalysisFilterInput = {
  id?: ModelIDInput | null,
  testPackId?: ModelIDInput | null,
  chemicalAnalysisId?: ModelIDInput | null,
  and?: Array< ModelTestPackChemicalAnalysisFilterInput | null > | null,
  or?: Array< ModelTestPackChemicalAnalysisFilterInput | null > | null,
  not?: ModelTestPackChemicalAnalysisFilterInput | null,
};

export type ModelChemicalFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChemicalFilterInput | null > | null,
  or?: Array< ModelChemicalFilterInput | null > | null,
  not?: ModelChemicalFilterInput | null,
};

export type ModelChemicalConnection = {
  __typename: "ModelChemicalConnection",
  items:  Array<Chemical | null >,
  nextToken?: string | null,
};

export type ModelChemicalAnalysisChemicalFilterInput = {
  id?: ModelIDInput | null,
  chemicalId?: ModelIDInput | null,
  chemicalAnalysisId?: ModelIDInput | null,
  and?: Array< ModelChemicalAnalysisChemicalFilterInput | null > | null,
  or?: Array< ModelChemicalAnalysisChemicalFilterInput | null > | null,
  not?: ModelChemicalAnalysisChemicalFilterInput | null,
};

export type ModelImpactCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  iconLink?: ModelStringInput | null,
  and?: Array< ModelImpactCategoryFilterInput | null > | null,
  or?: Array< ModelImpactCategoryFilterInput | null > | null,
  not?: ModelImpactCategoryFilterInput | null,
};

export type ModelImpactCategoryConnection = {
  __typename: "ModelImpactCategoryConnection",
  items:  Array<ImpactCategory | null >,
  nextToken?: string | null,
};

export type ModelImpactFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  iconLink?: ModelStringInput | null,
  impactCategoryId?: ModelIDInput | null,
  and?: Array< ModelImpactFilterInput | null > | null,
  or?: Array< ModelImpactFilterInput | null > | null,
  not?: ModelImpactFilterInput | null,
};

export type ModelChemicalImpactFilterInput = {
  id?: ModelIDInput | null,
  chemicalId?: ModelIDInput | null,
  impactId?: ModelIDInput | null,
  and?: Array< ModelChemicalImpactFilterInput | null > | null,
  or?: Array< ModelChemicalImpactFilterInput | null > | null,
  not?: ModelChemicalImpactFilterInput | null,
};

export type ModelChemicalAnalysisOrderFilterInput = {
  id?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  chemicalAnalysisId?: ModelIDInput | null,
  and?: Array< ModelChemicalAnalysisOrderFilterInput | null > | null,
  or?: Array< ModelChemicalAnalysisOrderFilterInput | null > | null,
  not?: ModelChemicalAnalysisOrderFilterInput | null,
};

export type ModelChemicalAnalysisResultFilterInput = {
  id?: ModelIDInput | null,
  chemicalAnalysisOrderId?: ModelIDInput | null,
  chemicalId?: ModelIDInput | null,
  detection?: ModelFloatInput | null,
  resultType?: ModelStringInput | null,
  and?: Array< ModelChemicalAnalysisResultFilterInput | null > | null,
  or?: Array< ModelChemicalAnalysisResultFilterInput | null > | null,
  not?: ModelChemicalAnalysisResultFilterInput | null,
};

export type BatchCreateChemicalAnalysisOrdersMutationVariables = {
  CreateChemicalAnalysisOrders?: Array< CreateChemicalAnalysisOrderInput | null > | null,
};

export type BatchCreateChemicalAnalysisOrdersMutation = {
  batchCreateChemicalAnalysisOrders?:  Array< {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null > | null,
};

export type BatchCreateChemicalAnalysisResultsMutationVariables = {
  CreateChemicalAnalysisResults?: Array< CreateChemicalAnalysisResultInput | null > | null,
};

export type BatchCreateChemicalAnalysisResultsMutation = {
  batchCreateChemicalAnalysisResults?:  Array< {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null > | null,
};

export type BatchUpdateChemicalAnalysisResultsMutationVariables = {
  UpdateChemicalAnalysisResults?: Array< UpdateChemicalAnalysisResultInput | null > | null,
};

export type BatchUpdateChemicalAnalysisResultsMutation = {
  batchUpdateChemicalAnalysisResults?:  Array< {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null > | null,
};

export type CreateLocalUserMutationVariables = {
  input: CreateLocalUserInput,
  condition?: ModelLocalUserConditionInput | null,
};

export type CreateLocalUserMutation = {
  createLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLocalUserMutationVariables = {
  input: UpdateLocalUserInput,
  condition?: ModelLocalUserConditionInput | null,
};

export type UpdateLocalUserMutation = {
  updateLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLocalUserMutationVariables = {
  input: DeleteLocalUserInput,
  condition?: ModelLocalUserConditionInput | null,
};

export type DeleteLocalUserMutation = {
  deleteLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSampleCategoryMutationVariables = {
  input: CreateSampleCategoryInput,
  condition?: ModelSampleCategoryConditionInput | null,
};

export type CreateSampleCategoryMutation = {
  createSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateSampleCategoryMutationVariables = {
  input: UpdateSampleCategoryInput,
  condition?: ModelSampleCategoryConditionInput | null,
};

export type UpdateSampleCategoryMutation = {
  updateSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteSampleCategoryMutationVariables = {
  input: DeleteSampleCategoryInput,
  condition?: ModelSampleCategoryConditionInput | null,
};

export type DeleteSampleCategoryMutation = {
  deleteSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTestGroupMutationVariables = {
  input: CreateTestGroupInput,
  condition?: ModelTestGroupConditionInput | null,
};

export type CreateTestGroupMutation = {
  createTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTestGroupMutationVariables = {
  input: UpdateTestGroupInput,
  condition?: ModelTestGroupConditionInput | null,
};

export type UpdateTestGroupMutation = {
  updateTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTestGroupMutationVariables = {
  input: DeleteTestGroupInput,
  condition?: ModelTestGroupConditionInput | null,
};

export type DeleteTestGroupMutation = {
  deleteTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTestGroupTestPackMutationVariables = {
  input: CreateTestGroupTestPackInput,
  condition?: ModelTestGroupTestPackConditionInput | null,
};

export type CreateTestGroupTestPackMutation = {
  createTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateTestGroupTestPackMutationVariables = {
  input: UpdateTestGroupTestPackInput,
  condition?: ModelTestGroupTestPackConditionInput | null,
};

export type UpdateTestGroupTestPackMutation = {
  updateTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteTestGroupTestPackMutationVariables = {
  input: DeleteTestGroupTestPackInput,
  condition?: ModelTestGroupTestPackConditionInput | null,
};

export type DeleteTestGroupTestPackMutation = {
  deleteTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateTestPackMutationVariables = {
  input: CreateTestPackInput,
  condition?: ModelTestPackConditionInput | null,
};

export type CreateTestPackMutation = {
  createTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTestPackMutationVariables = {
  input: UpdateTestPackInput,
  condition?: ModelTestPackConditionInput | null,
};

export type UpdateTestPackMutation = {
  updateTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTestPackMutationVariables = {
  input: DeleteTestPackInput,
  condition?: ModelTestPackConditionInput | null,
};

export type DeleteTestPackMutation = {
  deleteTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateChemicalAnalysisMutationVariables = {
  input: CreateChemicalAnalysisInput,
  condition?: ModelChemicalAnalysisConditionInput | null,
};

export type CreateChemicalAnalysisMutation = {
  createChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateChemicalAnalysisMutationVariables = {
  input: UpdateChemicalAnalysisInput,
  condition?: ModelChemicalAnalysisConditionInput | null,
};

export type UpdateChemicalAnalysisMutation = {
  updateChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteChemicalAnalysisMutationVariables = {
  input: DeleteChemicalAnalysisInput,
  condition?: ModelChemicalAnalysisConditionInput | null,
};

export type DeleteChemicalAnalysisMutation = {
  deleteChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTestPackChemicalAnalysisMutationVariables = {
  input: CreateTestPackChemicalAnalysisInput,
  condition?: ModelTestPackChemicalAnalysisConditionInput | null,
};

export type CreateTestPackChemicalAnalysisMutation = {
  createTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateTestPackChemicalAnalysisMutationVariables = {
  input: UpdateTestPackChemicalAnalysisInput,
  condition?: ModelTestPackChemicalAnalysisConditionInput | null,
};

export type UpdateTestPackChemicalAnalysisMutation = {
  updateTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteTestPackChemicalAnalysisMutationVariables = {
  input: DeleteTestPackChemicalAnalysisInput,
  condition?: ModelTestPackChemicalAnalysisConditionInput | null,
};

export type DeleteTestPackChemicalAnalysisMutation = {
  deleteTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateChemicalMutationVariables = {
  input: CreateChemicalInput,
  condition?: ModelChemicalConditionInput | null,
};

export type CreateChemicalMutation = {
  createChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateChemicalMutationVariables = {
  input: UpdateChemicalInput,
  condition?: ModelChemicalConditionInput | null,
};

export type UpdateChemicalMutation = {
  updateChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteChemicalMutationVariables = {
  input: DeleteChemicalInput,
  condition?: ModelChemicalConditionInput | null,
};

export type DeleteChemicalMutation = {
  deleteChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateChemicalAnalysisChemicalMutationVariables = {
  input: CreateChemicalAnalysisChemicalInput,
  condition?: ModelChemicalAnalysisChemicalConditionInput | null,
};

export type CreateChemicalAnalysisChemicalMutation = {
  createChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateChemicalAnalysisChemicalMutationVariables = {
  input: UpdateChemicalAnalysisChemicalInput,
  condition?: ModelChemicalAnalysisChemicalConditionInput | null,
};

export type UpdateChemicalAnalysisChemicalMutation = {
  updateChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteChemicalAnalysisChemicalMutationVariables = {
  input: DeleteChemicalAnalysisChemicalInput,
  condition?: ModelChemicalAnalysisChemicalConditionInput | null,
};

export type DeleteChemicalAnalysisChemicalMutation = {
  deleteChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateImpactCategoryMutationVariables = {
  input: CreateImpactCategoryInput,
  condition?: ModelImpactCategoryConditionInput | null,
};

export type CreateImpactCategoryMutation = {
  createImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateImpactCategoryMutationVariables = {
  input: UpdateImpactCategoryInput,
  condition?: ModelImpactCategoryConditionInput | null,
};

export type UpdateImpactCategoryMutation = {
  updateImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteImpactCategoryMutationVariables = {
  input: DeleteImpactCategoryInput,
  condition?: ModelImpactCategoryConditionInput | null,
};

export type DeleteImpactCategoryMutation = {
  deleteImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateImpactMutationVariables = {
  input: CreateImpactInput,
  condition?: ModelImpactConditionInput | null,
};

export type CreateImpactMutation = {
  createImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateImpactMutationVariables = {
  input: UpdateImpactInput,
  condition?: ModelImpactConditionInput | null,
};

export type UpdateImpactMutation = {
  updateImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteImpactMutationVariables = {
  input: DeleteImpactInput,
  condition?: ModelImpactConditionInput | null,
};

export type DeleteImpactMutation = {
  deleteImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateChemicalImpactMutationVariables = {
  input: CreateChemicalImpactInput,
  condition?: ModelChemicalImpactConditionInput | null,
};

export type CreateChemicalImpactMutation = {
  createChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateChemicalImpactMutationVariables = {
  input: UpdateChemicalImpactInput,
  condition?: ModelChemicalImpactConditionInput | null,
};

export type UpdateChemicalImpactMutation = {
  updateChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteChemicalImpactMutationVariables = {
  input: DeleteChemicalImpactInput,
  condition?: ModelChemicalImpactConditionInput | null,
};

export type DeleteChemicalImpactMutation = {
  deleteChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateChemicalAnalysisOrderMutationVariables = {
  input: CreateChemicalAnalysisOrderInput,
  condition?: ModelChemicalAnalysisOrderConditionInput | null,
};

export type CreateChemicalAnalysisOrderMutation = {
  createChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateChemicalAnalysisOrderMutationVariables = {
  input: UpdateChemicalAnalysisOrderInput,
  condition?: ModelChemicalAnalysisOrderConditionInput | null,
};

export type UpdateChemicalAnalysisOrderMutation = {
  updateChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteChemicalAnalysisOrderMutationVariables = {
  input: DeleteChemicalAnalysisOrderInput,
  condition?: ModelChemicalAnalysisOrderConditionInput | null,
};

export type DeleteChemicalAnalysisOrderMutation = {
  deleteChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateChemicalAnalysisResultMutationVariables = {
  input: CreateChemicalAnalysisResultInput,
  condition?: ModelChemicalAnalysisResultConditionInput | null,
};

export type CreateChemicalAnalysisResultMutation = {
  createChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateChemicalAnalysisResultMutationVariables = {
  input: UpdateChemicalAnalysisResultInput,
  condition?: ModelChemicalAnalysisResultConditionInput | null,
};

export type UpdateChemicalAnalysisResultMutation = {
  updateChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteChemicalAnalysisResultMutationVariables = {
  input: DeleteChemicalAnalysisResultInput,
  condition?: ModelChemicalAnalysisResultConditionInput | null,
};

export type DeleteChemicalAnalysisResultMutation = {
  deleteChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetLocalUserQueryVariables = {
  email: string,
};

export type GetLocalUserQuery = {
  getLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLocalUsersQueryVariables = {
  email?: string | null,
  filter?: ModelLocalUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLocalUsersQuery = {
  listLocalUsers?:  {
    __typename: "ModelLocalUserConnection",
    items:  Array< {
      __typename: "LocalUser",
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSampleCategoryQueryVariables = {
  id: string,
};

export type GetSampleCategoryQuery = {
  getSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListSampleCategorysQueryVariables = {
  filter?: ModelSampleCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSampleCategorysQuery = {
  listSampleCategorys?:  {
    __typename: "ModelSampleCategoryConnection",
    items:  Array< {
      __typename: "SampleCategory",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroups?:  {
        __typename: "ModelTestGroupConnection",
        items:  Array< {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestGroupQueryVariables = {
  id: string,
};

export type GetTestGroupQuery = {
  getTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTestGroupsQueryVariables = {
  filter?: ModelTestGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestGroupsQuery = {
  listTestGroups?:  {
    __typename: "ModelTestGroupConnection",
    items:  Array< {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestGroupTestPackQueryVariables = {
  id: string,
};

export type GetTestGroupTestPackQuery = {
  getTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListTestGroupTestPacksQueryVariables = {
  filter?: ModelTestGroupTestPackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestGroupTestPacksQuery = {
  listTestGroupTestPacks?:  {
    __typename: "ModelTestGroupTestPackConnection",
    items:  Array< {
      __typename: "TestGroupTestPack",
      id: string,
      testPackId: string,
      testGroupId: string,
      createdAt: string,
      updatedAt: string,
      testgroup:  {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      },
      testpack:  {
        __typename: "TestPack",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
        testPackChemicalAnalysis?:  {
          __typename: "ModelTestPackChemicalAnalysisConnection",
          nextToken?: string | null,
        } | null,
      },
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestPackQueryVariables = {
  id: string,
};

export type GetTestPackQuery = {
  getTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTestPacksQueryVariables = {
  filter?: ModelTestPackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestPacksQuery = {
  listTestPacks?:  {
    __typename: "ModelTestPackConnection",
    items:  Array< {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChemicalAnalysisQueryVariables = {
  id: string,
};

export type GetChemicalAnalysisQuery = {
  getChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListChemicalAnalysissQueryVariables = {
  filter?: ModelChemicalAnalysisFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChemicalAnalysissQuery = {
  listChemicalAnalysiss?:  {
    __typename: "ModelChemicalAnalysisConnection",
    items:  Array< {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestPackChemicalAnalysisQueryVariables = {
  id: string,
};

export type GetTestPackChemicalAnalysisQuery = {
  getTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListTestPackChemicalAnalysissQueryVariables = {
  filter?: ModelTestPackChemicalAnalysisFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestPackChemicalAnalysissQuery = {
  listTestPackChemicalAnalysiss?:  {
    __typename: "ModelTestPackChemicalAnalysisConnection",
    items:  Array< {
      __typename: "TestPackChemicalAnalysis",
      id: string,
      testPackId: string,
      chemicalAnalysisId: string,
      createdAt: string,
      updatedAt: string,
      testpack:  {
        __typename: "TestPack",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
        testPackChemicalAnalysis?:  {
          __typename: "ModelTestPackChemicalAnalysisConnection",
          nextToken?: string | null,
        } | null,
      },
      chemicalAnalysis:  {
        __typename: "ChemicalAnalysis",
        id: string,
        name: string,
        price: string,
        discount: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        testPackChemicalAnalysis?:  {
          __typename: "ModelTestPackChemicalAnalysisConnection",
          nextToken?: string | null,
        } | null,
        chemicalAnalysisChemical?:  {
          __typename: "ModelChemicalAnalysisChemicalConnection",
          nextToken?: string | null,
        } | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      },
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChemicalQueryVariables = {
  id: string,
};

export type GetChemicalQuery = {
  getChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListChemicalsQueryVariables = {
  filter?: ModelChemicalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChemicalsQuery = {
  listChemicals?:  {
    __typename: "ModelChemicalConnection",
    items:  Array< {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChemicalAnalysisChemicalQueryVariables = {
  id: string,
};

export type GetChemicalAnalysisChemicalQuery = {
  getChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListChemicalAnalysisChemicalsQueryVariables = {
  filter?: ModelChemicalAnalysisChemicalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChemicalAnalysisChemicalsQuery = {
  listChemicalAnalysisChemicals?:  {
    __typename: "ModelChemicalAnalysisChemicalConnection",
    items:  Array< {
      __typename: "ChemicalAnalysisChemical",
      id: string,
      chemicalId: string,
      chemicalAnalysisId: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysis:  {
        __typename: "ChemicalAnalysis",
        id: string,
        name: string,
        price: string,
        discount: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        testPackChemicalAnalysis?:  {
          __typename: "ModelTestPackChemicalAnalysisConnection",
          nextToken?: string | null,
        } | null,
        chemicalAnalysisChemical?:  {
          __typename: "ModelChemicalAnalysisChemicalConnection",
          nextToken?: string | null,
        } | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      },
      chemical:  {
        __typename: "Chemical",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysisChemical?:  {
          __typename: "ModelChemicalAnalysisChemicalConnection",
          nextToken?: string | null,
        } | null,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      },
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImpactCategoryQueryVariables = {
  id: string,
};

export type GetImpactCategoryQuery = {
  getImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListImpactCategorysQueryVariables = {
  filter?: ModelImpactCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImpactCategorysQuery = {
  listImpactCategorys?:  {
    __typename: "ModelImpactCategoryConnection",
    items:  Array< {
      __typename: "ImpactCategory",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      createdAt: string,
      updatedAt: string,
      impacts?:  {
        __typename: "ModelImpactConnection",
        items:  Array< {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImpactQueryVariables = {
  id: string,
};

export type GetImpactQuery = {
  getImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListImpactsQueryVariables = {
  filter?: ModelImpactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImpactsQuery = {
  listImpacts?:  {
    __typename: "ModelImpactConnection",
    items:  Array< {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChemicalImpactQueryVariables = {
  id: string,
};

export type GetChemicalImpactQuery = {
  getChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListChemicalImpactsQueryVariables = {
  filter?: ModelChemicalImpactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChemicalImpactsQuery = {
  listChemicalImpacts?:  {
    __typename: "ModelChemicalImpactConnection",
    items:  Array< {
      __typename: "ChemicalImpact",
      id: string,
      chemicalId: string,
      impactId: string,
      createdAt: string,
      updatedAt: string,
      chemical:  {
        __typename: "Chemical",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysisChemical?:  {
          __typename: "ModelChemicalAnalysisChemicalConnection",
          nextToken?: string | null,
        } | null,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      },
      impact:  {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      },
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChemicalAnalysisOrderQueryVariables = {
  id: string,
};

export type GetChemicalAnalysisOrderQuery = {
  getChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListChemicalAnalysisOrdersQueryVariables = {
  filter?: ModelChemicalAnalysisOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChemicalAnalysisOrdersQuery = {
  listChemicalAnalysisOrders?:  {
    __typename: "ModelChemicalAnalysisOrderConnection",
    items:  Array< {
      __typename: "ChemicalAnalysisOrder",
      id: string,
      orderId: string,
      chemicalAnalysisId: string,
      order:  {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      },
      createdAt: string,
      updatedAt: string,
      chemicalAnalysis:  {
        __typename: "ChemicalAnalysis",
        id: string,
        name: string,
        price: string,
        discount: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        testPackChemicalAnalysis?:  {
          __typename: "ModelTestPackChemicalAnalysisConnection",
          nextToken?: string | null,
        } | null,
        chemicalAnalysisChemical?:  {
          __typename: "ModelChemicalAnalysisChemicalConnection",
          nextToken?: string | null,
        } | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      },
      chemicalAnalysisResults?:  {
        __typename: "ModelChemicalAnalysisResultConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisResult",
          id: string,
          chemicalAnalysisOrderId: string,
          chemicalId: string,
          detection: number,
          resultType: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChemicalAnalysisResultQueryVariables = {
  id: string,
};

export type GetChemicalAnalysisResultQuery = {
  getChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListChemicalAnalysisResultsQueryVariables = {
  filter?: ModelChemicalAnalysisResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChemicalAnalysisResultsQuery = {
  listChemicalAnalysisResults?:  {
    __typename: "ModelChemicalAnalysisResultConnection",
    items:  Array< {
      __typename: "ChemicalAnalysisResult",
      id: string,
      chemicalAnalysisOrderId: string,
      chemicalId: string,
      detection: number,
      resultType: string,
      createdAt: string,
      updatedAt: string,
      chemical?:  {
        __typename: "Chemical",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysisChemical?:  {
          __typename: "ModelChemicalAnalysisChemicalConnection",
          nextToken?: string | null,
        } | null,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLocalUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateLocalUserSubscription = {
  onCreateLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLocalUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateLocalUserSubscription = {
  onUpdateLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLocalUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteLocalUserSubscription = {
  onDeleteLocalUser?:  {
    __typename: "LocalUser",
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        localUserId: string,
        count: number,
        purchasedDate: string,
        samplingDate: string,
        resultDate: string,
        orderStatus: string,
        paymentStatus: string,
        email: string,
        name: string,
        addressPart1: string,
        addressPart2: string,
        contactNumber: string,
        profileImageLink: string,
        country: string,
        city: string,
        postalCode: string,
        company: string,
        chemicalAnalysisIds: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        chemicalAnalysisOrder?:  {
          __typename: "ModelChemicalAnalysisOrderConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    localUserId: string,
    count: number,
    purchasedDate: string,
    samplingDate: string,
    resultDate: string,
    orderStatus: string,
    paymentStatus: string,
    email: string,
    name: string,
    addressPart1: string,
    addressPart2: string,
    contactNumber: string,
    profileImageLink: string,
    country: string,
    city: string,
    postalCode: string,
    company: string,
    chemicalAnalysisIds: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateSampleCategorySubscription = {
  onCreateSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateSampleCategorySubscription = {
  onUpdateSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteSampleCategorySubscription = {
  onDeleteSampleCategory?:  {
    __typename: "SampleCategory",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroups?:  {
      __typename: "ModelTestGroupConnection",
      items:  Array< {
        __typename: "TestGroup",
        id: string,
        name: string,
        description: string,
        includedTestsDesc?: string | null,
        includedReportsDesc?: string | null,
        sampleCategoryId: string,
        createdAt: string,
        updatedAt: string,
        testGroupTestPack?:  {
          __typename: "ModelTestGroupTestPackConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTestGroupSubscription = {
  onCreateTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTestGroupSubscription = {
  onUpdateTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTestGroupSubscription = {
  onDeleteTestGroup?:  {
    __typename: "TestGroup",
    id: string,
    name: string,
    description: string,
    includedTestsDesc?: string | null,
    includedReportsDesc?: string | null,
    sampleCategoryId: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTestGroupTestPackSubscription = {
  onCreateTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateTestGroupTestPackSubscription = {
  onUpdateTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteTestGroupTestPackSubscription = {
  onDeleteTestGroupTestPack?:  {
    __typename: "TestGroupTestPack",
    id: string,
    testPackId: string,
    testGroupId: string,
    createdAt: string,
    updatedAt: string,
    testgroup:  {
      __typename: "TestGroup",
      id: string,
      name: string,
      description: string,
      includedTestsDesc?: string | null,
      includedReportsDesc?: string | null,
      sampleCategoryId: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateTestPackSubscription = {
  onCreateTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTestPackSubscription = {
  onUpdateTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTestPackSubscription = {
  onDeleteTestPack?:  {
    __typename: "TestPack",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testGroupTestPack?:  {
      __typename: "ModelTestGroupTestPackConnection",
      items:  Array< {
        __typename: "TestGroupTestPack",
        id: string,
        testPackId: string,
        testGroupId: string,
        createdAt: string,
        updatedAt: string,
        testgroup:  {
          __typename: "TestGroup",
          id: string,
          name: string,
          description: string,
          includedTestsDesc?: string | null,
          includedReportsDesc?: string | null,
          sampleCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateChemicalAnalysisSubscription = {
  onCreateChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateChemicalAnalysisSubscription = {
  onUpdateChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteChemicalAnalysisSubscription = {
  onDeleteChemicalAnalysis?:  {
    __typename: "ChemicalAnalysis",
    id: string,
    name: string,
    price: string,
    discount: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    testPackChemicalAnalysis?:  {
      __typename: "ModelTestPackChemicalAnalysisConnection",
      items:  Array< {
        __typename: "TestPackChemicalAnalysis",
        id: string,
        testPackId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        testpack:  {
          __typename: "TestPack",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalAnalysisOrder?:  {
      __typename: "ModelChemicalAnalysisOrderConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisOrder",
        id: string,
        orderId: string,
        chemicalAnalysisId: string,
        order:  {
          __typename: "Order",
          id: string,
          localUserId: string,
          count: number,
          purchasedDate: string,
          samplingDate: string,
          resultDate: string,
          orderStatus: string,
          paymentStatus: string,
          email: string,
          name: string,
          addressPart1: string,
          addressPart2: string,
          contactNumber: string,
          profileImageLink: string,
          country: string,
          city: string,
          postalCode: string,
          company: string,
          chemicalAnalysisIds: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemicalAnalysisResults?:  {
          __typename: "ModelChemicalAnalysisResultConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTestPackChemicalAnalysisSubscription = {
  onCreateTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateTestPackChemicalAnalysisSubscription = {
  onUpdateTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteTestPackChemicalAnalysisSubscription = {
  onDeleteTestPackChemicalAnalysis?:  {
    __typename: "TestPackChemicalAnalysis",
    id: string,
    testPackId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    testpack:  {
      __typename: "TestPack",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testGroupTestPack?:  {
        __typename: "ModelTestGroupTestPackConnection",
        items:  Array< {
          __typename: "TestGroupTestPack",
          id: string,
          testPackId: string,
          testGroupId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateChemicalSubscription = {
  onCreateChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateChemicalSubscription = {
  onUpdateChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteChemicalSubscription = {
  onDeleteChemical?:  {
    __typename: "Chemical",
    id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysisChemical?:  {
      __typename: "ModelChemicalAnalysisChemicalConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisChemical",
        id: string,
        chemicalId: string,
        chemicalAnalysisId: string,
        createdAt: string,
        updatedAt: string,
        chemicalAnalysis:  {
          __typename: "ChemicalAnalysis",
          id: string,
          name: string,
          price: string,
          discount: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateChemicalAnalysisChemicalSubscription = {
  onCreateChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateChemicalAnalysisChemicalSubscription = {
  onUpdateChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteChemicalAnalysisChemicalSubscription = {
  onDeleteChemicalAnalysisChemical?:  {
    __typename: "ChemicalAnalysisChemical",
    id: string,
    chemicalId: string,
    chemicalAnalysisId: string,
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateImpactCategorySubscription = {
  onCreateImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateImpactCategorySubscription = {
  onUpdateImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteImpactCategorySubscription = {
  onDeleteImpactCategory?:  {
    __typename: "ImpactCategory",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    createdAt: string,
    updatedAt: string,
    impacts?:  {
      __typename: "ModelImpactConnection",
      items:  Array< {
        __typename: "Impact",
        id: string,
        name: string,
        description: string,
        iconLink?: string | null,
        impactCategoryId: string,
        createdAt: string,
        updatedAt: string,
        chemicalImpacts?:  {
          __typename: "ModelChemicalImpactConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateImpactSubscription = {
  onCreateImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateImpactSubscription = {
  onUpdateImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteImpactSubscription = {
  onDeleteImpact?:  {
    __typename: "Impact",
    id: string,
    name: string,
    description: string,
    iconLink?: string | null,
    impactCategoryId: string,
    createdAt: string,
    updatedAt: string,
    chemicalImpacts?:  {
      __typename: "ModelChemicalImpactConnection",
      items:  Array< {
        __typename: "ChemicalImpact",
        id: string,
        chemicalId: string,
        impactId: string,
        createdAt: string,
        updatedAt: string,
        chemical:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        },
        impact:  {
          __typename: "Impact",
          id: string,
          name: string,
          description: string,
          iconLink?: string | null,
          impactCategoryId: string,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateChemicalImpactSubscription = {
  onCreateChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateChemicalImpactSubscription = {
  onUpdateChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteChemicalImpactSubscription = {
  onDeleteChemicalImpact?:  {
    __typename: "ChemicalImpact",
    id: string,
    chemicalId: string,
    impactId: string,
    createdAt: string,
    updatedAt: string,
    chemical:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    impact:  {
      __typename: "Impact",
      id: string,
      name: string,
      description: string,
      iconLink?: string | null,
      impactCategoryId: string,
      createdAt: string,
      updatedAt: string,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateChemicalAnalysisOrderSubscription = {
  onCreateChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateChemicalAnalysisOrderSubscription = {
  onUpdateChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteChemicalAnalysisOrderSubscription = {
  onDeleteChemicalAnalysisOrder?:  {
    __typename: "ChemicalAnalysisOrder",
    id: string,
    orderId: string,
    chemicalAnalysisId: string,
    order:  {
      __typename: "Order",
      id: string,
      localUserId: string,
      count: number,
      purchasedDate: string,
      samplingDate: string,
      resultDate: string,
      orderStatus: string,
      paymentStatus: string,
      email: string,
      name: string,
      addressPart1: string,
      addressPart2: string,
      contactNumber: string,
      profileImageLink: string,
      country: string,
      city: string,
      postalCode: string,
      company: string,
      chemicalAnalysisIds: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    createdAt: string,
    updatedAt: string,
    chemicalAnalysis:  {
      __typename: "ChemicalAnalysis",
      id: string,
      name: string,
      price: string,
      discount: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      testPackChemicalAnalysis?:  {
        __typename: "ModelTestPackChemicalAnalysisConnection",
        items:  Array< {
          __typename: "TestPackChemicalAnalysis",
          id: string,
          testPackId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalAnalysisOrder?:  {
        __typename: "ModelChemicalAnalysisOrderConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisOrder",
          id: string,
          orderId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    chemicalAnalysisResults?:  {
      __typename: "ModelChemicalAnalysisResultConnection",
      items:  Array< {
        __typename: "ChemicalAnalysisResult",
        id: string,
        chemicalAnalysisOrderId: string,
        chemicalId: string,
        detection: number,
        resultType: string,
        createdAt: string,
        updatedAt: string,
        chemical?:  {
          __typename: "Chemical",
          id: string,
          name: string,
          description: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateChemicalAnalysisResultSubscription = {
  onCreateChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateChemicalAnalysisResultSubscription = {
  onUpdateChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteChemicalAnalysisResultSubscription = {
  onDeleteChemicalAnalysisResult?:  {
    __typename: "ChemicalAnalysisResult",
    id: string,
    chemicalAnalysisOrderId: string,
    chemicalId: string,
    detection: number,
    resultType: string,
    createdAt: string,
    updatedAt: string,
    chemical?:  {
      __typename: "Chemical",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      chemicalAnalysisChemical?:  {
        __typename: "ModelChemicalAnalysisChemicalConnection",
        items:  Array< {
          __typename: "ChemicalAnalysisChemical",
          id: string,
          chemicalId: string,
          chemicalAnalysisId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chemicalImpacts?:  {
        __typename: "ModelChemicalImpactConnection",
        items:  Array< {
          __typename: "ChemicalImpact",
          id: string,
          chemicalId: string,
          impactId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
