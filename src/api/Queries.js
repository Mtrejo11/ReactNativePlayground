import gql from 'graphql-tag'


export const getPokemons = gql`
    query pokemonList {
        pokemon @rest(type: "Pokemon List", path: "pokemon") {
            results @type(name: "Pokemon") {
                name
            }
        }
    }
`

