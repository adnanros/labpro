/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocalUser = /* GraphQL */ `
  query GetLocalUser($email: AWSEmail!) {
    getLocalUser(email: $email) {
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
export const listLocalUsers = /* GraphQL */ `
  query ListLocalUsers(
    $email: AWSEmail
    $filter: ModelLocalUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLocalUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getSampleCategory = /* GraphQL */ `
  query GetSampleCategory($id: ID!) {
    getSampleCategory(id: $id) {
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
export const listSampleCategorys = /* GraphQL */ `
  query ListSampleCategorys(
    $filter: ModelSampleCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSampleCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTestGroup = /* GraphQL */ `
  query GetTestGroup($id: ID!) {
    getTestGroup(id: $id) {
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
export const listTestGroups = /* GraphQL */ `
  query ListTestGroups(
    $filter: ModelTestGroupFilterInput
    $limit: Int
    $nextToken: String
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
      nextToken
    }
  }
`;
export const getTestGroupTestPack = /* GraphQL */ `
  query GetTestGroupTestPack($id: ID!) {
    getTestGroupTestPack(id: $id) {
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
export const listTestGroupTestPacks = /* GraphQL */ `
  query ListTestGroupTestPacks(
    $filter: ModelTestGroupTestPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestGroupTestPacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
      nextToken
    }
  }
`;
export const getTestPack = /* GraphQL */ `
  query GetTestPack($id: ID!) {
    getTestPack(id: $id) {
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
export const listTestPacks = /* GraphQL */ `
  query ListTestPacks(
    $filter: ModelTestPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChemicalAnalysis = /* GraphQL */ `
  query GetChemicalAnalysis($id: ID!) {
    getChemicalAnalysis(id: $id) {
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
export const listChemicalAnalysiss = /* GraphQL */ `
  query ListChemicalAnalysiss(
    $filter: ModelChemicalAnalysisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicalAnalysiss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTestPackChemicalAnalysis = /* GraphQL */ `
  query GetTestPackChemicalAnalysis($id: ID!) {
    getTestPackChemicalAnalysis(id: $id) {
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
export const listTestPackChemicalAnalysiss = /* GraphQL */ `
  query ListTestPackChemicalAnalysiss(
    $filter: ModelTestPackChemicalAnalysisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestPackChemicalAnalysiss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
      nextToken
    }
  }
`;
export const getChemical = /* GraphQL */ `
  query GetChemical($id: ID!) {
    getChemical(id: $id) {
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
export const listChemicals = /* GraphQL */ `
  query ListChemicals(
    $filter: ModelChemicalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChemicalAnalysisChemical = /* GraphQL */ `
  query GetChemicalAnalysisChemical($id: ID!) {
    getChemicalAnalysisChemical(id: $id) {
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
export const listChemicalAnalysisChemicals = /* GraphQL */ `
  query ListChemicalAnalysisChemicals(
    $filter: ModelChemicalAnalysisChemicalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicalAnalysisChemicals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getImpactCategory = /* GraphQL */ `
  query GetImpactCategory($id: ID!) {
    getImpactCategory(id: $id) {
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
export const listImpactCategorys = /* GraphQL */ `
  query ListImpactCategorys(
    $filter: ModelImpactCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImpactCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImpact = /* GraphQL */ `
  query GetImpact($id: ID!) {
    getImpact(id: $id) {
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
export const listImpacts = /* GraphQL */ `
  query ListImpacts(
    $filter: ModelImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImpacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChemicalImpact = /* GraphQL */ `
  query GetChemicalImpact($id: ID!) {
    getChemicalImpact(id: $id) {
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
export const listChemicalImpacts = /* GraphQL */ `
  query ListChemicalImpacts(
    $filter: ModelChemicalImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicalImpacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getChemicalAnalysisOrder = /* GraphQL */ `
  query GetChemicalAnalysisOrder($id: ID!) {
    getChemicalAnalysisOrder(id: $id) {
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
export const listChemicalAnalysisOrders = /* GraphQL */ `
  query ListChemicalAnalysisOrders(
    $filter: ModelChemicalAnalysisOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicalAnalysisOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          chemicalAnalysisOrder {
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
            nextToken
          }
          chemicalAnalysisChemical {
            nextToken
          }
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
      nextToken
    }
  }
`;
export const getChemicalAnalysisResult = /* GraphQL */ `
  query GetChemicalAnalysisResult($id: ID!) {
    getChemicalAnalysisResult(id: $id) {
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
export const listChemicalAnalysisResults = /* GraphQL */ `
  query ListChemicalAnalysisResults(
    $filter: ModelChemicalAnalysisResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicalAnalysisResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          chemicalAnalysisChemical {
            nextToken
          }
          chemicalImpacts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
