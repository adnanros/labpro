export const batchCreateOrderData = /* GraphQL */ `
  mutation batchCreateOrderData(
    $CreateChemicalAnalysisOrders: [CreateChemicalAnalysisOrderInput]
    $CreateChemicalAnalysisResults: [CreateChemicalAnalysisResultInput]
  ) {
    batchCreateChemicalAnalysisOrders(
      CreateChemicalAnalysisOrders: $CreateChemicalAnalysisOrders
    ) {
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
    },
    batchCreateChemicalAnalysisResults(
      CreateChemicalAnalysisResults: $CreateChemicalAnalysisResults
    ) {
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