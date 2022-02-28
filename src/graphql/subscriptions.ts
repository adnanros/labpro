/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocalUser = /* GraphQL */ `
  subscription OnCreateLocalUser($owner: String!) {
    onCreateLocalUser(owner: $owner) {
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
          chemicalAnalysisIds
          createdAt
          updatedAt
          owner
          chemicalAnalysisOrder {
            nextToken
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateLocalUser = /* GraphQL */ `
  subscription OnUpdateLocalUser($owner: String!) {
    onUpdateLocalUser(owner: $owner) {
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
          chemicalAnalysisIds
          createdAt
          updatedAt
          owner
          chemicalAnalysisOrder {
            nextToken
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteLocalUser = /* GraphQL */ `
  subscription OnDeleteLocalUser($owner: String!) {
    onDeleteLocalUser(owner: $owner) {
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
          chemicalAnalysisIds
          createdAt
          updatedAt
          owner
          chemicalAnalysisOrder {
            nextToken
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
      chemicalAnalysisIds
      createdAt
      updatedAt
      owner
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
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
            chemicalAnalysisIds
            createdAt
            updatedAt
            owner
          }
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
          }
          chemicalAnalysisResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
      chemicalAnalysisIds
      createdAt
      updatedAt
      owner
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
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
            chemicalAnalysisIds
            createdAt
            updatedAt
            owner
          }
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
          }
          chemicalAnalysisResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
      chemicalAnalysisIds
      createdAt
      updatedAt
      owner
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
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
            chemicalAnalysisIds
            createdAt
            updatedAt
            owner
          }
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
          }
          chemicalAnalysisResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateSampleCategory = /* GraphQL */ `
  subscription OnCreateSampleCategory {
    onCreateSampleCategory {
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
          testGroupTestPack {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateSampleCategory = /* GraphQL */ `
  subscription OnUpdateSampleCategory {
    onUpdateSampleCategory {
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
          testGroupTestPack {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteSampleCategory = /* GraphQL */ `
  subscription OnDeleteSampleCategory {
    onDeleteSampleCategory {
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
          testGroupTestPack {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateTestGroup = /* GraphQL */ `
  subscription OnCreateTestGroup {
    onCreateTestGroup {
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
      }
    }
  }
`;
export const onUpdateTestGroup = /* GraphQL */ `
  subscription OnUpdateTestGroup {
    onUpdateTestGroup {
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
      }
    }
  }
`;
export const onDeleteTestGroup = /* GraphQL */ `
  subscription OnDeleteTestGroup {
    onDeleteTestGroup {
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
      }
    }
  }
`;
export const onCreateTestGroupTestPack = /* GraphQL */ `
  subscription OnCreateTestGroupTestPack {
    onCreateTestGroupTestPack {
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
      testpack {
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
  }
`;
export const onUpdateTestGroupTestPack = /* GraphQL */ `
  subscription OnUpdateTestGroupTestPack {
    onUpdateTestGroupTestPack {
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
      testpack {
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
  }
`;
export const onDeleteTestGroupTestPack = /* GraphQL */ `
  subscription OnDeleteTestGroupTestPack {
    onDeleteTestGroupTestPack {
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
      testpack {
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
  }
`;
export const onCreateTestPack = /* GraphQL */ `
  subscription OnCreateTestPack {
    onCreateTestPack {
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
      }
      testPackChemicalAnalysis {
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
  }
`;
export const onUpdateTestPack = /* GraphQL */ `
  subscription OnUpdateTestPack {
    onUpdateTestPack {
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
      }
      testPackChemicalAnalysis {
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
  }
`;
export const onDeleteTestPack = /* GraphQL */ `
  subscription OnDeleteTestPack {
    onDeleteTestPack {
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
      }
      testPackChemicalAnalysis {
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
  }
`;
export const onCreateChemicalAnalysis = /* GraphQL */ `
  subscription OnCreateChemicalAnalysis {
    onCreateChemicalAnalysis {
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
      chemicalAnalysisChemical {
        items {
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
          }
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
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
            chemicalAnalysisIds
            createdAt
            updatedAt
            owner
          }
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
          }
          chemicalAnalysisResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateChemicalAnalysis = /* GraphQL */ `
  subscription OnUpdateChemicalAnalysis {
    onUpdateChemicalAnalysis {
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
      chemicalAnalysisChemical {
        items {
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
          }
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
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
            chemicalAnalysisIds
            createdAt
            updatedAt
            owner
          }
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
          }
          chemicalAnalysisResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteChemicalAnalysis = /* GraphQL */ `
  subscription OnDeleteChemicalAnalysis {
    onDeleteChemicalAnalysis {
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
      chemicalAnalysisChemical {
        items {
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
          }
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      chemicalAnalysisOrder {
        items {
          id
          orderId
          chemicalAnalysisId
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
            chemicalAnalysisIds
            createdAt
            updatedAt
            owner
          }
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
          }
          chemicalAnalysisResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateTestPackChemicalAnalysis = /* GraphQL */ `
  subscription OnCreateTestPackChemicalAnalysis {
    onCreateTestPackChemicalAnalysis {
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
      chemicalAnalysis {
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
  }
`;
export const onUpdateTestPackChemicalAnalysis = /* GraphQL */ `
  subscription OnUpdateTestPackChemicalAnalysis {
    onUpdateTestPackChemicalAnalysis {
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
      chemicalAnalysis {
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
  }
`;
export const onDeleteTestPackChemicalAnalysis = /* GraphQL */ `
  subscription OnDeleteTestPackChemicalAnalysis {
    onDeleteTestPackChemicalAnalysis {
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
      chemicalAnalysis {
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
  }
`;
export const onCreateChemical = /* GraphQL */ `
  subscription OnCreateChemical {
    onCreateChemical {
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
          chemicalAnalysis {
            id
            name
            price
            discount
            description
            createdAt
            updatedAt
          }
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
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
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
          impact {
            id
            name
            description
            iconLink
            impactCategoryId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateChemical = /* GraphQL */ `
  subscription OnUpdateChemical {
    onUpdateChemical {
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
          chemicalAnalysis {
            id
            name
            price
            discount
            description
            createdAt
            updatedAt
          }
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
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
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
          impact {
            id
            name
            description
            iconLink
            impactCategoryId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteChemical = /* GraphQL */ `
  subscription OnDeleteChemical {
    onDeleteChemical {
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
          chemicalAnalysis {
            id
            name
            price
            discount
            description
            createdAt
            updatedAt
          }
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
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
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
          impact {
            id
            name
            description
            iconLink
            impactCategoryId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateChemicalAnalysisChemical = /* GraphQL */ `
  subscription OnCreateChemicalAnalysisChemical {
    onCreateChemicalAnalysisChemical {
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
      chemical {
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
  }
`;
export const onUpdateChemicalAnalysisChemical = /* GraphQL */ `
  subscription OnUpdateChemicalAnalysisChemical {
    onUpdateChemicalAnalysisChemical {
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
      chemical {
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
  }
`;
export const onDeleteChemicalAnalysisChemical = /* GraphQL */ `
  subscription OnDeleteChemicalAnalysisChemical {
    onDeleteChemicalAnalysisChemical {
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
      chemical {
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
  }
`;
export const onCreateImpactCategory = /* GraphQL */ `
  subscription OnCreateImpactCategory {
    onCreateImpactCategory {
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
          chemicalImpacts {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateImpactCategory = /* GraphQL */ `
  subscription OnUpdateImpactCategory {
    onUpdateImpactCategory {
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
          chemicalImpacts {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteImpactCategory = /* GraphQL */ `
  subscription OnDeleteImpactCategory {
    onDeleteImpactCategory {
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
          chemicalImpacts {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateImpact = /* GraphQL */ `
  subscription OnCreateImpact {
    onCreateImpact {
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
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
          impact {
            id
            name
            description
            iconLink
            impactCategoryId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateImpact = /* GraphQL */ `
  subscription OnUpdateImpact {
    onUpdateImpact {
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
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
          impact {
            id
            name
            description
            iconLink
            impactCategoryId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteImpact = /* GraphQL */ `
  subscription OnDeleteImpact {
    onDeleteImpact {
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
          chemical {
            id
            name
            description
            createdAt
            updatedAt
          }
          impact {
            id
            name
            description
            iconLink
            impactCategoryId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateChemicalImpact = /* GraphQL */ `
  subscription OnCreateChemicalImpact {
    onCreateChemicalImpact {
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
      impact {
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
  }
`;
export const onUpdateChemicalImpact = /* GraphQL */ `
  subscription OnUpdateChemicalImpact {
    onUpdateChemicalImpact {
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
      impact {
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
  }
`;
export const onDeleteChemicalImpact = /* GraphQL */ `
  subscription OnDeleteChemicalImpact {
    onDeleteChemicalImpact {
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
      impact {
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
  }
`;
export const onCreateChemicalAnalysisOrder = /* GraphQL */ `
  subscription OnCreateChemicalAnalysisOrder {
    onCreateChemicalAnalysisOrder {
      id
      orderId
      chemicalAnalysisId
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
        chemicalAnalysisIds
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
      chemicalAnalysisResults {
        items {
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
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateChemicalAnalysisOrder = /* GraphQL */ `
  subscription OnUpdateChemicalAnalysisOrder {
    onUpdateChemicalAnalysisOrder {
      id
      orderId
      chemicalAnalysisId
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
        chemicalAnalysisIds
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
      chemicalAnalysisResults {
        items {
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
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteChemicalAnalysisOrder = /* GraphQL */ `
  subscription OnDeleteChemicalAnalysisOrder {
    onDeleteChemicalAnalysisOrder {
      id
      orderId
      chemicalAnalysisId
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
        chemicalAnalysisIds
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
      chemicalAnalysisResults {
        items {
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
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateChemicalAnalysisResult = /* GraphQL */ `
  subscription OnCreateChemicalAnalysisResult {
    onCreateChemicalAnalysisResult {
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
  }
`;
export const onUpdateChemicalAnalysisResult = /* GraphQL */ `
  subscription OnUpdateChemicalAnalysisResult {
    onUpdateChemicalAnalysisResult {
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
  }
`;
export const onDeleteChemicalAnalysisResult = /* GraphQL */ `
  subscription OnDeleteChemicalAnalysisResult {
    onDeleteChemicalAnalysisResult {
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
  }
`;
