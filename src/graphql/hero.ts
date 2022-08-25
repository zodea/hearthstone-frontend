import gql from 'graphql-tag'
import * as Urql from 'urql'
import { Exact, Hero } from '../types/graphql'

export type QueryQueryVariables = Exact<{ [key: string]: never }>

export type HerosNameQuery = {
  __typename?: 'Query'
  heros: Array<Omit<Hero, 'arenaWins'>>
}

export type HerosArenaQuery = {
  __typename?: 'Query'
  heros: Array<Hero>
}

export const getHerosNameGql = gql`
  query Query {
    heros {
      id
      name
      nameCN
    }
  }
`

export function useHerosNameQuery(options?: Omit<Urql.UseQueryArgs<QueryQueryVariables>, 'query'>) {
  return Urql.useQuery<HerosNameQuery, QueryQueryVariables>({ query: getHerosNameGql, ...options })
}

export const getHerosArenaGql = gql`
  query Query {
    heros {
      id
      name
      nameCN
      arenaWins {
        id
        createdAt
        updatedAt
        wins
        losingGame
        coins
        cardPack
        dust
        common
        rare
        epic
        heroId
      }
    }
  }
`

export function useHerosArenaQuery(
  options?: Omit<Urql.UseQueryArgs<QueryQueryVariables>, 'query'>,
) {
  return Urql.useQuery<HerosArenaQuery, QueryQueryVariables>({
    query: getHerosArenaGql,
    ...options,
  })
}
