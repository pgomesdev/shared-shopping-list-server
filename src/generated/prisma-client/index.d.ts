// Code generated by Prisma (prisma@1.27.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  item: (where?: ItemWhereInput) => Promise<boolean>;
  shoppingList: (where?: ShoppingListWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  item: (where: ItemWhereUniqueInput) => ItemPromise;
  items: (
    args?: {
      where?: ItemWhereInput;
      orderBy?: ItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Item>;
  itemsConnection: (
    args?: {
      where?: ItemWhereInput;
      orderBy?: ItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ItemConnectionPromise;
  shoppingList: (where: ShoppingListWhereUniqueInput) => ShoppingListPromise;
  shoppingLists: (
    args?: {
      where?: ShoppingListWhereInput;
      orderBy?: ShoppingListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ShoppingList>;
  shoppingListsConnection: (
    args?: {
      where?: ShoppingListWhereInput;
      orderBy?: ShoppingListOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ShoppingListConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createItem: (data: ItemCreateInput) => ItemPromise;
  updateItem: (
    args: { data: ItemUpdateInput; where: ItemWhereUniqueInput }
  ) => ItemPromise;
  updateManyItems: (
    args: { data: ItemUpdateManyMutationInput; where?: ItemWhereInput }
  ) => BatchPayloadPromise;
  upsertItem: (
    args: {
      where: ItemWhereUniqueInput;
      create: ItemCreateInput;
      update: ItemUpdateInput;
    }
  ) => ItemPromise;
  deleteItem: (where: ItemWhereUniqueInput) => ItemPromise;
  deleteManyItems: (where?: ItemWhereInput) => BatchPayloadPromise;
  createShoppingList: (data: ShoppingListCreateInput) => ShoppingListPromise;
  updateShoppingList: (
    args: { data: ShoppingListUpdateInput; where: ShoppingListWhereUniqueInput }
  ) => ShoppingListPromise;
  updateManyShoppingLists: (
    args: {
      data: ShoppingListUpdateManyMutationInput;
      where?: ShoppingListWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertShoppingList: (
    args: {
      where: ShoppingListWhereUniqueInput;
      create: ShoppingListCreateInput;
      update: ShoppingListUpdateInput;
    }
  ) => ShoppingListPromise;
  deleteShoppingList: (
    where: ShoppingListWhereUniqueInput
  ) => ShoppingListPromise;
  deleteManyShoppingLists: (
    where?: ShoppingListWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  item: (
    where?: ItemSubscriptionWhereInput
  ) => ItemSubscriptionPayloadSubscription;
  shoppingList: (
    where?: ShoppingListSubscriptionWhereInput
  ) => ShoppingListSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "quantity_ASC"
  | "quantity_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ShoppingListOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ItemUpdateInput {
  name?: String;
  quantity?: Float;
  price?: ItemUpdatepriceInput;
}

export type ItemWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ItemUpdateManyMutationInput {
  name?: String;
  quantity?: Float;
  price?: ItemUpdatepriceInput;
}

export interface ItemWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  quantity?: Float;
  quantity_not?: Float;
  quantity_in?: Float[] | Float;
  quantity_not_in?: Float[] | Float;
  quantity_lt?: Float;
  quantity_lte?: Float;
  quantity_gt?: Float;
  quantity_gte?: Float;
  AND?: ItemWhereInput[] | ItemWhereInput;
  OR?: ItemWhereInput[] | ItemWhereInput;
  NOT?: ItemWhereInput[] | ItemWhereInput;
}

export interface ItemUpdateDataInput {
  name?: String;
  quantity?: Float;
  price?: ItemUpdatepriceInput;
}

export interface ShoppingListCreateInput {
  name: String;
  items?: ItemCreateManyInput;
}

export interface ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput;
  data: ItemUpdateDataInput;
}

export interface ItemSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ItemWhereInput;
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput;
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput;
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput;
}

export type ShoppingListWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ItemCreateManyInput {
  create?: ItemCreateInput[] | ItemCreateInput;
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput;
}

export interface ItemCreateInput {
  name: String;
  quantity?: Float;
  price?: ItemCreatepriceInput;
}

export interface ItemUpdateManyDataInput {
  name?: String;
  quantity?: Float;
  price?: ItemUpdatepriceInput;
}

export interface ShoppingListWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  items_every?: ItemWhereInput;
  items_some?: ItemWhereInput;
  items_none?: ItemWhereInput;
  AND?: ShoppingListWhereInput[] | ShoppingListWhereInput;
  OR?: ShoppingListWhereInput[] | ShoppingListWhereInput;
  NOT?: ShoppingListWhereInput[] | ShoppingListWhereInput;
}

export interface ShoppingListUpdateInput {
  name?: String;
  items?: ItemUpdateManyInput;
}

export interface ItemUpdatepriceInput {
  set?: Float[] | Float;
}

export interface ItemUpdateManyInput {
  create?: ItemCreateInput[] | ItemCreateInput;
  update?:
    | ItemUpdateWithWhereUniqueNestedInput[]
    | ItemUpdateWithWhereUniqueNestedInput;
  upsert?:
    | ItemUpsertWithWhereUniqueNestedInput[]
    | ItemUpsertWithWhereUniqueNestedInput;
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput;
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput;
  set?: ItemWhereUniqueInput[] | ItemWhereUniqueInput;
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput;
  deleteMany?: ItemScalarWhereInput[] | ItemScalarWhereInput;
  updateMany?:
    | ItemUpdateManyWithWhereNestedInput[]
    | ItemUpdateManyWithWhereNestedInput;
}

export interface ItemCreatepriceInput {
  set?: Float[] | Float;
}

export interface ItemScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  quantity?: Float;
  quantity_not?: Float;
  quantity_in?: Float[] | Float;
  quantity_not_in?: Float[] | Float;
  quantity_lt?: Float;
  quantity_lte?: Float;
  quantity_gt?: Float;
  quantity_gte?: Float;
  AND?: ItemScalarWhereInput[] | ItemScalarWhereInput;
  OR?: ItemScalarWhereInput[] | ItemScalarWhereInput;
  NOT?: ItemScalarWhereInput[] | ItemScalarWhereInput;
}

export interface ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput;
  data: ItemUpdateManyDataInput;
}

export interface ShoppingListUpdateManyMutationInput {
  name?: String;
}

export interface ShoppingListSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ShoppingListWhereInput;
  AND?:
    | ShoppingListSubscriptionWhereInput[]
    | ShoppingListSubscriptionWhereInput;
  OR?:
    | ShoppingListSubscriptionWhereInput[]
    | ShoppingListSubscriptionWhereInput;
  NOT?:
    | ShoppingListSubscriptionWhereInput[]
    | ShoppingListSubscriptionWhereInput;
}

export interface ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput;
  update: ItemUpdateDataInput;
  create: ItemCreateInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ShoppingListPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ShoppingListPreviousValuesPromise
  extends Promise<ShoppingListPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ShoppingListPreviousValuesSubscription
  extends Promise<AsyncIterator<ShoppingListPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ItemPreviousValues {
  id: ID_Output;
  name: String;
  quantity?: Float;
  price: Float[];
}

export interface ItemPreviousValuesPromise
  extends Promise<ItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  quantity: () => Promise<Float>;
  price: () => Promise<Float[]>;
}

export interface ItemPreviousValuesSubscription
  extends Promise<AsyncIterator<ItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Float>>;
  price: () => Promise<AsyncIterator<Float[]>>;
}

export interface Item {
  id: ID_Output;
  name: String;
  quantity?: Float;
  price: Float[];
}

export interface ItemPromise extends Promise<Item>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  quantity: () => Promise<Float>;
  price: () => Promise<Float[]>;
}

export interface ItemSubscription
  extends Promise<AsyncIterator<Item>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Float>>;
  price: () => Promise<AsyncIterator<Float[]>>;
}

