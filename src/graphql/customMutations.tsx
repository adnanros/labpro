export const createOrderMutation = /* GraphQL */ `
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