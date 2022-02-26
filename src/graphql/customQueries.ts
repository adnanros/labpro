
export const sampleCategoryDetailsQuery = /* GraphQL */ `
  query ListTestGroups(
    $filter: ModelTestGroupFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelTestGroupTestPackFilterInput
    $limit2: Int
    $nextToken2: String
    $filter3: ModelTestPackChemicalAnalysisFilterInput
    $limit3: Int
    $nextToken3: String
  ) {
    listTestGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    },
    listTestGroupTestPacks(
      filter: $filter2
      limit: $limit2
      nextToken: $nextToken2
    ) {
      items {
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
        }
        testpack {
          id
          name
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    },
    listTestPackChemicalAnalysiss(
      filter: $filter3
      limit: $limit3
      nextToken: $nextToken3
    ) {
      items {
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
        }
        chemicalAnalysis {
          id
          name
          price
          discount
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
