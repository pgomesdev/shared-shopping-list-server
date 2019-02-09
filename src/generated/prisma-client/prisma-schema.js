module.exports = {
        typeDefs: /* GraphQL */ `type AggregateItem {
  count: Int!
}

type AggregateShoppingList {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Item {
  id: ID!
  name: String!
  price: Float
  quantity: Int
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  name: String!
  price: Float
  quantity: Int
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  price: Float
  quantity: Int
}

input ItemScalarWhereInput {
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
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  name: String
  price: Float
  quantity: Int
}

input ItemUpdateInput {
  name: String
  price: Float
  quantity: Int
}

input ItemUpdateManyDataInput {
  name: String
  price: Float
  quantity: Int
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyMutationInput {
  name: String
  price: Float
  quantity: Int
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateDataInput!
}

input ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
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
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
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
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  shoppingList(where: ShoppingListWhereUniqueInput!): ShoppingList
  shoppingLists(where: ShoppingListWhereInput, orderBy: ShoppingListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShoppingList]!
  shoppingListsConnection(where: ShoppingListWhereInput, orderBy: ShoppingListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShoppingListConnection!
  node(id: ID!): Node
}

type ShoppingList {
  id: ID!
  createdAt: DateTime!
  name: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  store: [String!]!
}

type ShoppingListConnection {
  pageInfo: PageInfo!
  edges: [ShoppingListEdge]!
  aggregate: AggregateShoppingList!
}

input ShoppingListCreateInput {
  name: String!
  items: ItemCreateManyInput
  store: ShoppingListCreatestoreInput
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
  items: ItemUpdateManyInput
  store: ShoppingListUpdatestoreInput
}

input ShoppingListUpdateManyMutationInput {
  name: String
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
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  AND: [ShoppingListWhereInput!]
  OR: [ShoppingListWhereInput!]
  NOT: [ShoppingListWhereInput!]
}

input ShoppingListWhereUniqueInput {
  id: ID
}

type Subscription {
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  shoppingList(where: ShoppingListSubscriptionWhereInput): ShoppingListSubscriptionPayload
}
`
      }
    