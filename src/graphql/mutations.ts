/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      localUserId
      count
      purchasedDate
      samplingDate
      resultDate
      orderStatus
      paymentStatus
      email
      name
      addressPart1
      addressPart2
      contactNumber
      profileImageLink
      country
      city
      postalCode
      company
      createdAt
      updatedAt
      owner
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createLocalUser = /* GraphQL */ `
  mutation CreateLocalUser(
    $input: CreateLocalUserInput!
    $condition: ModelLocalUserConditionInput
  ) {
    createLocalUser(input: $input, condition: $condition) {
      email
      name
      addressPart1
      addressPart2
      contactNumber
      profileImageLink
      country
      city
      postalCode
      company
      createdAt
      updatedAt
      owner
      orders {
        items {
          id
          localUserId
          count
          purchasedDate
          samplingDate
          resultDate
          orderStatus
          paymentStatus
          email
          name
          addressPart1
          addressPart2
          contactNumber
          profileImageLink
          country
          city
          postalCode
          company
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateLocalUser = /* GraphQL */ `
  mutation UpdateLocalUser(
    $input: UpdateLocalUserInput!
    $condition: ModelLocalUserConditionInput
  ) {
    updateLocalUser(input: $input, condition: $condition) {
      email
      name
      addressPart1
      addressPart2
      contactNumber
      profileImageLink
      country
      city
      postalCode
      company
      createdAt
      updatedAt
      owner
      orders {
        items {
          id
          localUserId
          count
          purchasedDate
          samplingDate
          resultDate
          orderStatus
          paymentStatus
          email
          name
          addressPart1
          addressPart2
          contactNumber
          profileImageLink
          country
          city
          postalCode
          company
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteLocalUser = /* GraphQL */ `
  mutation DeleteLocalUser(
    $input: DeleteLocalUserInput!
    $condition: ModelLocalUserConditionInput
  ) {
    deleteLocalUser(input: $input, condition: $condition) {
      email
      name
      addressPart1
      addressPart2
      contactNumber
      profileImageLink
      country
      city
      postalCode
      company
      createdAt
      updatedAt
      owner
      orders {
        items {
          id
          localUserId
          count
          purchasedDate
          samplingDate
          resultDate
          orderStatus
          paymentStatus
          email
          name
          addressPart1
          addressPart2
          contactNumber
          profileImageLink
          country
          city
          postalCode
          company
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createSampleCategory = /* GraphQL */ `
  mutation CreateSampleCategory(
    $input: CreateSampleCategoryInput!
    $condition: ModelSampleCategoryConditionInput
  ) {
    createSampleCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      testGroups {
        items {
          id
          name
          description
          includedTestsDesc
          includedReportsDesc
          sampleCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateSampleCategory = /* GraphQL */ `
  mutation UpdateSampleCategory(
    $input: UpdateSampleCategoryInput!
    $condition: ModelSampleCategoryConditionInput
  ) {
    updateSampleCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      testGroups {
        items {
          id
          name
          description
          includedTestsDesc
          includedReportsDesc
          sampleCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteSampleCategory = /* GraphQL */ `
  mutation DeleteSampleCategory(
    $input: DeleteSampleCategoryInput!
    $condition: ModelSampleCategoryConditionInput
  ) {
    deleteSampleCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      testGroups {
        items {
          id
          name
          description
          includedTestsDesc
          includedReportsDesc
          sampleCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTestGroup = /* GraphQL */ `
  mutation CreateTestGroup(
    $input: CreateTestGroupInput!
    $condition: ModelTestGroupConditionInput
  ) {
    createTestGroup(input: $input, condition: $condition) {
      id
      name
      description
      includedTestsDesc
      includedReportsDesc
      sampleCategoryId
      createdAt
      updatedAt
      testGroupTestPack {
        items {
          id
          testPackId
          testGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateTestGroup = /* GraphQL */ `
  mutation UpdateTestGroup(
    $input: UpdateTestGroupInput!
    $condition: ModelTestGroupConditionInput
  ) {
    updateTestGroup(input: $input, condition: $condition) {
      id
      name
      description
      includedTestsDesc
      includedReportsDesc
      sampleCategoryId
      createdAt
      updatedAt
      testGroupTestPack {
        items {
          id
          testPackId
          testGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteTestGroup = /* GraphQL */ `
  mutation DeleteTestGroup(
    $input: DeleteTestGroupInput!
    $condition: ModelTestGroupConditionInput
  ) {
    deleteTestGroup(input: $input, condition: $condition) {
      id
      name
      description
      includedTestsDesc
      includedReportsDesc
      sampleCategoryId
      createdAt
      updatedAt
      testGroupTestPack {
        items {
          id
          testPackId
          testGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTestGroupTestPack = /* GraphQL */ `
  mutation CreateTestGroupTestPack(
    $input: CreateTestGroupTestPackInput!
    $condition: ModelTestGroupTestPackConditionInput
  ) {
    createTestGroupTestPack(input: $input, condition: $condition) {
      id
      testPackId
      testGroupId
      createdAt
      updatedAt
      testgroup {
        id
        name
        description
        includedTestsDesc
        includedReportsDesc
        sampleCategoryId
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
      }
      testpack {
        id
        name
        description
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
        testPackChemicalAnalysis {
          nextToken
        }
      }
    }
  }
`;
export const updateTestGroupTestPack = /* GraphQL */ `
  mutation UpdateTestGroupTestPack(
    $input: UpdateTestGroupTestPackInput!
    $condition: ModelTestGroupTestPackConditionInput
  ) {
    updateTestGroupTestPack(input: $input, condition: $condition) {
      id
      testPackId
      testGroupId
      createdAt
      updatedAt
      testgroup {
        id
        name
        description
        includedTestsDesc
        includedReportsDesc
        sampleCategoryId
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
      }
      testpack {
        id
        name
        description
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
        testPackChemicalAnalysis {
          nextToken
        }
      }
    }
  }
`;
export const deleteTestGroupTestPack = /* GraphQL */ `
  mutation DeleteTestGroupTestPack(
    $input: DeleteTestGroupTestPackInput!
    $condition: ModelTestGroupTestPackConditionInput
  ) {
    deleteTestGroupTestPack(input: $input, condition: $condition) {
      id
      testPackId
      testGroupId
      createdAt
      updatedAt
      testgroup {
        id
        name
        description
        includedTestsDesc
        includedReportsDesc
        sampleCategoryId
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
      }
      testpack {
        id
        name
        description
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
        testPackChemicalAnalysis {
          nextToken
        }
      }
    }
  }
`;
export const createTestPack = /* GraphQL */ `
  mutation CreateTestPack(
    $input: CreateTestPackInput!
    $condition: ModelTestPackConditionInput
  ) {
    createTestPack(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      testGroupTestPack {
        items {
          id
          testPackId
          testGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
      testPackChemicalAnalysis {
        items {
          id
          testPackId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateTestPack = /* GraphQL */ `
  mutation UpdateTestPack(
    $input: UpdateTestPackInput!
    $condition: ModelTestPackConditionInput
  ) {
    updateTestPack(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      testGroupTestPack {
        items {
          id
          testPackId
          testGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
      testPackChemicalAnalysis {
        items {
          id
          testPackId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteTestPack = /* GraphQL */ `
  mutation DeleteTestPack(
    $input: DeleteTestPackInput!
    $condition: ModelTestPackConditionInput
  ) {
    deleteTestPack(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      testGroupTestPack {
        items {
          id
          testPackId
          testGroupId
          createdAt
          updatedAt
        }
        nextToken
      }
      testPackChemicalAnalysis {
        items {
          id
          testPackId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createChemicalAnalysis = /* GraphQL */ `
  mutation CreateChemicalAnalysis(
    $input: CreateChemicalAnalysisInput!
    $condition: ModelChemicalAnalysisConditionInput
  ) {
    createChemicalAnalysis(input: $input, condition: $condition) {
      id
      name
      price
      discount
      description
      createdAt
      updatedAt
      testPackChemicalAnalysis {
        items {
          id
          testPackId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalAnalysisChemical {
        items {
          id
          chemicalId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateChemicalAnalysis = /* GraphQL */ `
  mutation UpdateChemicalAnalysis(
    $input: UpdateChemicalAnalysisInput!
    $condition: ModelChemicalAnalysisConditionInput
  ) {
    updateChemicalAnalysis(input: $input, condition: $condition) {
      id
      name
      price
      discount
      description
      createdAt
      updatedAt
      testPackChemicalAnalysis {
        items {
          id
          testPackId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalAnalysisChemical {
        items {
          id
          chemicalId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteChemicalAnalysis = /* GraphQL */ `
  mutation DeleteChemicalAnalysis(
    $input: DeleteChemicalAnalysisInput!
    $condition: ModelChemicalAnalysisConditionInput
  ) {
    deleteChemicalAnalysis(input: $input, condition: $condition) {
      id
      name
      price
      discount
      description
      createdAt
      updatedAt
      testPackChemicalAnalysis {
        items {
          id
          testPackId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalAnalysisChemical {
        items {
          id
          chemicalId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTestPackChemicalAnalysis = /* GraphQL */ `
  mutation CreateTestPackChemicalAnalysis(
    $input: CreateTestPackChemicalAnalysisInput!
    $condition: ModelTestPackChemicalAnalysisConditionInput
  ) {
    createTestPackChemicalAnalysis(input: $input, condition: $condition) {
      id
      testPackId
      chemicalAnalysisId
      createdAt
      updatedAt
      testpack {
        id
        name
        description
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
        testPackChemicalAnalysis {
          nextToken
        }
      }
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
    }
  }
`;
export const updateTestPackChemicalAnalysis = /* GraphQL */ `
  mutation UpdateTestPackChemicalAnalysis(
    $input: UpdateTestPackChemicalAnalysisInput!
    $condition: ModelTestPackChemicalAnalysisConditionInput
  ) {
    updateTestPackChemicalAnalysis(input: $input, condition: $condition) {
      id
      testPackId
      chemicalAnalysisId
      createdAt
      updatedAt
      testpack {
        id
        name
        description
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
        testPackChemicalAnalysis {
          nextToken
        }
      }
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
    }
  }
`;
export const deleteTestPackChemicalAnalysis = /* GraphQL */ `
  mutation DeleteTestPackChemicalAnalysis(
    $input: DeleteTestPackChemicalAnalysisInput!
    $condition: ModelTestPackChemicalAnalysisConditionInput
  ) {
    deleteTestPackChemicalAnalysis(input: $input, condition: $condition) {
      id
      testPackId
      chemicalAnalysisId
      createdAt
      updatedAt
      testpack {
        id
        name
        description
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
        testPackChemicalAnalysis {
          nextToken
        }
      }
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
    }
  }
`;
export const createChemical = /* GraphQL */ `
  mutation CreateChemical(
    $input: CreateChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    createChemical(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      chemicalAnalysisChemical {
        items {
          id
          chemicalId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalImpacts {
        items {
          id
          chemicalId
          impactId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateChemical = /* GraphQL */ `
  mutation UpdateChemical(
    $input: UpdateChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    updateChemical(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      chemicalAnalysisChemical {
        items {
          id
          chemicalId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalImpacts {
        items {
          id
          chemicalId
          impactId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteChemical = /* GraphQL */ `
  mutation DeleteChemical(
    $input: DeleteChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    deleteChemical(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      chemicalAnalysisChemical {
        items {
          id
          chemicalId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
      chemicalImpacts {
        items {
          id
          chemicalId
          impactId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createChemicalAnalysisChemical = /* GraphQL */ `
  mutation CreateChemicalAnalysisChemical(
    $input: CreateChemicalAnalysisChemicalInput!
    $condition: ModelChemicalAnalysisChemicalConditionInput
  ) {
    createChemicalAnalysisChemical(input: $input, condition: $condition) {
      id
      chemicalId
      chemicalAnalysisId
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const updateChemicalAnalysisChemical = /* GraphQL */ `
  mutation UpdateChemicalAnalysisChemical(
    $input: UpdateChemicalAnalysisChemicalInput!
    $condition: ModelChemicalAnalysisChemicalConditionInput
  ) {
    updateChemicalAnalysisChemical(input: $input, condition: $condition) {
      id
      chemicalId
      chemicalAnalysisId
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const deleteChemicalAnalysisChemical = /* GraphQL */ `
  mutation DeleteChemicalAnalysisChemical(
    $input: DeleteChemicalAnalysisChemicalInput!
    $condition: ModelChemicalAnalysisChemicalConditionInput
  ) {
    deleteChemicalAnalysisChemical(input: $input, condition: $condition) {
      id
      chemicalId
      chemicalAnalysisId
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const createImpactCategory = /* GraphQL */ `
  mutation CreateImpactCategory(
    $input: CreateImpactCategoryInput!
    $condition: ModelImpactCategoryConditionInput
  ) {
    createImpactCategory(input: $input, condition: $condition) {
      id
      name
      description
      iconLink
      createdAt
      updatedAt
      impacts {
        items {
          id
          name
          description
          iconLink
          impactCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateImpactCategory = /* GraphQL */ `
  mutation UpdateImpactCategory(
    $input: UpdateImpactCategoryInput!
    $condition: ModelImpactCategoryConditionInput
  ) {
    updateImpactCategory(input: $input, condition: $condition) {
      id
      name
      description
      iconLink
      createdAt
      updatedAt
      impacts {
        items {
          id
          name
          description
          iconLink
          impactCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteImpactCategory = /* GraphQL */ `
  mutation DeleteImpactCategory(
    $input: DeleteImpactCategoryInput!
    $condition: ModelImpactCategoryConditionInput
  ) {
    deleteImpactCategory(input: $input, condition: $condition) {
      id
      name
      description
      iconLink
      createdAt
      updatedAt
      impacts {
        items {
          id
          name
          description
          iconLink
          impactCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createImpact = /* GraphQL */ `
  mutation CreateImpact(
    $input: CreateImpactInput!
    $condition: ModelImpactConditionInput
  ) {
    createImpact(input: $input, condition: $condition) {
      id
      name
      description
      iconLink
      impactCategoryId
      createdAt
      updatedAt
      chemicalImpacts {
        items {
          id
          chemicalId
          impactId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateImpact = /* GraphQL */ `
  mutation UpdateImpact(
    $input: UpdateImpactInput!
    $condition: ModelImpactConditionInput
  ) {
    updateImpact(input: $input, condition: $condition) {
      id
      name
      description
      iconLink
      impactCategoryId
      createdAt
      updatedAt
      chemicalImpacts {
        items {
          id
          chemicalId
          impactId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteImpact = /* GraphQL */ `
  mutation DeleteImpact(
    $input: DeleteImpactInput!
    $condition: ModelImpactConditionInput
  ) {
    deleteImpact(input: $input, condition: $condition) {
      id
      name
      description
      iconLink
      impactCategoryId
      createdAt
      updatedAt
      chemicalImpacts {
        items {
          id
          chemicalId
          impactId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createChemicalImpact = /* GraphQL */ `
  mutation CreateChemicalImpact(
    $input: CreateChemicalImpactInput!
    $condition: ModelChemicalImpactConditionInput
  ) {
    createChemicalImpact(input: $input, condition: $condition) {
      id
      chemicalId
      impactId
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
      impact {
        id
        name
        description
        iconLink
        impactCategoryId
        createdAt
        updatedAt
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const updateChemicalImpact = /* GraphQL */ `
  mutation UpdateChemicalImpact(
    $input: UpdateChemicalImpactInput!
    $condition: ModelChemicalImpactConditionInput
  ) {
    updateChemicalImpact(input: $input, condition: $condition) {
      id
      chemicalId
      impactId
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
      impact {
        id
        name
        description
        iconLink
        impactCategoryId
        createdAt
        updatedAt
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const deleteChemicalImpact = /* GraphQL */ `
  mutation DeleteChemicalImpact(
    $input: DeleteChemicalImpactInput!
    $condition: ModelChemicalImpactConditionInput
  ) {
    deleteChemicalImpact(input: $input, condition: $condition) {
      id
      chemicalId
      impactId
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
      impact {
        id
        name
        description
        iconLink
        impactCategoryId
        createdAt
        updatedAt
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      localUserId
      count
      purchasedDate
      samplingDate
      resultDate
      orderStatus
      paymentStatus
      email
      name
      addressPart1
      addressPart2
      contactNumber
      profileImageLink
      country
      city
      postalCode
      company
      createdAt
      updatedAt
      owner
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      localUserId
      count
      purchasedDate
      samplingDate
      resultDate
      orderStatus
      paymentStatus
      email
      name
      addressPart1
      addressPart2
      contactNumber
      profileImageLink
      country
      city
      postalCode
      company
      createdAt
      updatedAt
      owner
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createChemicalAnalysisOrder = /* GraphQL */ `
  mutation CreateChemicalAnalysisOrder(
    $input: CreateChemicalAnalysisOrderInput!
    $condition: ModelChemicalAnalysisOrderConditionInput
  ) {
    createChemicalAnalysisOrder(input: $input, condition: $condition) {
      id
      orderId
      chemicalAnalysisId
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      order {
        id
        localUserId
        count
        purchasedDate
        samplingDate
        resultDate
        orderStatus
        paymentStatus
        email
        name
        addressPart1
        addressPart2
        contactNumber
        profileImageLink
        country
        city
        postalCode
        company
        createdAt
        updatedAt
        owner
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemicalAnalysisResults {
        items {
          id
          chemicalAnalysisOrderId
          chemicalId
          detection
          resultType
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateChemicalAnalysisOrder = /* GraphQL */ `
  mutation UpdateChemicalAnalysisOrder(
    $input: UpdateChemicalAnalysisOrderInput!
    $condition: ModelChemicalAnalysisOrderConditionInput
  ) {
    updateChemicalAnalysisOrder(input: $input, condition: $condition) {
      id
      orderId
      chemicalAnalysisId
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      order {
        id
        localUserId
        count
        purchasedDate
        samplingDate
        resultDate
        orderStatus
        paymentStatus
        email
        name
        addressPart1
        addressPart2
        contactNumber
        profileImageLink
        country
        city
        postalCode
        company
        createdAt
        updatedAt
        owner
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemicalAnalysisResults {
        items {
          id
          chemicalAnalysisOrderId
          chemicalId
          detection
          resultType
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteChemicalAnalysisOrder = /* GraphQL */ `
  mutation DeleteChemicalAnalysisOrder(
    $input: DeleteChemicalAnalysisOrderInput!
    $condition: ModelChemicalAnalysisOrderConditionInput
  ) {
    deleteChemicalAnalysisOrder(input: $input, condition: $condition) {
      id
      orderId
      chemicalAnalysisId
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      order {
        id
        localUserId
        count
        purchasedDate
        samplingDate
        resultDate
        orderStatus
        paymentStatus
        email
        name
        addressPart1
        addressPart2
        contactNumber
        profileImageLink
        country
        city
        postalCode
        company
        createdAt
        updatedAt
        owner
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemicalAnalysisResults {
        items {
          id
          chemicalAnalysisOrderId
          chemicalId
          detection
          resultType
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createChemicalAnalysisResult = /* GraphQL */ `
  mutation CreateChemicalAnalysisResult(
    $input: CreateChemicalAnalysisResultInput!
    $condition: ModelChemicalAnalysisResultConditionInput
  ) {
    createChemicalAnalysisResult(input: $input, condition: $condition) {
      id
      chemicalAnalysisOrderId
      chemicalId
      detection
      resultType
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const updateChemicalAnalysisResult = /* GraphQL */ `
  mutation UpdateChemicalAnalysisResult(
    $input: UpdateChemicalAnalysisResultInput!
    $condition: ModelChemicalAnalysisResultConditionInput
  ) {
    updateChemicalAnalysisResult(input: $input, condition: $condition) {
      id
      chemicalAnalysisOrderId
      chemicalId
      detection
      resultType
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
export const deleteChemicalAnalysisResult = /* GraphQL */ `
  mutation DeleteChemicalAnalysisResult(
    $input: DeleteChemicalAnalysisResultInput!
    $condition: ModelChemicalAnalysisResultConditionInput
  ) {
    deleteChemicalAnalysisResult(input: $input, condition: $condition) {
      id
      chemicalAnalysisOrderId
      chemicalId
      detection
      resultType
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;