export interface AggregateItem {
  count: Int;
}

export interface AggregateItemPromise
  extends Promise<AggregateItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateItemSubscription
  extends Promise<AsyncIterator<AggregateItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ItemSubscriptionPayload {
  mutation: MutationType;
  node: Item;
  updatedFields: String[];
  previousValues: ItemPreviousValues;
}

export interface ItemSubscriptionPayloadPromise
  extends Promise<ItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ItemPreviousValuesPromise>() => T;
}

export interface ItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ItemPreviousValuesSubscription>() => T;
}

export interface ItemEdge {
  node: Item;
  cursor: String;
}

export interface ItemEdgePromise extends Promise<ItemEdge>, Fragmentable {
  node: <T = ItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ItemEdgeSubscription
  extends Promise<AsyncIterator<ItemEdge>>,
    Fragmentable {
  node: <T = ItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ItemConnection {
  pageInfo: PageInfo;
  edges: ItemEdge[];
}

export interface ItemConnectionPromise
  extends Promise<ItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ItemEdge>>() => T;
  aggregate: <T = AggregateItemPromise>() => T;
}

export interface ItemConnectionSubscription
  extends Promise<AsyncIterator<ItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateItemSubscription>() => T;
}

export interface ShoppingList {
  id: ID_Output;
  name: String;
}

export interface ShoppingListPromise
  extends Promise<ShoppingList>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  items: <T = FragmentableArray<Item>>(
    args?: {
      where?: ItemWhereInput;
      orderBy?: ItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ShoppingListSubscription
  extends Promise<AsyncIterator<ShoppingList>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  items: <T = Promise<AsyncIterator<ItemSubscription>>>(
    args?: {
      where?: ItemWhereInput;
      orderBy?: ItemOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ShoppingListSubscriptionPayload {
  mutation: MutationType;
  node: ShoppingList;
  updatedFields: String[];
  previousValues: ShoppingListPreviousValues;
}

export interface ShoppingListSubscriptionPayloadPromise
  extends Promise<ShoppingListSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ShoppingListPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ShoppingListPreviousValuesPromise>() => T;
}

export interface ShoppingListSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ShoppingListSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ShoppingListSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ShoppingListPreviousValuesSubscription>() => T;
}

export interface ShoppingListConnection {
  pageInfo: PageInfo;
  edges: ShoppingListEdge[];
}

export interface ShoppingListConnectionPromise
  extends Promise<ShoppingListConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ShoppingListEdge>>() => T;
  aggregate: <T = AggregateShoppingListPromise>() => T;
}

export interface ShoppingListConnectionSubscription
  extends Promise<AsyncIterator<ShoppingListConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ShoppingListEdgeSubscription>>>() => T;
  aggregate: <T = AggregateShoppingListSubscription>() => T;
}

export interface ShoppingListEdge {
  node: ShoppingList;
  cursor: String;
}

export interface ShoppingListEdgePromise
  extends Promise<ShoppingListEdge>,
    Fragmentable {
  node: <T = ShoppingListPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ShoppingListEdgeSubscription
  extends Promise<AsyncIterator<ShoppingListEdge>>,
    Fragmentable {
  node: <T = ShoppingListSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateShoppingList {
  count: Int;
}

export interface AggregateShoppingListPromise
  extends Promise<AggregateShoppingList>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateShoppingListSubscription
  extends Promise<AsyncIterator<AggregateShoppingList>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "ShoppingList",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
