export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Arena = {
  __typename?: 'Arena'
  id: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt?: Maybe<Scalars['DateTime']>
  wins: Scalars['Int']
  losingGame: Scalars['Int']
  coins: Scalars['Int']
  cardPack: Scalars['Int']
  dust?: Maybe<Scalars['Int']>
  common?: Maybe<Scalars['Int']>
  rare?: Maybe<Scalars['Int']>
  epic?: Maybe<Scalars['Int']>
  heroId: Scalars['Int']
}

export type CreateArenaInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  wins: Scalars['Int']
  losingGame: Scalars['Int']
  coins: Scalars['Int']
  cardPack: Scalars['Int']
  dust?: InputMaybe<Scalars['Int']>
  common?: InputMaybe<Scalars['Int']>
  rare?: InputMaybe<Scalars['Int']>
  epic?: InputMaybe<Scalars['Int']>
  legendary?: InputMaybe<Scalars['Int']>
  heroId: Scalars['Int']
}

export type UpdateArenaInput = {
  id: Scalars['Int']
  updatedAt?: InputMaybe<Scalars['DateTime']>
  wins?: InputMaybe<Scalars['Int']>
  losingGame?: InputMaybe<Scalars['Int']>
  coins?: InputMaybe<Scalars['Int']>
  cardPack?: InputMaybe<Scalars['Int']>
  dust?: InputMaybe<Scalars['Int']>
  common?: InputMaybe<Scalars['Int']>
  rare?: InputMaybe<Scalars['Int']>
  epic?: InputMaybe<Scalars['Int']>
  legendary?: InputMaybe<Scalars['Int']>
  heroId?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  arenas: Array<Maybe<Arena>>
  arena?: Maybe<Arena>
  heros: Array<Maybe<Hero>>
  hero?: Maybe<Hero>
}

export type QueryArenaArgs = {
  id: Scalars['Int']
}

export type QueryHeroArgs = {
  id: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  createArena: Arena
  updateArena: Arena
  removeArena?: Maybe<Arena>
  createHero: Hero
  updateHero: Hero
  removeHero?: Maybe<Hero>
}

export type MutationCreateArenaArgs = {
  createArenaInput: CreateArenaInput
}

export type MutationUpdateArenaArgs = {
  updateArenaInput: UpdateArenaInput
}

export type MutationRemoveArenaArgs = {
  id: Scalars['Int']
}

export type MutationCreateHeroArgs = {
  createHeroInput: CreateHeroInput
}

export type MutationUpdateHeroArgs = {
  updateHeroInput: UpdateHeroInput
}

export type MutationRemoveHeroArgs = {
  id: Scalars['Int']
}

export type Hero = {
  __typename?: 'Hero'
  id: Scalars['Int']
  name: Scalars['String']
  nameCN: Scalars['String']
  arenaWins: Array<Arena>
}

export type CreateHeroInput = {
  name: Scalars['String']
  nameCN: Scalars['String']
}

export type UpdateHeroInput = {
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  nameCN?: InputMaybe<Scalars['String']>
}
