module.exports = {
        typeDefs: /* GraphQL */ `type AggregateShoppingList {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createShoppingList(data: ShoppingListCreateInput!): ShoppingList!
  updateShoppingList(data: ShoppingListUpdateInput!, where: ShoppingListWhereUniqueInput!): ShoppingList
  updateManyShoppingLists(data: ShoppingListUpdateManyMutationInput!, where: ShoppingListWhereInput): BatchPayload!
  upsertShoppingList(where: ShoppingListWhereUniqueInput!, create: ShoppingListCreateInput!, update: ShoppingListUpdateInput!): ShoppingList!
  deleteShoppingList(where: ShoppingListWhereUniqueInput!): ShoppingList
  deleteManyShoppingLists(where: ShoppingListWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  shoppingList(where: ShoppingListWhereUniqueInput!): ShoppingList
  shoppingLists(where: ShoppingListWhereInput, orderBy: ShoppingListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShoppingList]!
  shoppingListsConnection(where: ShoppingListWhereInput, orderBy: ShoppingListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShoppingListConnection!
  node(id: ID!): Node
}

type ShoppingList {
  id: ID!
  createdAt: DateTime!
  name: String!
  items: [String!]!
  store: [String!]!
}

type ShoppingListConnection {
  pageInfo: PageInfo!
  edges: [ShoppingListEdge]!
  aggregate: AggregateShoppingList!
}

input ShoppingListCreateInput {
  name: String!
  items: ShoppingListCreateitemsInput
  store: ShoppingListCreatestoreInput
}

input ShoppingListCreateitemsInput {
  set: [String!]
}

input ShoppingListCreatestoreInput {
  set: [String!]
}

type ShoppingListEdge {
  node: ShoppingList!
  cursor: String!
}

enum ShoppingListOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShoppingListPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  items: [String!]!
  store: [String!]!
}

type ShoppingListSubscriptionPayload {
  mutation: MutationType!
  node: ShoppingList
  updatedFields: [String!]
  previousValues: ShoppingListPreviousValues
}

input ShoppingListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShoppingListWhereInput
  AND: [ShoppingListSubscriptionWhereInput!]
  OR: [ShoppingListSubscriptionWhereInput!]
  NOT: [ShoppingListSubscriptionWhereInput!]
}

input ShoppingListUpdateInput {
  name: String
  items: ShoppingListUpdateitemsInput
  store: ShoppingListUpdatestoreInput
}

input ShoppingListUpdateitemsInput {
  set: [String!]
}

input ShoppingListUpdateManyMutationInput {
  name: String
  items: ShoppingListUpdateitemsInput
  store: ShoppingListUpdatestoreInput
}

input ShoppingListUpdatestoreInput {
  set: [String!]
}

input ShoppingListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ShoppingListWhereInput!]
  OR: [ShoppingListWhereInput!]
  NOT: [ShoppingListWhereInput!]
}

input ShoppingListWhereUniqueInput {
  id: ID
}

type Subscription {
  shoppingList(where: ShoppingListSubscriptionWhereInput): ShoppingListSubscriptionPayload
}
`
      }
    